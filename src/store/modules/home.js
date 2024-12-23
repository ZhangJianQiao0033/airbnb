import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeRecommendData, getHomeLongforData, getHomePlusforData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, {dispatch}) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeRecommendData().then(res =>
    dispatch(changeRecommendInfoAction(res))
  )
  getHomeLongforData().then(res => 
    dispatch(changeLongforInfoAction(res))
  )

  getHomePlusforData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
    
})
export const {
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer