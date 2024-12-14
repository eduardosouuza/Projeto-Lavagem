import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: "Ricardo Silva",
    age: 34,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "Incrível o resultado do encerramento no meu carro! Já utilizei vários serviços de lavagem, mas o cuidado e atenção aos detalhes aqui são excepcionais. Meu Civic ficou com um brilho que nunca tinha visto antes.",
    service: "Cliente Encerramento"
  },
  {
    name: "Amanda Costa",
    age: 29,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "A limpeza interna detalhada superou todas as expectativas. Tenho dois filhos pequenos e o carro estava precisando muito de uma higienização profunda. O resultado foi impressionante, parece que o carro saiu da concessionária!",
    service: "Cliente Limpeza Interna"
  },
  {
    name: "Carlos Mendes",
    age: 42,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "A lavagem do motor do meu carro antigo ficou impecável. O pessoal realmente entende do assunto e usa produtos de primeira qualidade. Além do serviço excelente, o atendimento foi muito profissional.",
    service: "Cliente Lavagem de Motor"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">O que nossos clientes dizem</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira os depoimentos de quem já experimentou nossos serviços e comprovou a qualidade do nosso trabalho
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}