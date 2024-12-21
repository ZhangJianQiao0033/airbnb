import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
  const {goodPriceList} = props
  return (
    <SectionRoomsWrapper>
      {
        goodPriceList?.slice(0,8).map(item => {
          return (
            <RoomItem itemData = {item} key={item.id}/>
          )
        })
      }
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  goodPriceList: PropTypes.array
}
export default SectionRooms