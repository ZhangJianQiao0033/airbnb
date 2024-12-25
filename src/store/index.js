import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "@/store/modules/home"
import entireReducer from "@/store/modules/entire"
import detailReducer from "@/store/modules/detail"
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store