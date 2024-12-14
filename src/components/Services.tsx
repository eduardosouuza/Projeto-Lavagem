import React from 'react';
import { ServiceCard } from './services/ServiceCard';

const services = [
  {
    title: 'Lavagem de Motores',
    description: 'Limpeza profunda do motor com produtos específicos e acabamento impecável.',
    price: 'R$ 80,00',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Lavagem de Chassi com Clareamento',
    description: 'Remoção completa de sujeira e oxidação do chassi com clareamento profissional.',
    price: 'R$ 120,00',
    imageUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Limpeza Interna Detalhada',
    description: 'Higienização completa do interior com atenção aos mínimos detalhes.',
    price: 'R$ 150,00',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Encerramento',
    description: 'Proteção e brilho intenso com ceras de alta qualidade.',
    price: 'R$ 100,00',
    imageUrl: 'https://images.unsplash.com/photo-1506469717960-433cebe3f181?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}