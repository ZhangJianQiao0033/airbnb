import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';

import { EntirePaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const {totalCount, currentPage} = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)

  const totalPages = Math.ceil(totalCount / 20); 
  const startCount = currentPage *20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    window.scroll(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <EntirePaginationWrapper>
      <Pagination count={totalPages} color="red" size='large' onChange={pageChangeHandle}/>
      <div className="desc">
      第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
      </div>
    </EntirePaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination