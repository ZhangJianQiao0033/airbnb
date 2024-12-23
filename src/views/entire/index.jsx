import React, { memo } from 'react'
import Entirefilter from './c-cpns/entire-filter'

const Entire = memo(() => {
  return (
    <div>
      <Entirefilter />
      <div className='rooms'>room-section</div>
      <div className='pagination'>pagination-section</div>
    </div>
  )
})

export default Entire