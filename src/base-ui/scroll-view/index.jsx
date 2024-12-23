import React, { memo, useEffect, useRef, useState } from 'react'

import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setshowLeft] = useState(false)
  const scrollContentRef = useRef()
  const posiIndexRef = useRef(0)
  const totalDistanceRef = useRef()


  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    console.log(scrollWidth);
    const clientWidth = scrollContentRef.current.clientWidth
    console.log(clientWidth);
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight( totalDistance > 0)
  },[])

  function controlClickHandle(isRight) {
    const posiIndex = isRight ? posiIndexRef.current + 1 : posiIndexRef.current - 1
    const newEl = scrollContentRef.current.children[posiIndex]
    const newOffsetLeft = newEl.offsetLeft
    console.log("newOffsetLeft",newOffsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    posiIndexRef.current = posiIndex
    console.log("posiIndexRef.current",posiIndexRef.current);
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setshowLeft(newOffsetLeft > 0)
  }
  return (
    <ScrollViewWrapper>
  
      { showLeft && <div  className="control left" onClick={e => controlClickHandle(false)}><IconArrowLeft /></div>}
      { showRight && <div className="control right" onClick={e => controlClickHandle(true)}><IconArrowRight /></div>} 
       
      <div className="scroll">
        <div className="scroll-content"  ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
      
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView