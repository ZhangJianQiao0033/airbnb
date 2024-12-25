import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {selectIndex = 0} = props

  const contentRef = useRef()
  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex]
    console.log(selectItemEl);
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    console.log("distance1", distance)
    if(distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance 
    console.log("selectIndex", selectIndex);
    console.log("itemLeft",itemLeft)
    console.log("itemWidth",itemWidth)
    console.log("contentWidth",contentWidth)
    console.log("contentScroll", contentScroll)
    console.log("distance2", distance)
    console.log("totalDistance", totalDistance)


    contentRef.current.style.transform = `translate(${-distance}px)`

  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator