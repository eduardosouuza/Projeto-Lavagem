import React from 'react';

export function StorySection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Equipe AutoWash Pro"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Como Tudo Começou</h2>
            <p className="text-gray-600 mb-6">
              A AutoWash Pro nasceu em 2015, em São Paulo, da paixão de três amigos por carros e excelência em serviços. 
              O que começou como um pequeno empreendimento em uma garagem transformou-se em referência no setor de estética automotiva.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa visão sempre foi clara: revolucionar o mercado de limpeza automotiva oferecendo serviços de alta qualidade 
              com tecnologia de ponta e profissionais altamente capacitados.
            </p>
            <p className="text-gray-600">
              Hoje, atendemos mais de 5.000 clientes satisfeitos e expandimos nossa operação para três unidades na grande São Paulo, 
              mantendo sempre o mesmo compromisso com a qualidade e atenção aos detalhes que nos trouxe até aqui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}