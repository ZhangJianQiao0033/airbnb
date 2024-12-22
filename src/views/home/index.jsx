import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'

  
  const Home = memo(() => {
    const {goodPriceInfo, highScoreInfo, discountInfo} = useSelector(state => ({
      goodPriceInfo : state.home.goodPriceInfo,
      highScoreInfo : state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchHomeDataAction())
    }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
     
      <div className="content">

        <div className="discount">
          { discountInfo && <HomeSectionV2 title={discountInfo.title}  subtitle= {discountInfo.subtitle} infoData ={discountInfo}/>}
        </div>

        <div className="good-price">
          { goodPriceInfo && <HomeSectionV1 title={goodPriceInfo.title} infoData = {goodPriceInfo.list} subtitle= {goodPriceInfo.subtitle}/>}
        </div>

        <div className="high-score">
          { highScoreInfo && <HomeSectionV1 title={highScoreInfo.title} infoData = {highScoreInfo.list} subtitle= {highScoreInfo.subtitle}/>}
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home