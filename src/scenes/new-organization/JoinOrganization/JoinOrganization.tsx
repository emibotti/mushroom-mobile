import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useSetNavigationOptions } from 'src/hooks/useSetNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { styles } from 'src/scenes/new-organization/styles'
import { useJoinOrganizationMutation } from 'src/store/APIs/organization'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'

export const JoinOrganization: SceneProps<Routes.JoinOrganization> = ({
  navigation,
  route,
}) => {
  useSetNavigationOptions(navigation)
  const [organizationCode, setOrganizationCode] = useState<string | undefined>(
    route?.params?.invitationCode,
  )
  const onChangeOrganizationCode = (code: string) => setOrganizationCode(code)
  const onPressWantToCreate = () =>
    navigation.navigate(Routes.CreateOrganization)

  const [triggerJoinOrganization] = useJoinOrganizationMutation()

  const onPressJoinOrganization = () => {
    if (organizationCode) {
      triggerJoinOrganization({ invitation_code: organizationCode })
    }
  }

  useEffect(() => {
    if (route?.params?.invitationCode) {
      onPressJoinOrganization()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route])

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <SceneContainer style={styles.container} edges={['top']}>
        <View style={styles.flexible}>
          <ScrollView>
            <View style={styles.titleContainer}>
              <StyledText
                typography={AppTypography.H1}
                color={ColorPalette.SURFACE_90}>
                {strings.screenHeader}
              </StyledText>
            </View>
            <View>
              <StyledTextInput
                label={strings.codeLabel}
                onChangeText={onChangeOrganizationCode}
                value={organizationCode}
                textContentType={'name'}
                autoCorrect={false}
                returnKeyType={'done'}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Container>
                <Button
                  title={strings.joinOrganizationButton}
                  disabled={!organizationCode}
                  onPress={onPressJoinOrganization}
                  mode={ButtonMode.PRIMARY_SOLID}
                />
                <Button
                  title={strings.wantoToCreateToAnOrganization}
                  onPress={onPressWantToCreate}
                  mode={ButtonMode.LINK}
                  style={styles.linkButton}
                />
              </Container>
            </View>
          </ScrollView>
        </View>
      </SceneContainer>
    </KeyboardAwareScrollView>
  )
}
