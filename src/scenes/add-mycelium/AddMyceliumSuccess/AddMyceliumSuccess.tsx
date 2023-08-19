import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { useSetNavigationOptions } from 'src/hooks/useSetNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { AppTypography, ColorPalette } from 'src/styles/types'
import { format } from 'util'

import { strings } from './strings'
import { styles } from './styles'

export const AddMyceliumSuccess: SceneProps<Routes.AddMyceliumSuccess> = ({
  navigation,
  route,
}) => {
  useSetNavigationOptions(navigation)

  let { createdMycelia, type } = route.params

  const myceliaCreatedText = `${createdMycelia.length} ${type.toLowerCase()}s`

  const onPressContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.Home }],
    })
  }

  return (
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
              {format(strings.myceliaCreated, myceliaCreatedText)}
            </StyledText>
            <Container style={styles.generatedMyceliaContainer}>
              {createdMycelia.map(mycelium => (
                <Button
                  onPress={() =>
                    navigation.push(Routes.Mycelium, {
                      id: mycelium.id,
                    })
                  }
                  mode={ButtonMode.LINK}
                  title={mycelium.name}
                />
              ))}
              <View style={styles.emailMessage}>
                <StyledText>{strings.emailMessage}</StyledText>
              </View>
            </Container>
          </Container>
          <View />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Container>
            <Button
              title={strings.continueButton}
              onPress={onPressContinue}
              mode={ButtonMode.SECONDARY_OUTLINE}
              style={styles.continueButton}
            />
          </Container>
        </View>
      </View>
    </SceneContainer>
  )
}
