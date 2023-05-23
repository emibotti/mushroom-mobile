import React, { PropsWithChildren } from 'react'
import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { Palette } from 'src/styles/Palette'

const SCROLL_HEIGHT = 300

export const ScrollableScreen: React.FC<
  PropsWithChildren<{ image: ImageSourcePropType }>
> = ({ image, children }) => {
  const scrollY = useSharedValue(0)

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
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
    </View>
  )
}

const styles = StyleSheet.create({
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
  image: {
    height: 500,
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
})
