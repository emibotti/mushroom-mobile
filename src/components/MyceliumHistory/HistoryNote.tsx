import React from 'react'
import bulkIcon from 'src/assets/icons/mycelium/bulkIcon.png'
import cultureIcon from 'src/assets/icons/mycelium/cultureIcon.png'
import fruitIcon from 'src/assets/icons/mycelium/fruitIcon.png'
import spawnIcon from 'src/assets/icons/mycelium/spawnIcon.png'
import { generalStrings } from 'src/common/generalStrings'
import { MyceliumEvent, MyceliumEventType } from 'src/store/APIs/events/types'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { StyledText } from '../StyledText'
import { MyceliumTransition } from './MyceliumTransition'

export interface HistoryNoteProps {
  event: MyceliumEvent
}

export const HistoryNote: React.FC<HistoryNoteProps> = ({ event }) => {
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
    case MyceliumEventType.ArchivedConsumed:
      return (
        <StyledText
          typography={AppTypography.LABEL_MEDIUM}
          color={ColorPalette.SURFACE_70}>
          {event.eventType}
        </StyledText>
      )
    case MyceliumEventType.ArchivedContaminated:
      return (
        <StyledText
          typography={AppTypography.LABEL_MEDIUM}
          color={ColorPalette.SURFACE_70}>
          {event.eventType}
        </StyledText>
      )
    case MyceliumEventType.ArchivedOther:
      return (
        <StyledText
          typography={AppTypography.LABEL_MEDIUM}
          color={ColorPalette.SURFACE_70}>
          {event.eventType}
        </StyledText>
      )
    case MyceliumEventType.ArchivedSold:
      return (
        <StyledText
          typography={AppTypography.LABEL_MEDIUM}
          color={ColorPalette.SURFACE_70}>
          {event.eventType}
        </StyledText>
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
