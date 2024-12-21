import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: 25%;
  padding: 8px;
  color: #000000D9;
  .inner{
    width: 100%;
  }
  
  .picture {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      color: #767676;
  }

  .name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
  }
  .price {
    margin: 8px 0;
  }

  .rate {
    font-size: 12px;
    font-weight: 700;
    color: #484848;
  }
`