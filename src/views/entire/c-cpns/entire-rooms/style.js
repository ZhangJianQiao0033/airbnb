import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-left: 5px;
  }

  .room-list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    background-color: rgba(255,255,255,.8)
  }
`