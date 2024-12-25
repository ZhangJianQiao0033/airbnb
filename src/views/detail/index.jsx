import React, { memo } from 'react'
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'

const Detail = memo(() => {
  const {detailInfo} = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }))
  return (
    <DetailWrapper>
      <DetailPictures infoData= {detailInfo}/>
      
    </DetailWrapper>
  )
})

export default Detail