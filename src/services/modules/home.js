import ycRequest from "..";

export function getHomeGoodPriceData() {
  return ycRequest.get({
    url: "/home/goodprice"
  })
}