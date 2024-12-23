import styled from "styled-components";


export const LongforItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  .inner {
    
    padding: 8px;
    
    .item-info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      .cover {
        img {
          width: 100%;
        }
      }
      .bg-cover {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 8px;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
      }
      .info {
        position: absolute;
        display: flex;
        left: 0px;
        right: 0px;
        bottom: 36px; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .city {
          font-size: 18px;
          font-weight: 600;

        }
        .price {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
    
  }
`