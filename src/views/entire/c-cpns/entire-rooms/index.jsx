import React, { memo } from 'react'
import PropType from 'prop-types'

import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useSelector } from 'react-redux'

const EntireRooms = memo((props) => {
  const {infoData, totalCount} = props
  const {isLoading} = useSelector(state => ({
    isLoading: state.entire.isLoading
  }))
  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}多出住所</h2>

      <div className="room-list">
        {infoData.map(item => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item._id}/>
          )
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {
  infoData: PropType.array,
  totalCount: PropType.number
}

export default EntireRooms