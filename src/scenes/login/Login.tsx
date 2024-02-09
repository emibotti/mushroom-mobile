import React from 'react'
import { Image, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginImage from 'src/assets/images/login-hero.png'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/Button'
import { Container } from 'src/components/Container'
import { PasswordTextInput } from 'src/components/PasswordTextInput'
import { StyledText } from 'src/components/StyledText'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useEmail } from 'src/hooks/useEmail'
import { useSetNavigationOptions } from 'src/hooks/useSetNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { useLoginButton } from './hooks/useLoginButton'
import { usePassword } from './hooks/usePassword'
import { strings } from './strings'
import { styles } from './styles'

export const Login: SceneProps<Routes.Login> = ({ navigation }) => {
  useSetNavigationOptions(navigation)

  const { email, setEmail, validEmail, checkEmail } = useEmail()
  const {
    password,
    onChangePassword,
    validPassword,
    showPassword,
    toggleShowPassword,
  } = usePassword()

  const {
    buttonEnable,
    onPressLogin,
    isLoading: isLoadingLogin,
  } = useLoginButton(validEmail, email, validPassword, password)

  const onPressRegister = () => navigation.navigate(Routes.Register)

  return (
    <KeyboardAwareScrollView
      scrollEnabled={true}
      enableOnAndroid={true}
      extraHeight={10}
      extraScrollHeight={10}
      accessible={false}
      bounces={false}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.logoBackground}>
        <Image
          source={LoginImage}
          style={styles.heroImage}
          resizeMode={'contain'}
        />
      </View>
      <Container style={styles.titleContainer}>
        <StyledText
          typography={AppTypography.H1}
          color={ColorPalette.SURFACE_90}>
          {strings.loginHeaderTitle}
        </StyledText>
        <StyledText
          style={styles.subtitle}
          typography={AppTypography.LABEL_LARGE}
          color={ColorPalette.SURFACE_90}>
          {strings.loginHeaderSubtitle}
        </StyledText>
      </Container>
      <Container style={styles.textInputsContainer}>
        <StyledTextInput
          label={strings.emailLabel}
          onBlur={checkEmail}
          onChangeText={setEmail}
          value={email}
          validValue={validEmail}
          textContentType={'username'}
          keyboardType={'email-address'}
          autoComplete={'email'}
          returnKeyType={'done'}
        />
        <View>
          <PasswordTextInput
            label={strings.passwordLabel}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry={!showPassword}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
          />
        </View>
      </Container>
      <View style={styles.buttonContainer}>
        <Button
          title={strings.loginButton}
          disabled={!buttonEnable || isLoadingLogin}
          onPress={onPressLogin}
          mode={ButtonMode.PRIMARY_GRADIENT}
        />
        <View style={styles.center}>
          <Button
            title={strings.registerButton}
            onPress={onPressRegister}
            mode={ButtonMode.LINK}
            style={styles.buttonRegister}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
