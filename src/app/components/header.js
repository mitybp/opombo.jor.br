"use client";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, HeaderContainer } from "../styled";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
        <Button
          className="header square"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X /> : <List />}
        </Button>
        <div className="items" style={{ opacity: openMenu ? 1 : 0, visibility: openMenu ? "visible" : "hidden" }}>
          <a href="/sobre">Sobre nós</a>
          <a href="/salvos">Matérias salvas</a>
          <a href="/galeria">Galeria</a>
          <a href="https://sistema-opombo.vercel.app/" target="_blank">
            Sistema
          </a>
          <a href="https://instagram.com/opombo.jornal/" target="_blank">
            Instagram
          </a>
        </div>
      </section>
    </HeaderContainer>
  );
};

export default Header;
