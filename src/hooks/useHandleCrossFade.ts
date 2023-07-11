import { useEffect } from 'react'
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useHandleCrossFade = (loading: boolean) => {
  const crossFadeProgress = useSharedValue(0)

  const stacksStyle = useAnimatedStyle(() => ({
    flex: 1,
    opacity: interpolate(
      crossFadeProgress.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
    zIndex: interpolate(
      crossFadeProgress.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }))

  const splashStyle = useAnimatedStyle(() => ({
    bottom: 0,
    left: 0,
    opacity: interpolate(
      crossFadeProgress.value,
      [0, 1],
      [1, 0],
      Extrapolate.CLAMP,
    ),
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: interpolate(
      crossFadeProgress.value,
      [0, 1],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }))

  useEffect(() => {
    let timeout: any
    if (!loading) {
      timeout = setTimeout(() => {
        crossFadeProgress.value = withTiming(1)
      }, 2300)
    }

    return () => timeout && clearInterval(timeout)
  }, [loading, crossFadeProgress])

  return {
    splashStyle,
    stacksStyle,
  }
}
