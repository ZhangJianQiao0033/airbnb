import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  color: ${props => props.theme.text.primaryColor};
  font-weight: 700;
  .btns {
    display: flex;
    align-items: center;
    span {
      padding: 12px 15px;
      height: 18px;
      line-height: 18px;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-sizing: border-box;
    cursor: pointer;
    
    ${props => props.theme.mixin.boxShadow}
    

    .panel {
      position: absolute;
      top: 60px;
      right: 0px;
      width: 240px;
      padding: 12px 0;
      border-radius: 15px;
      border: 1px solid #ccc;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      .top {
        padding-bottom: 15px;
        .item {
          padding: 10px 13px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
        border-bottom: 1px solid #ddd;
      }
      .bottom {
        padding-top: 13px;
        .item {
          padding: 10px 13px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`