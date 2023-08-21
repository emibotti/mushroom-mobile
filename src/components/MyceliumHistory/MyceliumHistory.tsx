import React from 'react'
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  View,
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import bulkIcon from 'src/assets/icons/mycelium/bulkIcon.png'
import cultureIcon from 'src/assets/icons/mycelium/cultureIcon.png'
import fruitIcon from 'src/assets/icons/mycelium/fruitIcon.png'
import spawnIcon from 'src/assets/icons/mycelium/spawnIcon.png'
import { generalStrings } from 'src/common/generalStrings'
import { push } from 'src/common/navigation'
import { Routes } from 'src/navigation/routes'
import { useGetEventsQuery } from 'src/store/APIs/events'
import { MyceliumEvent, MyceliumEventType } from 'src/store/APIs/events/types'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { Button } from '../Button'
import { ButtonMode } from '../Button/types'
import { StyledText } from '../StyledText'
import { strings } from './strings'
import { styles } from './styles'

export interface MyceliumHistoryProps {
  myceliumId: string
}

interface HistoryNoteProps {
  event: MyceliumEvent
}

const MyceliumTransition: React.FC<{
  left: string
  right: string
  imageSource: ImageSourcePropType
  myceliumId: string
}> = ({ left, imageSource, right, myceliumId }) => (
  <View style={styles.transitionContainer}>
    <Button
      style={styles.transitionNameButton}
      mode={ButtonMode.LINK}
      title={left}
      onPress={() =>
        push(Routes.Mycelium, {
          id: myceliumId,
        })
      }
    />
    <View style={styles.transitionImageContainer}>
      <Image
        source={imageSource}
        style={styles.transitionImage}
        resizeMode="contain"
      />
    </View>
    <StyledText
      typography={AppTypography.LABEL_MEDIUM}
      color={ColorPalette.SURFACE_70}>
      {right}
    </StyledText>
  </View>
)

const HistoryNote: React.FC<HistoryNoteProps> = ({ event }) => {
  switch (event.eventType) {
    case MyceliumEventType.TransitionToCulture:
      return (
        <MyceliumTransition
          left={event.note}
          imageSource={cultureIcon}
          right={`[${generalStrings.stageCulture}]`}
          myceliumId={event.myceliumId}
        />
      )
    case MyceliumEventType.TransitionToSpawn:
      return (
        <MyceliumTransition
          left={event.note}
          imageSource={spawnIcon}
          right={`[${generalStrings.stageSpawn}]`}
          myceliumId={event.myceliumId}
        />
      )
    case MyceliumEventType.TransitionToBulk:
      return (
        <MyceliumTransition
          left={event.note}
          imageSource={bulkIcon}
          right={`[${generalStrings.stageBulk}]`}
          myceliumId={event.myceliumId}
        />
      )
    case MyceliumEventType.TransitionToFruit:
      return (
        <MyceliumTransition
          left={event.note}
          imageSource={fruitIcon}
          right={`[${generalStrings.stageFruit}]`}
          myceliumId={event.myceliumId}
        />
      )
    default:
      return (
        <StyledText
          typography={AppTypography.LABEL_MEDIUM}
          color={ColorPalette.SURFACE_70}>
          {event.note}
        </StyledText>
      )
  }
}

export const MyceliumHistory: React.FC<MyceliumHistoryProps> = ({
  myceliumId,
}) => {
  const { data: events } = useGetEventsQuery({ myceliumId })

  const renderItem: ListRenderItem<MyceliumEvent> = ({ item: event }) => (
    <View style={styles.eventContainer} key={event.id}>
      <View style={styles.eventRow}>
        <View
          style={[
            styles.leftContent,
            event.eventType.startsWith('to_') && styles.leftContentCenter,
          ]}>
          <View style={styles.eventDate}>
            <StyledText
              typography={AppTypography.LABEL_MEDIUM}
              color={ColorPalette.SURFACE_70}>
              {event.createdAt}
            </StyledText>
          </View>
          <View style={styles.historyNoteContainer}>
            <HistoryNote event={event} />
          </View>
        </View>
        <View
          style={[
            styles.rightContent,
            event.eventType.startsWith('to_') && styles.rightContentCenter,
          ]}>
          <StyledText
            style={styles.authorName}
            typography={AppTypography.LABEL_MEDIUM}
            color={ColorPalette.SURFACE_70}>
            {event.authorName || 'Unknown'}
          </StyledText>
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.lineSeparator} />
      </View>
    </View>
  )

  return events ? (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.noHistory}>
            <StyledText
              typography={AppTypography.LABEL_MEDIUM}
              color={ColorPalette.SURFACE_70}>
              {strings.noHistory}
            </StyledText>
          </View>
        }
      />
    </View>
  ) : (
    <ActivityIndicator />
  )
}
