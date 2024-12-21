import React, { memo, useEffect} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionRooms from '@/components/section-rooms'

  
  const Home = memo(() => {
    const {goodPriceInfo} = useSelector(state => ({
      goodPriceInfo : state.home.goodPriceInfo
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchHomeDataAction())
    }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms goodPriceList = {goodPriceInfo.list}/>
        </div>
        
      </div>
    </HomeWrapper>
  )
})

export default Home