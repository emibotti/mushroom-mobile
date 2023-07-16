import React from 'react'
import EyeOffIcon from 'src/assets/icons/eyeOff.svg'
import EyeOnIcon from 'src/assets/icons/eyeOn.svg'
import { Palette } from 'src/styles/Palette'

interface EyeProps {
  showPassword: boolean
}

export const Eye: React.FC<EyeProps> = ({ showPassword }) => {
  const fillColor = Palette.SECONDARY_50

  return !showPassword ? (
    <EyeOffIcon fill={fillColor} />
  ) : (
    <EyeOnIcon fill={fillColor} />
  )
}
