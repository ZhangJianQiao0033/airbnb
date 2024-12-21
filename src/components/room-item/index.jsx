import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
  const {itemData} = props
  return (
    <RoomItemWrapper>
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
  itemData: PropTypes.object
}
export default RoomItem

