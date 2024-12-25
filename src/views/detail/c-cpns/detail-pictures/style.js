import styled from "styled-components";

export const DetailPicturesWrapper = styled.div`
  .picutreUrls {
    display: flex;
    height: 600px;

    &:hover {
      .cover {
        opacity: 1 !important; /* 使用更简洁的写法 */
      }
      .item:hover .cover {
        opacity: 0 !important; /* 使用更简洁的写法，减少嵌套 */
      }
    }

    .left {
      position: relative;
      width: 50%;
      height: 100%;

      .item {
        height: 100%;
        overflow: hidden;
        position: relative; /* 为 cover 定位 */

        .cover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          background-color: rgba(0, 0, 0, 0.3);
          transition: opacity 250ms ease; /* 添加过渡效果，使 cover 显示更平滑 */
           pointer-events: none;  /* 避免遮挡图片点击事件 */
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 250ms ease;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        position: relative;
        box-sizing: border-box;
        border: 1px solid black;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 250ms ease;
          &:hover {
            transform: scale(1.1);
          }
        }

         .cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transition: opacity 250ms ease;
            background-color: rgba(0, 0, 0, 0.3);
            pointer-events: none; /* 避免遮挡图片点击事件 */
          }
      }
    }
  }
`;