"use client";
import { Container } from "@/styled";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Container>
      <h1>Política de Privacidade</h1>
      <p>
        Leia também nossos <a href="/termos-de-uso">Termos de Uso</a>.
      </p>
      <p>
        O Pombo Jornal, veículo informativo do Colégio Integral, está
        comprometido em garantir a privacidade e segurança dos usuários. Esta
        Política de Privacidade descreve como coletamos, utilizamos e protegemos
        as informações fornecidas pelos usuários do site{" "}
        <a href="https://opombo.jor.br">https://opombo.jor.br</a>, que utiliza o
        Google Firebase Firestore como banco de dados para armazenar os títulos,
        conteúdos, datas de publicação e créditos das matérias.
      </p>
      <h2>Coleta e Armazenamento de Informações</h2>
      <p>
        O Pombo Jornal não coleta dados pessoais dos usuários, como nomes,
        endereços de e-mail ou informações de contato. O Google Firebase
        Firestore é utilizado exclusivamente para armazenar os títulos,
        conteúdos, datas de publicação e créditos das matérias.
      </p>
      <p>
        As "matérias salvas" são armazenadas no armazenamento local do site, não
        sendo compartilhadas ou transferidas para qualquer servidor externo.
      </p>
      <h2>Uso de Cookies e Notificações</h2>
      <p>
        O Pombo Jornal não utiliza cookies ou notificações para rastrear
        atividades dos usuários. Não há coleta automática de informações não
        essenciais durante a navegação no site.
      </p>
      <h2>Segurança e Acesso aos Dados</h2>
      <p>
        O Pombo Jornal adota medidas de segurança para proteger as informações
        armazenadas no Google Firebase Firestore. O acesso a esses dados é
        restrito apenas a pessoal autorizado, garantindo a segurança das
        matérias.
      </p>
      <h2>Links para Sites Externos</h2>
      <p>
        O site do Pombo Jornal pode conter links para sites externos. Não nos
        responsabilizamos pela política de privacidade desses sites e
        encorajamos os usuários a lerem as políticas de privacidade de cada site
        visitado.
      </p>
    </Container>
  );
};

export default PrivacyPolicy;
