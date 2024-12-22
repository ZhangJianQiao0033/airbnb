import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  
  margin-top: 10px;
  display: flex;
    .info {
      display: flex;
      align-items: center;
      cursor: pointer;
      .name {
        margin-right: 6px;
        font-size: 17px;
        font-weight: 700;
      }

      &:hover {
        
        text-decoration: underline;
      }
    }
  
`