import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useCreateRoomMutation } from 'src/store/APIs/rooms'

import { strings } from './strings'
import { styles } from './styles'

export const AddRoom: SceneProps<Routes.AddRoom> = ({ navigation }) => {
  useGoBackNavigationOptions(navigation, false, strings.screenHeader)

  const [name, setName] = useState('')
  const [humidity, setHumidity] = useState('')
  const [temperature, setTemperature] = useState('')
  const [co2, setCo2] = useState('')
  const [notes, setNotes] = useState('')

  const [triggerCreateRoom] = useCreateRoomMutation()

  const onPressCreateRoom = () => {
    if (name && humidity && co2 && temperature) {
      triggerCreateRoom({ co_2: co2, humidity, name, notes, temperature })
        .unwrap()
        .then(room => {
          navigation.replace(Routes.Room, { id: room.id, name: room.name })
        })
    }
  }

  const disabledButton = !name || !humidity || !temperature || !co2

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <View style={styles.flexible}>
        <ScrollView>
          <Container style={styles.textInputsContainer}>
            <StyledTextInput
              label={strings.roomNameLabel}
              onChangeText={setName}
              value={name}
              textContentType={'name'}
              returnKeyType={'done'}
            />
            <StyledTextInput
              label={strings.humidityLabel}
              value={humidity}
              onChangeText={setHumidity}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={strings.temperatureLabel}
              value={temperature}
              onChangeText={setTemperature}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={strings.co2Label}
              value={co2}
              onChangeText={setCo2}
              keyboardType="numeric"
            />

            <StyledTextInput
              label={strings.notesLabel}
              value={notes}
              onChangeText={setNotes}
              multiline={true}
              numberOfLines={4}
            />
          </Container>
          <View style={styles.buttonContainer}>
            <Container>
              <Button
                title={strings.createRoomButton}
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
