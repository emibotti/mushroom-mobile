import React from 'react'
import { View } from 'react-native'

import { Condition } from './condition'
import { strings } from './strings'
import { styles } from './styles'
import { IPasswordConditions } from './types'

export const PasswordConditions: React.FC<IPasswordConditions> = ({
  emptyPassword,
  eightChar,
  lowercaseUppercase,
  digits,
}) => (
  <View style={styles.conditionsContainer}>
    <View style={styles.passwordConditionContainer}>
      <Condition
        emptyPassword={emptyPassword}
        fulfilledCondition={eightChar}
        condition={strings.minimumCharactersRequirement}
      />
    </View>
    <View style={styles.passwordConditionContainer}>
      <Condition
        emptyPassword={emptyPassword}
        fulfilledCondition={lowercaseUppercase}
        condition={strings.capitalsRequirement}
      />
    </View>
    <View style={styles.passwordConditionContainer}>
      <Condition
        emptyPassword={emptyPassword}
        fulfilledCondition={digits}
        condition={strings.numbersRequirement}
      />
    </View>
  </View>
)
