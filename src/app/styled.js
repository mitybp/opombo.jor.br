import styled from "styled-components";

export const Container = styled.div`
  text-align: justify;
  margin-inline: 20%;
  margin-top: 100px;
  margin-bottom: 40px;
  font-size: 16px;

  p {
    padding: 4px 0;
    font-size: 18px;
    &::first-letter {
      padding-left: 10px;
    }
    a {
      color: dodgerblue;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 550px) {
    margin-inline: 14px;
  }
`;

export const Button =
  styled.button &&
  styled.a`
    background-color: #f4f4f4;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &.header {
      height: 35px;
      span {
        padding-left: 6px;
      }
      @media (max-width: 450px) {
        width: 35px;
        padding: 0;
        span {
          display: none;
        }
      }
    }
    &.small {
      width: 25px;
      height: 25px;
      font-size: 14px;
      padding: 0;
    }
    &.square {
      width: 35px;
      padding: 0;
    }
  `;

export const Input = styled.input`
  background-color: #f4f4f4;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  color: #000;
  outline: none;
  width: 100%;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid #ccc;
  padding-inline: 40px;
  a.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 22px;
    color: #000;
    text-decoration: none;

    &:hover {
      color: #000;
    }

    @media (max-width: 400px) {
      span {
        display: none;
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 4px;
    transition: 0.2s ease-in-out all;
    .items {
      position: absolute;
      top: 50px;
      right: 40px;
      padding: 6px;
      gap: 4px;
      width: 14rem;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 0 0 10px 2px #ccc;
      border: 1px solid #ccc;
      z-index: 1;
      border-radius: 8px;
      opacity: 0;
      visibility: hidden;
      a {
        background-color: transparent;
        padding: 4px 10px;
        border-radius: 8px;
        color: #000;
        border: none;
        outline: none;
        height: 30px;
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        cursor: pointer;
        background-color: #f4f4f4;
        border: 1px solid #ccc;
      }
    }
  }
`;

export const CardContainer = styled.div`
  text-align: initial;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 28rem;
  a {
    text-decoration: none;
    color: #000;
    font-size: 22px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 4px;
      p.tag {
        &::first-letter {
          padding-left: 0;
        }
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 300px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
`;

export const TagFilter = styled.div`
  .filter {
    position: fixed;
    top: 60px;
    left: 10px;
  }
  div.float {
    &.active {
      opacity: 1;
      visibility: visible;
    }
    transition: 0.2s ease-in-out all;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    width: 18rem;
    left: 10px;
    border: 1px solid #ccc;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px 2px #ccc;
    @media (max-width: 550px) {
      width: calc(100% - 20px);
    }
    p {
      font-size: 18px;
      padding-bottom: 10px;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-bottom: 20px;
      button {
        cursor: pointer;
        outline: none;
        background-color: #f4f4f4;
        border: 1px solid #ccc;
        padding: 2px 6px;
        border-radius: 6px;
        font-size: 14px;
      }
    }
    div.center {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  background-color: #f4f4f4;
  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider:before {
      transform: translateX(17px);
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    transition: 0.4s;
    &::before {
      position: absolute;
      content: "";
      height: 10px;
      width: 25px;
      left: 4px;
      bottom: 5px;
      border-radius: 10px;
      background-color: dodgerblue;
      transition: 0.4s;
    }
  }
`;

export const Loader = styled.div`
  position: fixed;
  inset: 0;
  background-color: #ffffff99;
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 48px;
    height: 48px;
    border: 3px solid dodgerblue;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: #000;
    }
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const PostContainer = styled.div`
  h1.title {
    font-size: 2em;
    text-align: start;
  }
  div.infos {
    display: flex;
    align-items: center;
    gap: 4px;
    p::first-letter {
      padding-left: 0;
    }
    p.tag {
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 14px;
    }
  }
  div.buttons {
    display: flex;
    align-items: center;
    gap: 6px;
    div.group {
      display: flex;
      align-items: center;
      a {
        &:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:nth-child(2) {
          border-radius: 0;
        }
        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
`;

export const ScrollIndictorContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: transparent;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  div {
    height: 8px;
    max-width: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const PostGoTopButton = styled.a`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 8px;
  color: #000;
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  flex-wrap: wrap;
  gap: 10px;
  padding-inline: 40px;
  a {
    color: dodgerblue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ImgCardContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  border-radius: 10px;
`