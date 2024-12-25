import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {

  const {btnClickHandle, pictureUrls} = props
  const [pictureIndex, setPictureIndex] = useState(0)
  function ChangePictureIndex(isNext) {
    let newIndex = pictureIndex
    newIndex = isNext ? pictureIndex + 1 : pictureIndex - 1
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    
    setPictureIndex(newIndex)
  }
  return (
    <PictureBrowserWrapper>
      <div className="top" onClick={btnClickHandle}>
        <div className="btn-close">
          <IconClose/>
        </div>
        
      </div>
      <div className="slider">
        <div className="control">

          <div className="btn left" onClick={e => ChangePictureIndex(false)}>
            <IconArrowLeft width={77} height={77}/>
          </div>
          <div className="btn right" onClick={e => ChangePictureIndex(true)}>
            <IconArrowRight width={77} height={77}/>
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[pictureIndex]} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{pictureIndex + 1} / {pictureUrls.length}</span>
              <span>:room apartment图片{pictureIndex + 1}</span>
            </div>
            <div className="toggle">
              <span>隐藏图片列表</span>
              <span><IconTriangleArrowBottom /></span>
            </div>
          </div>

          <div className="list">
          <Indicator selectIndex={pictureIndex}>
            {
             pictureUrls.map((item, index) => {
              return (
                <div className="item">
                  <img src={item} alt="" />
                </div>
              )
             })
            }
          </Indicator>
        </div>
        </div>
        
          
       
      </div>

    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser