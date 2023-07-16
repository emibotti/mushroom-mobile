import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { MyceliumCard } from 'src/components/MyceliumCard'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { RouteProp, SceneProps } from 'src/navigation/types'
import { useGetRoomQuery } from 'src/store/APIs/rooms'
import { Mycelium } from 'src/store/APIs/rooms/types'
import { Palette } from 'src/styles/Palette'
import { AppTypography } from 'src/styles/types'

import { strings } from './strings'
import { styles } from './styles'

const buildHeader = (props: NativeStackHeaderProps) => (
  <Header
    title={
      (props.route as RouteProp<Routes.Room>).params.name ??
      strings.roomHeaderTitle
    }
    rightElement={
      <IconButton
        icon={'trash-can-outline'}
        iconColor={Palette.ERROR_50}
        size={30}
        // onPress={() => {
        //   Alert.alert()
        // }}
      />
    }
    onPress={props.navigation.goBack}
  />
)

export const Room: SceneProps<Routes.Room> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      header: buildHeader,
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const { data: room } = useGetRoomQuery({ id: route.params.id })

  const renderMyceliums: ListRenderItem<Mycelium> = ({ item }) => (
    <MyceliumCard
      key={item.id}
      title={item.name}
      subtitle={item.strain}
      onPress={() => {
        navigation.navigate(Routes.Mycelium, {
          id: item.id,
          name: item.name,
        })
      }}
    />
  )

  const onPressAddMycelium = () => navigation.navigate(Routes.Home)

  return (
    <SceneContainer style={styles.container}>
      <Container>
        <StyledText typography={AppTypography.BODY_LARGE}>
          {`<b>${strings.temperature}:</b> ${room?.temperature}`}
        </StyledText>
        <StyledText typography={AppTypography.BODY_LARGE}>
          {`<b>${strings.humidity}:</b> ${room?.humidity}`}
        </StyledText>
        <StyledText typography={AppTypography.BODY_LARGE}>
          {`<b>${strings.co2}:</b> ${room?.co2}`}
        </StyledText>
      </Container>
      <Button
        icon={'plus'}
        style={styles.agregarMicelioButton}
        onPress={onPressAddMycelium}>
        <StyledText>{strings.addMycelium}</StyledText>
      </Button>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={room?.mycellia}
        renderItem={renderMyceliums}
      />
    </SceneContainer>
  )
}
