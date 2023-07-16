import React from 'react'
import { ActivityIndicator, Alert, ScrollView, Share, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { generalStrings } from 'src/common/generalStrings'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useGoBackNavigationOptions } from 'src/hooks/useGoBackNavigationOptions'
import {
  APP_PREFIX,
  JOIN_ORGANIZATION_ROUTE,
  Routes,
} from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { styles } from 'src/scenes/new-organization/styles'
import { useLogoutMutation } from 'src/store/APIs/auth'
import { useGenerateOrgInvitationCodeQuery } from 'src/store/APIs/organization'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'

export const Profile: SceneProps<Routes.Profile> = ({ navigation }) => {
  useGoBackNavigationOptions(navigation)

  const { data: invitationCode, isFetching } =
    useGenerateOrgInvitationCodeQuery()
  const [triggerLogout] = useLogoutMutation()

  const onPressShare = async () => {
    try {
      await Share.share({
        message: `${generalStrings.shareOrganizationMessage} ${APP_PREFIX}${JOIN_ORGANIZATION_ROUTE}/${invitationCode}`,
      })
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

  const onPressLogout = () => {
    Alert.alert(strings.logoutButton, strings.confirmLogoutTitle, [
      { text: strings.confirmLogoutCancel },
      {
        onPress: () => triggerLogout(),
        style: 'destructive',
        text: strings.confirmLogoutYes,
      },
    ])
  }

  return isFetching ? (
    <ActivityIndicator />
  ) : (
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
            <StyledText typography={AppTypography.BODY_EXTRA_LARGE} selectable>
              {invitationCode}
            </StyledText>
            <IconButton icon="export-variant" onPress={onPressShare} />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Container>
            <Button
              title={strings.logoutButton}
              onPress={onPressLogout}
              mode={ButtonMode.ERROR_SOLID}
              style={styles.linkButton}
            />
          </Container>
        </View>
      </View>
    </SceneContainer>
  )
}
