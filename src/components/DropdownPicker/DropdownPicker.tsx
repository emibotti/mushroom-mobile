import React, { useState } from 'react'
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { StyledText } from '../StyledText'
import { strings } from './strings'
import { styles } from './styles'

type Props = Omit<DropDownPickerProps<string>, 'open' & 'setOpen'> & {
  outsideLabel?: string
  required?: boolean
}

export const DropdownPicker = ({
  outsideLabel,
  required = false,
  ...props
}: Props) => {
  const [open, setOpen] = useState(false)

  const outsideLabelColor = props.disabled
    ? ColorPalette.SURFACE_50
    : ColorPalette.INFO_50

  const requiredValue = required ? '*' : ''

  return (
    <>
      {outsideLabel && (
        <StyledText
          style={styles.outsideLabel}
          color={outsideLabelColor}
          typography={AppTypography.BUTTON_MEDIUM}>
          {`${outsideLabel}${requiredValue}`}
        </StyledText>
      )}
      <DropDownPicker
        disabledStyle={styles.disabledStyle}
        placeholder={strings.dropdownPlaceholder}
        showArrowIcon={!props.disabled}
        zIndex={open ? 1 : 0}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.dropdown, { marginTop: outsideLabel ? 0 : 10 }]}
        {...props}
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}
