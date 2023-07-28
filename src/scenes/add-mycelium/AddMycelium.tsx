import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ItemType } from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { DropdownPicker } from 'src/components/DropdownPicker'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useCreateMyceliumMutation } from 'src/store/APIs/mycellium'
import {
  buildGeneration,
  stage as stageTypes,
} from 'src/store/APIs/mycellium/types'

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

const speciesOptions: Option[] = [
  {
    label: 'Shiitake',
    value: 'Shiitake',
  },
  {
    label: 'Pleoreotus',
    value: 'Pleoreotus',
  },
  {
    label: 'Porcini',
    value: 'Porcini',
  },
  {
    label: 'Portobello',
    value: 'Portobello',
  },
]

const substrateOptions: Option[] = [
  {
    label: 'Trigo de centerno',
    value: 'Trigo de centerno',
  },
  {
    label: 'Maíz',
    value: 'Maíz',
  },
  {
    label: 'Pulpa de café',
    value: 'Pulpa de café',
  },
  {
    label: 'Papa Dextrosa Agar',
    value: 'Papa Dextrosa Agar',
  },
]

const containerOptions: Option[] = [
  {
    label: 'Tuvo de Agar inclinado',
    value: 'Tuvo de Agar inclinado',
  },
  {
    label: 'Frasco de grano',
    value: 'Frasco de grano',
  },
  {
    label: 'Bolsa vertical',
    value: 'Bolsa vertical',
  },
]

export const AddMycelium: SceneProps<Routes.AddMycelium> = ({ navigation }) => {
  useGoBackNavigationOptions(navigation, false, strings.screenHeader)

  const [prefix, setPrefix] = useState('')
  const [provider, setProvider] = useState('')
  const [description, setDescription] = useState('')
  const [weight, setWeight] = useState('')
  const [shelfTime, setShelfTime] = useState('')
  const [notes, setNotes] = useState('')

  const [triggerCreateMycelium] = useCreateMyceliumMutation()

  const [stage, setStage] = useState<string | null>(null)
  const [species, setSpecies] = useState<string | null>(null)
  const [generation, setGeneration] = useState<string | null>(null)
  const [substrate, setSubstrate] = useState<string | null>(null)
  const [container, setContainer] = useState<string | null>(null)

  const validValues =
    prefix &&
    stage &&
    species &&
    provider &&
    generation &&
    substrate &&
    container

  const onPressCreateRoom = () => {
    if (validValues) {
      triggerCreateMycelium({
        container,
        external_provider: provider,
        generation: Number(generation),
        prefix,
        shelf_time: Number(shelfTime),
        species,
        substrate,
        type: Number(stage),
      })
      // TODO: Navigate to "Print screen"
      // .unwrap()
      // .then(room => {
      //   navigation.replace(Routes.Room, { id: room.id, name: room.name })
      // })
    }
  }

  const disabledButton = !validValues

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <View style={styles.flexible}>
        <ScrollView>
          <Container style={styles.textInputsContainer}>
            <StyledTextInput
              label={strings.prefixLabel}
              onChangeText={setPrefix}
              value={prefix}
              // TODO: creeeo que es tipo "Mr.", si es así no tiene sentido
              textContentType={'namePrefix'}
              required
            />
            <DropdownPicker
              outsideLabel={strings.stageLabel}
              value={stage}
              items={stagesOptions}
              setValue={setStage}
              required
            />

            <DropdownPicker
              outsideLabel={'Especie'}
              value={species}
              items={speciesOptions}
              setValue={setSpecies}
              required
            />

            <StyledTextInput
              label={'Proveedor'}
              onChangeText={setProvider}
              value={provider}
              textContentType={'name'}
              required
            />

            <DropdownPicker
              outsideLabel={'Generación'}
              value={generation}
              items={generationOptions}
              setValue={setGeneration}
              required
            />

            <DropdownPicker
              outsideLabel={'Sustrato (medio de cultivo)'}
              value={substrate}
              items={substrateOptions}
              setValue={setSubstrate}
              required
            />

            <DropdownPicker
              outsideLabel={'Contenedor'}
              value={container}
              items={containerOptions}
              setValue={setContainer}
              required
            />

            <StyledTextInput
              label={'Peso (g)'}
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={'Shelf time (days)'}
              value={shelfTime}
              onChangeText={setShelfTime}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={'Características (opcional)'}
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={4}
            />

            <StyledTextInput
              label={'Observaciones (opcional)'}
              value={notes}
              onChangeText={setNotes}
              multiline={true}
              numberOfLines={4}
            />
          </Container>
          <View style={styles.buttonContainer}>
            <Container>
              <Button
                title={strings.createMyceliumButton}
                disabled={disabledButton}
                onPress={onPressCreateRoom}
                mode={ButtonMode.PRIMARY_SOLID}
              />
            </Container>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  )
}
