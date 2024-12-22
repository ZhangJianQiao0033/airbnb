import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const SectionFooter = memo((props) => {
  const {name} = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  return (
    <SectionFooterWrapper color={name ? "#00848A": "#000"}>
      <div className="info">
        <span className='name'>{showMessage}</span>
        <span className='icon'><IconArrowRight /></span>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
 
}

export default SectionFooter