import React, { memo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';

import { RoomItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()
  function controlClickHandle(isNext, event) {
    isNext ? sliderRef.current.next() : sliderRef.current.prev()
    let newIndex = isNext ? selectIndex + 1 : selectIndex -1
    if(newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if(newIndex > itemData.picture_urls.length - 1) newIndex = 0

    setSelectIndex(newIndex)
    event.stopPropagation()
  }
  
  const pictureElement = (
      <div className="picture">
        <img src={itemData.picture_url} alt="" />
      </div>
  )
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width = {30} height = {30}/>
        </div>
        <div className="btn right" onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width = {30} height = {30}/>
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", {active: selectIndex === index})}></span>
                </div>
              )
            })
          }
        </Indicator>
        
      </div>
      <Carousel  infinite={true} arrows={false} dots={false} ref={sliderRef}>
          {itemData?.picture_urls?.map(item => {
            return (
              <div className="picture" key={item}>
                <img src={item} alt="" key={item}/>
              </div>
            )
          })}
        </Carousel>
    </div>
  )

  return (
    <RoomItemWrapper $itemWidth={itemWidth} $verifyColor={itemData?.verify_info?.text_color || "#39576a"} >
        
      { !itemData.picture_urls ? pictureElement: sliderElement }
          
      <div className="desc">
        {itemData.verify_info.messages.join(" · ")}
      </div>
      <div className="name">
        {itemData.name}
      </div>
      <div className="price">
        ¥{itemData.price}/晚
      </div>
      <div className="rate">
        <Rating
          name="half-rating-read"
          defaultValue={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{
            color: itemData.star_rating_color ? itemData.star_rating_color : "#008489",
            fontSize: "12px",
            mr: "5px"
          }}
        />
        <span>
          {itemData.reviews_count}
        </span>
        {itemData.bottom_info && <span>·{itemData.bottom_info?.content}</span>}
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem
