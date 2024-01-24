"use client";
import React from "react";
import { Button, HeaderContainer, Dropdown } from "../styled";
import { List, MagnifyingGlass } from "@phosphor-icons/react";

const Header = () => {
  return (
    <HeaderContainer>
      <a className="logo" href="/">
        <img
          src="https://mitybp.pages.dev/assets/opombo-circle.png"
          style={{ width: 40 }}
          alt="logo"
        />
        <span>O Pombo</span>
      </a>
      <section className="buttons">
        <Button className="header" href="/pesquisar">
          <MagnifyingGlass />
          <span>Pesquisar</span>
        </Button>
        <Dropdown>
          <span>
            <List />
          </span>
          <div className="items">
            <a href="/sobre-nos">Sobre nós</a>
            <a href="/espaco-aberto">Espaço Aberto</a>
            <a href="https://sistema.opombo.jor.br/" target="_blank">
              Sistema
            </a>
            <a href="https://instagram.com/opombo.jornal/" target="_blank">
              Instagram
            </a>
          </div>
        </Dropdown>
      </section>
    </HeaderContainer>
  );
};

export default Header;
