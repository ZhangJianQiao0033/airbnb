import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props) => {
  const {title, subtitle, infoData} = props

  const tabNames = infoData.dest_address?.map(item => item.name)
  const tempCity = Object.keys(infoData.dest_list)[0]
  const [city, setCity] = useState(tempCity)

  const tabClick = useCallback((city) => {
    setCity(city)
  }, [])
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title= {title} subtitle= {subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClick}/>
      <SectionRooms infoData= {infoData.dest_list?.[city]} itemWidth={"33.33%"}/>
      <SectionFooter name={city}/>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  infoData: PropTypes.object
}

export default HomeSectionV2