import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  display: flex;
  
  .item {
    flex-shrink: 0;
    padding: 14px 16px;
    flex-basis: 120px;
    margin-right: 16px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #000;
    font-size: 17px;
    border-radius: 3px;
    white-space: nowrap;
    cursor: pointer;
    border: 0.5px solid #D8D8D8;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`