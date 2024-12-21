import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  return (
    <SectionHeaderWrapper>
      <h2 className='title'>{props.title}</h2>

      {
        props.subtitle && <div className="subtitle">{props.subtitle}</div>
      }
    </SectionHeaderWrapper>
  )
})
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}


export default SectionHeader