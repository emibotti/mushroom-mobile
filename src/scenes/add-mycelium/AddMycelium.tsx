import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ItemType } from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { DropdownPicker } from 'src/components/DropdownPicker'
import { LoadingActivityIndicator } from 'src/components/LoadingActivityIndicator'
import { StyledText } from 'src/components/StyledText'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import {
  useCreateMyceliumMutation,
  useGetMyceliumOptionsQuery,
} from 'src/store/APIs/mycellium'
import {
  buildGeneration,
  stage as stageTypes,
  StageResponse,
} from 'src/store/APIs/mycellium/types'
import { useGetRoomsQuery } from 'src/store/APIs/rooms'
import { AppTypography } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

type Option = Partial<ItemType<string>>

const stagesOptions: Option[] = Object.entries(stageTypes).map(
  ([value, label]) => ({
    label,
    value,
  }),
)

const generationOptions: Option[] = [...Array(5).keys()].map(index => ({
  label: buildGeneration(index - 1),
  value: `${index - 1}`,
}))

export const AddMycelium: SceneProps<Routes.AddMycelium> = ({
  navigation,
  route,
}) => {
  const roomId = route.params?.roomId ?? null
  const strainSource = route.params?.strainSource ?? null

  useGoBackNavigationOptions({
    navigation,
    title: strainSource ? strings.inoculationHeader : strings.newMyceliumHeader,
  })

  const [prefix, setPrefix] = useState('')
  const [provider, setProvider] = useState('')
  const [description, setDescription] = useState('')
  const [weight, setWeight] = useState('')
  const [shelfTime, setShelfTime] = useState('')
  const [notes, setNotes] = useState('')
  const [quantity, setQuantity] = useState('1')

  const [triggerCreateMycelium, { isLoading, data: myceliumCreated }] =
    useCreateMyceliumMutation()
  const { data: myceliumOptions } = useGetMyceliumOptionsQuery()
  const { data: roomsAvailableSerialized } = useGetRoomsQuery()

  const roomsAvailable: Option[] = useMemo(() => {
    return roomsAvailableSerialized
      ? roomsAvailableSerialized.map(
          (item): Option => ({ label: item.name, value: item.id }),
        )
      : []
  }, [roomsAvailableSerialized])

  const [type, setType] = useState<string | null>(null)
  const [species, setSpecies] = useState<string | null>(null)
  const [generation, setGeneration] = useState<string | null>(null)
  const [substrate, setSubstrate] = useState<string | null>(null)
  const [container, setContainer] = useState<string | null>(null)
  const [room, setRoom] = useState<string | null>(roomId)

  const mandatoryFields =
    prefix && type && substrate && container && room && quantity
  const validValuesInoculation = strainSource && mandatoryFields

  const validValues =
    validValuesInoculation || (mandatoryFields && species && generation)

  const onPressCreateRoom = () => {
    if (validValues) {
      triggerCreateMycelium({
        container,
        external_provider: provider,
        generation: generation ? Number(generation) : null,
        image_url: null,
        prefix,
        quantity: Number(quantity),
        room_id: room,
        shelf_time: shelfTime ? Number(shelfTime) : null,
        species,
        strain_description: description,
        strain_source_id: strainSource?.id ?? null,
        substrate,
        type: type as StageResponse,
        weight: weight ? Number(weight) : null,
      })
    }
  }

  useEffect(() => {
    // TODO: Check if this is the best place or use `unwrap()`
    if (myceliumCreated && type) {
      const createdMycelia =
        typeof myceliumCreated.mycelia === 'string'
          ? JSON.parse(myceliumCreated.mycelia)
          : myceliumCreated.mycelia

      navigation.replace(Routes.AddMyceliumSuccess, {
        createdMycelia,
        type,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myceliumCreated])

  const disabledButton = !validValues

  return myceliumOptions ? (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <View style={styles.flexible}>
        <ScrollView>
          <Container style={styles.textInputsContainer}>
            {strainSource && (
              <StyledText
                style={styles.strainSourceInformation}
                typography={
                  AppTypography.LABEL_MEDIUM
                }>{`${strings.strainSourceInformation} ${strainSource?.name}.`}</StyledText>
            )}
            <StyledTextInput
              label={strings.prefixLabel}
              onChangeText={setPrefix}
              value={prefix}
              required
            />
            <DropdownPicker
              outsideLabel={strings.stageLabel}
              value={type}
              items={stagesOptions}
              setValue={setType}
              required
            />

            {!strainSource && (
              <DropdownPicker
                outsideLabel={strings.speciesLabel}
                value={species}
                items={myceliumOptions.speciesOptions}
                setValue={setSpecies}
                required
              />
            )}

            {!strainSource && (
              <StyledTextInput
                label={strings.providerLabel}
                onChangeText={setProvider}
                value={provider}
                textContentType={'name'}
              />
            )}

            {!strainSource && (
              <DropdownPicker
                outsideLabel={strings.generationLabel}
                value={generation}
                items={generationOptions}
                setValue={setGeneration}
                required
              />
            )}

            <DropdownPicker
              outsideLabel={strings.substrateLabel}
              value={substrate}
              items={myceliumOptions.substrateOptions}
              setValue={setSubstrate}
              required
            />

            <DropdownPicker
              outsideLabel={strings.containerLabel}
              value={container}
              items={myceliumOptions.containerOptions}
              setValue={setContainer}
              required
            />

            <StyledTextInput
              label={strings.weightLabel}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={strings.shelfTimeLabel}
              value={shelfTime}
              onChangeText={setShelfTime}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={strings.quantityLabel}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />

            {!strainSource && (
              <StyledTextInput
                label={strings.descriptionLabel}
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
              />
            )}

            <StyledTextInput
              label={strings.notesLabel}
              value={notes}
              onChangeText={setNotes}
              multiline={true}
              numberOfLines={4}
            />

            <DropdownPicker
              outsideLabel={strings.roomLabel}
              value={room}
              items={roomsAvailable}
              setValue={setRoom}
              required
            />
          </Container>
          <View style={styles.buttonContainer}>
            <Container>
              <Button
                title={strings.createMyceliumButton}
                disabled={disabledButton || isLoading}
                onPress={onPressCreateRoom}
                mode={ButtonMode.PRIMARY_SOLID}
              />
            </Container>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  ) : (
    <LoadingActivityIndicator />
  )
}
