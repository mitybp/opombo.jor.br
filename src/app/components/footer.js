"use client"
import { FooterContainer } from '@/styled'
import React from 'react'

const Footer = () => {
  return (
    <FooterContainer>
        <span>O Pombo Jornal &copy; 2023-{new Date().getFullYear()}</span>
        <a href='/politica-de-privacidade'>Política de Privacidade</a>
        <a href='/termos-de-uso'>Termos de Uso</a>
        <a href='/contato'>Contato</a>
    </FooterContainer>
  )
}

export default Footer