import React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

export function Hero() {
  const scrollTo = useScrollTo();

  const handleAgendarClick = () => {
    window.open('https://wa.me/5500000000000', '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="home" className="relative h-[500px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Seu carro merece o melhor tratamento</h1>
          <p className="text-xl mb-8">Oferecemos serviços profissionais de lavagem com a qualidade que você e seu veículo merecem.</p>
          <button
            onClick={handleAgendarClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full inline-block font-semibold transition-colors"
          >
            Agende Agora
          </button>
        </div>
      </div>
    </div>
  );
}