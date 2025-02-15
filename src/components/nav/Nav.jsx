import React, { useEffect } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  // Adiciona event listeners após o componente ser montado
  useEffect(() => {
    const icons = document.querySelectorAll('.navigation .icon');

    // Função para adicionar/remover a classe 'active-nav'
    const handleIconClick = (event) => {
      // Remove a classe 'active-nav' de todos os ícones
      icons.forEach((icon) => {
        icon.classList.remove('active-nav');
      });

      // Adiciona a classe 'active-nav' ao ícone clicado
      event.currentTarget.classList.add('active-nav');
    };

    // Adiciona o event listener a cada ícone
    icons.forEach((icon) => {
      icon.addEventListener('click', handleIconClick);
    });

    // Limpa os event listeners quando o componente é desmontado
    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener('click', handleIconClick);
      });
    };
  }, []); // O array vazio garante que o useEffect só roda uma vez (montagem/desmontagem)

  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#projects">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#projects_estudantis">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;