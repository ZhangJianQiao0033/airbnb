import React, { memo, useCallback } from 'react'
import PropType from 'prop-types'

import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const {infoData, totalCount} = props
  const {isLoading} = useSelector(state => ({
    isLoading: state.entire.isLoading
  }))

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    navigate("/detail")
    dispatch(changeDetailInfoAction(item))
  }, [navigate])
  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount}多出住所</h2>

      <div className="room-list">
        {infoData.map(item => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClickHandle}/>
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