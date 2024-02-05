import React, { useState } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useInspectMyceliumMutation } from 'src/store/APIs/events'

import { strings } from './strings'
import { styles } from './styles'
import { useModalSetNavigationOptions } from './useModalNavigationOptions'

export const Inspect: SceneProps<Routes.Inspect> = ({ navigation, route }) => {
  useModalSetNavigationOptions({ headerTitle: 'Inspect', navigation })
  const { myceliumId } = route.params

  const [triggerInspectMycelium, { isLoading }] = useInspectMyceliumMutation()

  const [note, setNote] = useState<string | undefined>(undefined)

  const onPressSave = () => {
    if (note) {
      triggerInspectMycelium({
        inspection: {
          note,
        },
        myceliumId,
      })
        .unwrap()
        .then(() => navigation.goBack())
    }
  }

  const disabledSave = !note

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <Container style={styles.container}>
        <StyledTextInput
          label={strings.notesLabel}
          onChangeText={setNote}
          value={note}
          multiline
          style={styles.notes}
          required
        />
      </Container>
      <View style={styles.buttonContainer}>
        <Button
          title={strings.saveButton}
          disabled={disabledSave || isLoading}
          onPress={onPressSave}
          mode={ButtonMode.PRIMARY_SOLID}
        />
      </View>
    </KeyboardAwareScrollView>
  )
}
