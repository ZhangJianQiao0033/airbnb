import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { DetailPicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo((props) => {
  const {infoData} = props
  const pictureUrls = infoData.picture_urls
  const [showPictureBrowser, setShowPictureBrowser] = useState(false)

  useEffect(() => {
    if(showPictureBrowser) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [showPictureBrowser])
  return (
    <DetailPicturesWrapper>
      <div className="picutreUrls">
        <div className="left">
          <div className="item" onClick={e => setShowPictureBrowser(true)}>
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
          
        </div>
        <div className="right">
          {
            pictureUrls.slice(1,5).map(picutreUrl => {
              return (
                <div className="item" onClick={e => setShowPictureBrowser(true)}>
                  <img src={picutreUrl} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={e => setShowPictureBrowser(true)}>显示图片</div>
      { showPictureBrowser && <PictureBrowser btnClickHandle = {e => setShowPictureBrowser(false)} pictureUrls={pictureUrls}/>}
    </DetailPicturesWrapper>
  )
})

DetailPictures.propTypes = {
  infoData: PropTypes.object
}

export default DetailPictures