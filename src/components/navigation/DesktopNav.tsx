import React from 'react';
import { NavLink } from './NavLink';

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#servicos">Serviços</NavLink>
      <NavLink href="#sobre">Sobre</NavLink>
      <NavLink href="#depoimentos">Depoimentos</NavLink>
      <NavLink href="#agendar" isButton>Agendar Horário</NavLink>
    </nav>
  );
}