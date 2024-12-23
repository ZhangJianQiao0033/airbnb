import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from '../home-section-v3/style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const {infoData} = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionRooms infoData={infoData.list}/>
      <SectionFooter name="plus"/>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3