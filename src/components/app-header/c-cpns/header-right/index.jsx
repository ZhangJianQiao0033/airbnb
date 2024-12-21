import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const panelHandle = () => {
      setShowPanel(false)
    }
    window.addEventListener("click", panelHandle, true)

    return () => {
      window.removeEventListener("click", panelHandle)
    }
  })
  const profileBtnClickHandle = () => {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
      <span>登录</span>
      <span>注册</span>
      <span>
        <IconGlobal />
      </span>
      </div>
      <div className="profile" onClick={profileBtnClickHandle}>
        <span>
          <IconMenu />
        </span>
        <span>
          <IconAvatar />
        </span>
        {showPanel && <div className="panel">
          <div className="top">
            <div className="item">注册</div>
            <div className="item">登录</div>
          </div>
          <div className="bottom">
          <div className="item">出租房源</div>
          <div className="item">开展体验</div>
          <div className="item">帮助</div>
          </div>
        </div>}

      </div>
    </RightWrapper>
  )
})

export default HeaderRight