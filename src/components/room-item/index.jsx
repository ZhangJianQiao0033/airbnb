import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Rating } from '@mui/material'

import { RoomItemWrapper } from './style'


const RoomItem = memo((props) => {
  const {itemData, itemWidth} = props
  return (
    <RoomItemWrapper itemWidth={itemWidth}>
        <div className="picture">
          <img src={itemData.picture_url} alt="" />
        </div>
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
          <Rating name="half-rating-read" defaultValue={itemData.star_rating ?? 5} precision={0.1} readOnly 
            sx={{color: itemData.star_rating_color ? itemData.star_rating_color : "#008489", fontSize: "12px", mr: "5px"} }
          />
            <span>
              {itemData.reviews_count}
            </span>
            {
              itemData.bottom_info && <span>·{itemData.bottom_info?.content}</span>
            }
            
          </div>
        
    </RoomItemWrapper>
  )
})
RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}
export default RoomItem

