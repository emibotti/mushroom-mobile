import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Eye } from 'src/components/Eye'
import { StyledTextInput } from 'src/components/StyledTextInput'
import { StyledTextProps } from 'src/components/StyledTextInput/StyledTextInput'

import { styles } from './styles'

type PasswordTextInput = StyledTextProps & {
  toggleShowPassword: () => void
  showPassword: boolean
}

export const PasswordTextInput: React.FC<PasswordTextInput> = ({
  label,
  value: password,
  onChangeText: setPassword,
  validValue,
  toggleShowPassword,
  showPassword,
  accessibilityHint,
  placeholder = '',
}) => {
  return (
    <View>
      <StyledTextInput
        placeholder={placeholder}
        label={label}
        value={password}
        onChangeText={setPassword}
        validValue={validValue}
        textContentType={'password'}
        keyboardType={'default'}
        autoComplete={'password'}
        returnKeyType={'done'}
        secureTextEntry={!showPassword}
        accessibilityHint={accessibilityHint}
      />
      <TouchableWithoutFeedback onPress={toggleShowPassword}>
        <View style={styles.eyeContainer}>
          <Eye showPassword={showPassword} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
