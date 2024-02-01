"use client";
import { Button, Container } from "@/styled";
import React from "react";

const Contato = () => {
  return (
    <Container>
      <h1>Contato</h1>
      <Button style={{ marginBottom: 10 }} href="mailto:contato@opombo.jor.br">
        Email
      </Button>
      <Button
        style={{ marginBottom: 10 }}
        href="https://instagram.com/opombo.jornal"
        target="_blank"
      >
        Instagram
      </Button>
      <Button href="https://youtube.com/@opombojornal" target="_blank">
        YouTube
      </Button>
    </Container>
  );
};

export default Contato;
