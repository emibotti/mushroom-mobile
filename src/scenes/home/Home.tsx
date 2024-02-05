import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import React, { useLayoutEffect, useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { Container } from 'src/components/Container'
import { DashboardCard } from 'src/components/DashboardCard'
import { FabMenu } from 'src/components/FabMenu'
import { LoadingActivityIndicator } from 'src/components/LoadingActivityIndicator'
import { Scanner } from 'src/components/Scanner'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { ParamList, SceneProps } from 'src/navigation/types'
import { useGetStatisticsQuery } from 'src/store/APIs/mycellium'
import { AppTypography } from 'src/styles/types'

import { renderMyceliaCards } from '../room/Room'
import { strings } from './strings'
import { styles } from './styles'

enum DashboardTabs {
  Ready = 'ready',
  InProgress = 'inProgress',
}

const buildHeaderLeft = () => (
  <View style={styles.headerLeft}>
    <StyledText typography={AppTypography.H1}>{strings.homeHeader}</StyledText>
  </View>
)

const buildHeaderRight =
  (navigation: NativeStackNavigationProp<ParamList, Routes.Home, undefined>) =>
  () =>
    (
      <IconButton
        hitSlop={50}
        icon={'account-circle'}
        size={50}
        style={styles.headerRight}
        onPress={() => navigation.navigate(Routes.Profile)}
      />
    )

export const Home: SceneProps<Routes.Home> = ({ navigation }) => {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerLeft: buildHeaderLeft,
      headerRight: buildHeaderRight(navigation),
      headerTitle: '',
      headerTransparent: true,
    }
    navigation.setOptions(options)
  }, [navigation])

  const [isModalVisible, setModalVisible] = useState(false)

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleOnPressNavigate = (screenName: string) => () => {
    navigation.navigate(screenName)
  }

  const { isLoading, data: statistics } = useGetStatisticsQuery()

  const [dashboardFilterSelected, setDashboardFilterSelected] = useState(
    DashboardTabs.Ready,
  )

  const toggleDashboardFilter = (filter: DashboardTabs) => () => {
    setDashboardFilterSelected(filter)
  }

  return (
    <SceneContainer style={styles.container}>
      <Scanner isVisible={isModalVisible} onClose={handleCloseModal} />
      <Container style={styles.dashboardContainer}>
        {isLoading ? (
          <LoadingActivityIndicator />
        ) : (
          <>
            <View style={styles.dashboardCardsContainer}>
              <Pressable onPress={toggleDashboardFilter(DashboardTabs.Ready)}>
                <DashboardCard
                  selected={dashboardFilterSelected === DashboardTabs.Ready}
                  title={strings.readyFilter}
                  count={statistics?.ready.count ?? 0}
                  iconName="package-variant-closed"
                  iconColor="#8B4513"
                />
              </Pressable>
              <Pressable
                onPress={toggleDashboardFilter(DashboardTabs.InProgress)}>
                <DashboardCard
                  selected={
                    dashboardFilterSelected === DashboardTabs.InProgress
                  }
                  title={strings.inProgressFilter}
                  count={statistics?.inProgress.count ?? 0}
                  iconName="progress-clock"
                  iconColor="#FF4500"
                />
              </Pressable>
            </View>
            <View style={styles.itemsContainer}>
              <FlatList
                contentContainerStyle={styles.items}
                data={
                  dashboardFilterSelected === DashboardTabs.Ready
                    ? statistics?.ready.mycelia
                    : statistics?.inProgress.mycelia
                }
                renderItem={renderMyceliaCards(navigation)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                  <Container>
                    <StyledText>
                      {dashboardFilterSelected === DashboardTabs.Ready
                        ? strings.noReady
                        : strings.noInProgress}
                    </StyledText>
                  </Container>
                }
              />
            </View>
          </>
        )}
      </Container>
      <FabMenu
        fabs={[
          { icon: 'home', onPress: handleOnPressNavigate(Routes.Home) },
          { icon: 'qrcode-scan', onPress: handleOpenModal },
          {
            icon: 'mushroom',
            onPress: handleOnPressNavigate(Routes.Rooms),
          },
        ]}
      />
    </SceneContainer>
  )
}
