import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 8px 8px 0;
  .control {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px; 
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;
    z-index: 9;
   /*设置宽高*/
   &.left {

    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
   }
   &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }

  }
  .scroll {
    overflow: hidden;

    .scroll-content {
      position: relative;
      display: flex;

      transition: transform 250ms ease;
    }
  }
`