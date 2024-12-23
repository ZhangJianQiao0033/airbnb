import React, { memo, useEffect, useState } from 'react'

import Entirefilter from './c-cpns/entire-filter'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import { EntireWrapper } from './style'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination/Index'

const Entire = memo(() => {
  const {roomList, totalCount} = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    
  },[dispatch])
  return (
    <EntireWrapper>
      <Entirefilter />
      {roomList.length !== 0 && <EntireRooms infoData={roomList} totalCount= {totalCount}/>}
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire