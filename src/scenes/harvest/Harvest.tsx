import React, { useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ItemType } from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { DropdownPicker } from 'src/components/DropdownPicker'
import { StyledText } from 'src/components/StyledText'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import {
  useCheckIfWeightIsRequiredQuery,
  useHarvestMyceliumMutation,
} from 'src/store/APIs/mycellium'
import { StageResponse } from 'src/store/APIs/mycellium/types'
import { useGetRoomsQuery } from 'src/store/APIs/rooms'
import { AppTypography } from 'src/styles/types'
import { format } from 'util'

import { strings } from './strings'
import { styles } from './styles'

type Option = Partial<ItemType<string>>

export const Harvest: SceneProps<Routes.Harvest> = ({ navigation, route }) => {
  const roomId = route.params?.roomId ?? null
  const strainSource = route.params?.strainSource!
  const flush = route.params.flush ?? 0

  useGoBackNavigationOptions({
    navigation,
    title: strings.harvestHeader,
  })

  const [weight, setWeight] = useState('')
  const [notes, setNotes] = useState('')

  const { data: hasPreviousWeight, isLoading: isLoadingCheckingWeight } =
    useCheckIfWeightIsRequiredQuery({ strain_source_id: strainSource.id })

  const [triggerHarvestMycelium, { isLoading }] = useHarvestMyceliumMutation()

  const { data: roomsAvailableSerialized } = useGetRoomsQuery()

  const roomsAvailable: Option[] = useMemo(() => {
    return roomsAvailableSerialized
      ? roomsAvailableSerialized.map(
          (item): Option => ({ label: item.name, value: item.id }),
        )
      : []
  }, [roomsAvailableSerialized])

  const [room, setRoom] = useState<string | null>(roomId)

  const previousWeight = hasPreviousWeight?.result

  const validValues = room && (previousWeight ? weight : true) && strainSource

  const onPressSaveHarvest = () => {
    if (validValues) {
      triggerHarvestMycelium({
        note: notes,
        room_id: room,
        strain_source_id: strainSource?.id,
        weight: weight ? Number(weight) : null,
      })
        .unwrap()
        .then(myceliumCreated => {
          navigation.replace(Routes.AddMyceliumSuccess, {
            createdMycelia: myceliumCreated.mycelia,
            type: StageResponse.Fruit,
          })
        })
    }
  }

  const disabledButton = !validValues

  const [openId, setOpenId] = useState<string | null>(null)

  return (
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
                typography={AppTypography.LABEL_MEDIUM}>{`${format(
                strings.strainSourceInformation,
                flush + 1,
              )} ${strainSource?.name}.`}</StyledText>
            )}

            {previousWeight && (
              <StyledText
                style={styles.weightReminder}
                typography={AppTypography.LABEL_MEDIUM}>
                {strings.weightReminder}
              </StyledText>
            )}

            <StyledTextInput
              label={strings.weightLabel}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={strings.notesLabel}
              value={notes}
              onChangeText={setNotes}
              multiline={true}
              numberOfLines={4}
            />

            <DropdownPicker
              id="room"
              openId={openId}
              setOpenId={setOpenId}
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
                title={strings.saveButton}
                disabled={
                  disabledButton || isLoading || isLoadingCheckingWeight
                }
                onPress={onPressSaveHarvest}
                mode={ButtonMode.PRIMARY_SOLID}
              />
            </Container>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  )
}
