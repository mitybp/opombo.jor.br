import styled from "styled-components";

export const Container = styled.div`
  text-align: justify;
  margin-inline: 20%;
  margin-top: 100px;
  margin-bottom: 40px;
  font-size: 16px;

  &p {
    padding: 4px 0;
    font-size: 18px;
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
    }
    &.small{
        width: 25px;
        height: 25px;
        font-size: 14px;
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

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  span {
    background-color: #f4f4f4;
    height: 35px;
    width: 35px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: inherit;
    border: 1px solid #ccc;
    outline: none;
  }
  .items {
    position: absolute;
    top: 38px;
    right: 0;
    padding: 6px;
    gap: 4px;
    width: 14rem;
    display: none;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 0 10px 2px #ccc;
    border: 1px solid #ccc;
    z-index: 1;
    border-radius: 8px;
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
  &:hover {
    span {
      background-color: #eee;
    }
    .items {
      display: flex;
    }
  }
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
  .buttons{
    display: flex;
    align-items: center;
    gap: 4px;
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
    a{
        text-decoration: none;
        color: #000;
        font-size: 22px;
    }
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            gap: 4px;
            p.tag{
                padding: 2px 8px;
                border-radius: 6px;
                font-size: 14px;
            }
        }
    }
`

export const TagFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    button{
        cursor: pointer;
        outline: none;
        background-color: #f4f4f4;
        border: 1px solid #ccc;
        padding: 2px 6px;
        border-radius: 6px;
    }
`