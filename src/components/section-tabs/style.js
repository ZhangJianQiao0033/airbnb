import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  display: flex;

  .item {
    padding: 10px 20px;
    background-color: ${props => props.theme.color.secondaryColor};
    font-size: 17px;
  }
`