import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailPicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  const {infoData} = props
  const pictureUrls = infoData.picture_urls
  return (
    <DetailPicturesWrapper>
      <div className="picutreUrls">
        <div className="left">
          <div className="item">
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
          
        </div>
        <div className="right">
          {
            pictureUrls.slice(1,5).map(picutreUrl => {
              return (
                <div className="item">
                  <img src={picutreUrl} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </DetailPicturesWrapper>
  )
})

DetailPictures.propTypes = {
  infoData: PropTypes.object
}

export default DetailPictures