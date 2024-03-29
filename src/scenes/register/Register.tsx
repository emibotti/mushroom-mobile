import React, { useCallback, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'src/components/Button'
import { ButtonMode } from 'src/components/Button/types'
import { Container } from 'src/components/Container'
import { PasswordSection } from 'src/components/PasswordSection'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { useEmail } from 'src/hooks/useEmail'
import { usePassword } from 'src/hooks/usePassword'
import { useSetNavigationOptions } from 'src/hooks/useSetNavigationOptions'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useRegisterMutation } from 'src/store/APIs/auth'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

export const Register: SceneProps<Routes.Register> = ({ navigation }) => {
  useSetNavigationOptions(navigation)

  const {
    checkPassword,
    confirmPassword,
    password,
    setConfirmPassword,
    setPassword,
    showConfirmPassword,
    showPassword,
    toggleShowConfirmPassword,
    toggleShowPassword,
    emptyPassword,
    validated,
    validConfirmPassword,
  } = usePassword()

  const { validPassword, eightChar, lowercaseUppercase, digits } =
    checkPassword(password)

  const { email, setEmail, validEmail, checkEmail } = useEmail()

  const [name, setName] = useState('')
  const [validName, setValidName] = useState<boolean>(true)

  const checkName = useCallback(() => {
    setValidName(!!name && name.length > 0)
  }, [name])

  const onPressLogin = () => navigation.navigate(Routes.Login)

  // TODO: Handle errors (maybe modal, maybe show in screen)
  const [triggerRegister, { isLoading }] = useRegisterMutation()

  const validInputs =
    email &&
    validEmail &&
    password &&
    validPassword &&
    validConfirmPassword &&
    validName &&
    name &&
    validated

  const onPressRegister = () => {
    if (validInputs) {
      triggerRegister({ email, name, password })
    }
  }

  const disabledRegisterButton = !validInputs || isLoading

  return (
    <KeyboardAwareScrollView
      accessible={false}
      contentContainerStyle={styles.flexible}
      bounces={false}>
      <SceneContainer style={styles.container} edges={['top']}>
        <Container style={styles.flexible}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleContainer}>
              <StyledText
                typography={AppTypography.H1}
                color={ColorPalette.SURFACE_90}>
                {strings.screenHeader}
              </StyledText>
            </View>
            <View>
              <StyledTextInput
                label={'Nombre'}
                onChangeText={setName}
                value={name}
                onBlur={checkName}
                validValue={validName}
                textContentType={'name'}
                autoCorrect={false}
                returnKeyType={'done'}
              />
              <StyledTextInput
                label={strings.emailLabel}
                onChangeText={setEmail}
                value={email}
                onBlur={checkEmail}
                validValue={validEmail}
                textContentType={'emailAddress'}
                keyboardType={'email-address'}
                autoCorrect={false}
                returnKeyType={'done'}
              />
            </View>
            <PasswordSection
              firstInputLabel={strings.passwordLabel}
              secondInputLabel={strings.reEnterPassword}
              firstInputValue={password}
              secondInputValue={confirmPassword}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              toggleShowConfirmPassword={toggleShowConfirmPassword}
              toggleShowPassword={toggleShowPassword}
              showConfirmPassword={showConfirmPassword}
              showPassword={showPassword}
              validConfirmPassword={validConfirmPassword}
              validPassword={validPassword}
              emptyPassword={emptyPassword}
              eightChar={eightChar}
              digits={digits}
              lowercaseUppercase={lowercaseUppercase}
            />
            <View style={styles.buttonContainer}>
              <Container>
                <Button
                  title={strings.registerButton}
                  disabled={disabledRegisterButton}
                  onPress={onPressRegister}
                  mode={ButtonMode.PRIMARY_SOLID}
                />
                <Button
                  title={strings.alreadyHaveAnAccount}
                  onPress={onPressLogin}
                  mode={ButtonMode.LINK}
                  style={styles.buttonLogin}
                />
              </Container>
            </View>
          </ScrollView>
        </Container>
      </SceneContainer>
    </KeyboardAwareScrollView>
  )
}
