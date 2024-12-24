import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.$itemWidth};
  padding: 8px;
  flex-shrink: 0;
  color: #000000D9;
  
  .slider {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .indicator {
      
      position: absolute;
      overflow: hidden;
      left: 0;
      right: 0;
      bottom: 10px;
      width: 30%;
      z-index: 9;
      margin: 0 auto;
      .item  {
        
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.28%;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;
          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
    .control {
      
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        &.left {
        }
        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
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
      object-fit: cover;
    }
  }
  .desc {
      margin: 10px 0 10px;
      font-size: 12px;
      color: ${props => props.$verifyColor};
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