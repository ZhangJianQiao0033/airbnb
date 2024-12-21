import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;

  .wrapper {
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;
    box-sizing: border-box;
    .service {
      display: flex;
    }
    .group {
      flex: 1;

      .name {
        margin-bottom: 16px;
        font-weight: 700;
        color: #000000D9;
      }

      .item {
        margin-top: 15px;
        color: #767676;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .statement {
      margin-top: 30px;
      border-top: 1px solid #EBEBEB;
      padding-top: 20px;
      text-align: center;
      color: #767676;
    }
  }
`