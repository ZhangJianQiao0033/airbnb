import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import { isEmptyO } from '@/utils/is-empty-object'
import { fetchHomeDataAction } from '@/store/modules/home'


  const Home = memo(() => {
    const {goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo} = useSelector(state => ({
      goodPriceInfo : state.home.goodPriceInfo,
      highScoreInfo : state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
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
          { isEmptyO(discountInfo) && <HomeSectionV2 title={discountInfo.title}  subtitle= {discountInfo.subtitle} infoData ={discountInfo}/>}
        </div>

        <div className="recommend">

          { isEmptyO(recommendInfo) && <HomeSectionV2 title={recommendInfo.title}  subtitle= {recommendInfo.subtitle} infoData ={recommendInfo}/>}
        </div>

        <div className="longfor">
          { isEmptyO(longforInfo) && <HomeLongfor  infoData ={longforInfo}/>}
        </div>

        <div className="good-price">
          { isEmptyO(goodPriceInfo) && <HomeSectionV1 title={goodPriceInfo.title} infoData = {goodPriceInfo.list} subtitle= {goodPriceInfo.subtitle}/>}
        </div>

        <div className="high-score">
          { isEmptyO(highScoreInfo) && <HomeSectionV1 title={highScoreInfo.title} infoData = {highScoreInfo.list} subtitle= {highScoreInfo.subtitle}/>}
        </div>

        <div className="plus">
          { isEmptyO(plusInfo) && <HomeSectionV3  infoData ={plusInfo}/>}
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home