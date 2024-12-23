import ycRequest from "..";

export function getEntireList(offset=0, size=20) {
  return ycRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}