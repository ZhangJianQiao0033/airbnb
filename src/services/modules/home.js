import ycRequest from "..";

export function getHomeGoodPriceData() {
  return ycRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return ycRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return ycRequest.get({
    url: "/home/discount"
  })
}

export function getHomeRecommendData() {
  return ycRequest.get({
    url: "/home/hotrecommenddest"
  })
}