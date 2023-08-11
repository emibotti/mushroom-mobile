import React, { PropsWithChildren } from 'react'
import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Palette } from 'src/styles/Palette'

import { Button } from '../Button'
import { ButtonProps } from '../Button/types'

export interface ScrollableScreenProps {
  image: ImageSourcePropType
  buttonProps?: ButtonProps
}

const SCROLL_HEIGHT = 300

export const ScrollableScreen: React.FC<
  PropsWithChildren<ScrollableScreenProps>
> = ({ image, children, buttonProps }) => {
  const scrollY = useSharedValue(0)
  const isScrolling = useSharedValue(false)

  const handleScroll = useAnimatedScrollHandler({
    onBeginDrag: () => {
      isScrolling.value = true
    },
    onEndDrag: () => {
      isScrolling.value = false
    },
    onScroll: event => {
      scrollY.value = event.contentOffset.y
    },
  })

  const imageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, SCROLL_HEIGHT], [1, 0])
    const translateY = interpolate(
      scrollY.value,
      [0, SCROLL_HEIGHT],
      [0, -SCROLL_HEIGHT],
    )

    return {
      opacity,
      transform: [{ translateY }],
    }
  })

  const contentContainerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, SCROLL_HEIGHT],
      [SCROLL_HEIGHT, 0],
    )

    return {
      transform: [{ translateY }],
    }
  })

  const buttonStyle = useAnimatedStyle(() => {
    const opacity = withTiming(isScrolling.value ? 0 : 1)

    return {
      opacity,
    }
  })

  return (
    <View style={styles.container}>
      <Animated.Image
        source={image}
        style={[styles.image, imageStyle]}
        resizeMode="cover"
      />

      <Animated.ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <Animated.View style={[styles.contentContainer, contentContainerStyle]}>
          {children}
        </Animated.View>
      </Animated.ScrollView>
      {buttonProps && (
        <Animated.View style={[styles.floatingButton, buttonStyle]}>
          <Button style={styles.buttonContainer} {...buttonProps} />
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: Palette.SURFACE_10,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Palette.SURFACE_10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexGrow: 1,
    paddingBottom: 20,
  },
  floatingButton: {
    alignItems: 'center',
    bottom: 30,
    justifyContent: 'center',
    left: 50,
    position: 'absolute',
    right: 50,
  },
  image: {
    height: 500,
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
})
