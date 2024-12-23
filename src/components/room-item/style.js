import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.$itemWidth};
  padding: 8px;
  flex-shrink: 0;
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
      margin: 10px 0 10px;
      font-size: 12px;
      color: ${props => props.verifyColor};
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
    margin: 15px 0;
  }

  .rate {
    display: flex;
    margin: 15px 0 0;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #484848;

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }

`