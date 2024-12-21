import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <span className='text'>搜索房源和体验</span>
      <span className="icon"><IconSearchBar /></span>
    </CenterWrapper>
  )
})

export default HeaderCenter