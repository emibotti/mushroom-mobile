import React, { useCallback, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { StyledCheckbox } from 'src/components/StyledCheckbox'
import { StyledText } from 'src/components/StyledText'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useModalSetNavigationOptions } from 'src/hooks/useModalNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useMarkMyceliumAsReadyMutation } from 'src/store/APIs/mycellium'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

export const MarkAsReady: SceneProps<Routes.MarkAsReady> = ({
  navigation,
  route,
}) => {
  useModalSetNavigationOptions({
    headerTitle: strings.markAsReadyHeader,
    navigation,
  })

  const { myceliumId, isReadyFromTheBackend } = route.params

  const [triggerMarkAsReady, { isLoading }] = useMarkMyceliumAsReadyMutation()

  // TODO: Get from the backend if it is already ready
  const [ready, setReady] = useState(isReadyFromTheBackend)
  const [note, setNote] = useState<string | undefined>(undefined)

  const onPressSave = () => {
    triggerMarkAsReady({
      body: {
        note,
        ready,
      },
      myceliumId,
    })
      .unwrap()
      .then(() => {
        navigation.goBack()
      })
  }

  const onPressToggle = useCallback(() => setReady(prevState => !prevState), [])

  const disabledSave = Boolean(ready) === Boolean(isReadyFromTheBackend)

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <Container style={styles.container}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={onPressToggle}>
            <StyledText
              typography={AppTypography.LABEL_MEDIUM}
              color={ColorPalette.SURFACE_90}>
              {strings.markAsReadyLabel}
            </StyledText>
          </TouchableOpacity>
          <StyledCheckbox onPress={onPressToggle} checked={ready} />
        </View>
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
