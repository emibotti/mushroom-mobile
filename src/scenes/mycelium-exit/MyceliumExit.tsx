import React, { useState } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RadioButton } from 'react-native-paper'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useModalSetNavigationOptions } from 'src/hooks/useModalNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useArchiveMyceliumMutation } from 'src/store/APIs/mycellium'
import { ExitTypes } from 'src/store/APIs/mycellium/types'

import { strings } from './strings'
import { styles } from './styles'

export const MyceliumExit: SceneProps<Routes.MyceliumExit> = ({
  navigation,
  route,
}) => {
  useModalSetNavigationOptions({
    headerTitle: strings.markAsExitHeader,
    navigation,
  })

  const { myceliumId } = route.params

  const [triggerArchiveMycelium, { isLoading }] = useArchiveMyceliumMutation()

  const [exitType, setExitType] = React.useState<ExitTypes>(ExitTypes.Sold)
  const [note, setNote] = useState<string | undefined>(undefined)

  const onPressSave = () => {
    triggerArchiveMycelium({
      myceliumId,
      reason: {
        exitType,
        note,
      },
    })
      .unwrap()
      .then(() => {
        navigation.popToTop()
      })
  }

  // TODO: Do we enforce putting a note too?
  const disabledSave = !exitType

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <Container style={styles.container}>
        <RadioButton.Group
          onValueChange={newValue => setExitType(newValue as ExitTypes)}
          value={exitType}>
          <RadioButton.Item label={strings.sold} value={ExitTypes.Sold} />
          <RadioButton.Item
            label={strings.contaminated}
            value={ExitTypes.Contaminated}
          />
          <RadioButton.Item
            label={strings.consumed}
            value={ExitTypes.Consumed}
          />
          <RadioButton.Item label={strings.other} value={ExitTypes.Other} />
        </RadioButton.Group>

        <StyledTextInput
          label={strings.notesLabel}
          onChangeText={setNote}
          value={note}
          multiline
          style={styles.notes}
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
