import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const [currentIndex, serCurrentIndex] = useState(0)
  const {tabNames = [], tabClick} = props
  const itemClick = (item, index) => {
    // console.log(index);
    tabClick(item)
    serCurrentIndex(index)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView >
        {tabNames?.map((item, index) => {
            return (
              <div className= {classNames("item", {active: index === currentIndex})} key={item} onClick={e => itemClick(item, index)}>{item}</div>
            )
        })}
      </ScrollView>
     
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs