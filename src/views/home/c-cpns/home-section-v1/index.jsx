import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const {title,subtitle, infoData} = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title = {title} subtitle = {subtitle}/>
      <SectionRooms infoData = {infoData} itemWidth="25%"/>
      <SectionFooter />
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  infoData: PropTypes.array
}

export default HomeSectionV1