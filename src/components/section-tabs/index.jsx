import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionTabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const {tabNames} = props
  return (
    <SectionTabsWrapper>
      {tabNames?.map(item => {
        return (
          <div className='item' key={item}>{item}</div>
        )
      })}
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs