"use client";
import { Container } from "@/styled";
import React from "react";

const TermsOfUse = () => {
  return (
    <Container>
      <h1>Termos de Uso</h1>
      <p>
        Leia também nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>
      <h2>Conteúdo do site</h2>
      <p>
        O Pombo Jornal disponibiliza conteúdo jornalístico produzido pelos
        alunos do Colégio Integral. O conteúdo é de propriedade do Colégio
        Integral, sendo proibida a reprodução ou distribuição sem autorização.
      </p>
      <h2>Matérias Salvas</h2>
      <p>
        Os usuários têm a opção de salvar matérias no armazenamento local do
        site. O Pombo Jornal não se responsabiliza por perdas de dados
        decorrentes de falhas no armazenamento local do navegador.
      </p>
      <h2>Alterações nos Termos</h2>
      <p>
        O Pombo Jornal reserva-se o direito de modificar esta Política de
        Privacidade e os Termos de Uso a qualquer momento. Recomendamos que os
        usuários revejam periodicamente essas políticas para estar cientes de
        eventuais alterações.
      </p>
      <h2>Contato</h2>
      <p>
        Para questões relacionadas à privacidade ou aos termos de uso, entre em
        contato conosco através do e-mail{" "}
        <a target="_blank" href="mailto:contato@opombo.jor.br">contato@opombo.jor.br</a>.
      </p>
      <p>
      Ao utilizar o site <a href='https://opombo.jor.br'>https://opombo.jor.br</a>, os usuários concordam com os termos da <a href='/politica-de-privacidade'>Política de Privacidade</a> e Termos de Uso.
      </p>
    </Container>
  );
};

export default TermsOfUse;
