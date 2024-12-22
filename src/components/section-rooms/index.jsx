import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
  const {infoData, itemWidth} = props
  return (
    <SectionRoomsWrapper>
      {
        infoData?.slice(0,8).map(item => {
          return (
            <RoomItem itemData = {item} key={item.id} itemWidth={itemWidth}/>
          )
        })
      }
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  infoData: PropTypes.array,
  itemWidth: PropTypes.string
}
export default SectionRooms