import React from 'react'
import { Alert, ScrollView, Share, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IconButton } from 'react-native-paper'
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
import { useSetNavigationOptions } from 'src/hooks/useSetNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { styles } from 'src/scenes/new-organization/styles'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'

export const OrganizationCreated: SceneProps<Routes.OrganizationCreated> = ({
  navigation,
  route,
}) => {
  useSetNavigationOptions(navigation)

  const { invitationCode } = route.params

  const onPressImReady = () => {
    const persistedUser = getPersistedObject<PersistedUser>(KeysPersisted.USER)
    clearPersistedObject(KeysPersisted.USER)
    persistObject<PersistedUser>(
      {
        ...persistedUser,
        hasOrganization: true,
      },
      KeysPersisted.USER,
    )
    navigation.replace(Routes.Home)
  }

  const onPressShare = async () => {
    try {
      await Share.share({
        message: `mushroom://join_organization/${invitationCode}`,
      })
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

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
            <Container style={styles.subtitle}>
              <StyledText
                typography={AppTypography.LABEL_MEDIUM}
                color={ColorPalette.SURFACE_90}>
                {strings.screenSubtitle}
              </StyledText>
            </Container>
            <View />
            <View style={styles.invitationCodeContainer}>
              <StyledText
                typography={AppTypography.BODY_EXTRA_LARGE}
                selectable>
                {invitationCode}
              </StyledText>
              <IconButton icon="export-variant" onPress={onPressShare} />
            </View>
            <View style={styles.buttonContainer}>
              <Container>
                <Button
                  title={strings.ready}
                  onPress={onPressImReady}
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
