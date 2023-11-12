import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categoria</h1>
          <span>Mulher</span>
          <span>Home</span>
          <span>Bonés</span>
          <span>Acessórios</span>
          <span>Novos Lançamentos</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Páginas</span>
          <span>Lojas</span>
          <span>Blog</span>
          <span>Sobre</span>
        </div>
        <div className='item'>
          <h1>Sobre</h1>
          <span>O próprio cliente é muito dinheiro, mas eu não sei
            Da mesma forma.</span>
        </div>
        <div className='item'>
          <h1>Contatos</h1>
          <span>Rua Major Floriano Peixoto Fortaleza capital Ceara.
          Perto da ponte metálica.</span>
        </div>
      </div>
      <div className='botton'>
        <div className='left'>
          <span className='logo'>Melzinha</span>
          <span className='copyright'>&copy; {new Date().getFullYear()} copyright</span>
        </div>
        <div className='right'>
          <img src="../img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
