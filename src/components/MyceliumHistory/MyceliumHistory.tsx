import React from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useGetEventsQuery } from 'src/store/APIs/events'
import { MyceliumEvent } from 'src/store/APIs/events/types'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { StyledText } from '../StyledText'
import { HistoryNote } from './HistoryNote'
import { strings } from './strings'
import { styles } from './styles'

export interface MyceliumHistoryProps {
  myceliumId: string
}

const renderEvent: ListRenderItem<MyceliumEvent> = ({ item: event }) => (
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

export const MyceliumHistory: React.FC<MyceliumHistoryProps> = ({
  myceliumId,
}) => {
  const { data: events } = useGetEventsQuery({ myceliumId })

  return events ? (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvent}
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
