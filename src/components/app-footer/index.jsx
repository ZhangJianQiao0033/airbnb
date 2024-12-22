import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from "@/assets/data/footer.json"
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
        {
          footerData.map((item, index) => {
            return (
              <div className="group" key={index}>
                <div className="name">{item.name}</div>
                {item.list.map(iten => {
                  return (
                    <div className="item" key={iten}>{iten}</div>
                  )
                })}
              </div>
              

            )
          })

          
        }
        </div>
        <div className='statement'>© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
      </div>
      
    </FooterWrapper>
  )
})

export default AppFooter