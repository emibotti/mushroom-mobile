import React, { useCallback } from 'react'
import { View } from 'react-native'
import DropDownPicker, {
  DropDownPickerProps,
  ItemType,
} from 'react-native-dropdown-picker'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { StyledText } from '../StyledText'
import { strings } from './strings'
import { styles } from './styles'

type Props = {
  outsideLabel?: string
  required?: boolean
  items: ItemType<string>[]
  multiple?: false
  onChangeValue?: (value: string | null) => void
  onSelectItem?: (item: ItemType<string>) => void
  setValue: React.Dispatch<React.SetStateAction<string | null>>
  value: string | null
  id: string
  openId: string | null
  setOpenId: React.Dispatch<React.SetStateAction<string | null>>
} & Omit<
  DropDownPickerProps<string>,
  | 'open'
  | 'setOpen'
  | 'onChangeValue'
  | 'onSelectItem'
  | 'setValue'
  | 'value'
  | 'items'
  | 'multiple'
>

export const DropdownPicker = ({
  outsideLabel,
  required = false,
  ...props
}: Props) => {
  const setOpen = useCallback((open: boolean) => {
    props.setOpenId(open ? props.id : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const open = props.id === props.openId

  const outsideLabelColor = props.disabled
    ? ColorPalette.SURFACE_50
    : ColorPalette.INFO_50

  const requiredValue = required ? '*' : ''

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ zIndex: open ? 9000 : 0 }}>
      {outsideLabel && (
        <StyledText
          style={styles.outsideLabel}
          color={outsideLabelColor}
          typography={AppTypography.BUTTON_MEDIUM}>
          {`${outsideLabel}${requiredValue}`}
        </StyledText>
      )}
      <DropDownPicker
        listMode="SCROLLVIEW"
        disabledStyle={styles.disabledStyle}
        placeholder={strings.dropdownPlaceholder}
        showArrowIcon={!props.disabled}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.dropdown, { marginTop: outsideLabel ? 0 : 10 }]}
        {...props}
        open={open}
        // @ts-ignore
        setOpen={setOpen}
      />
    </View>
  )
}
