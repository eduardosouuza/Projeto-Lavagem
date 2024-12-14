import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-primary transition-colors"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#agendar" isButton>Agendar Horário</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}