import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  clearPersistedObject,
  getPersistedObject,
  KeysPersisted,
  PersistedUser,
  persistObject,
} from 'src/common/persistance'
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
import {
  useCreateOrganizationMutation,
  useLogoutMutation,
} from 'src/store/APIs/auth'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'

export const CreateOrganization: SceneProps<Routes.CreateOrganization> = ({
  navigation,
}) => {
  useSetNavigationOptions(navigation)
  const [organizationName, setOrganizationName] = useState<string | undefined>(
    undefined,
  )
  const onChangeOrganizationName = (name: string) => setOrganizationName(name)
  const onPressWantToJoin = () =>
    navigation.navigate(Routes.JoinOrganization, {})

  const [triggerCreateOrganization] = useCreateOrganizationMutation()

  const onPressCreateOrganization = () => {
    if (organizationName) {
      triggerCreateOrganization({ name: organizationName })
        .unwrap()
        .then(({ organization }) => {
          const persistedUser = getPersistedObject<PersistedUser>(
            KeysPersisted.USER,
          )
          clearPersistedObject(KeysPersisted.USER)
          persistObject<PersistedUser>(
            {
              ...persistedUser,
              hasOrganization: true,
            },
            KeysPersisted.USER,
          )
          navigation.replace(Routes.OrganizationCreated, {
            invitationCode: organization.code,
          })
        })
    }
  }

  const [triggerLogout] = useLogoutMutation()

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
                label={strings.organizationLabel}
                onChangeText={onChangeOrganizationName}
                value={organizationName}
                textContentType={'name'}
                autoCorrect={false}
                returnKeyType={'done'}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Container>
                <Button
                  title={strings.createOrganizationButton}
                  disabled={!organizationName}
                  onPress={onPressCreateOrganization}
                  mode={ButtonMode.PRIMARY_SOLID}
                />
                <Button
                  title={strings.wantoToJoinToAnOrganization}
                  onPress={onPressWantToJoin}
                  mode={ButtonMode.LINK}
                  style={styles.linkButton}
                />
              </Container>
              <Container>
                <Button
                  title="Logout"
                  mode={ButtonMode.LINK}
                  onPress={() => triggerLogout()}
                />
              </Container>
            </View>
          </ScrollView>
        </View>
      </SceneContainer>
    </KeyboardAwareScrollView>
  )
}
