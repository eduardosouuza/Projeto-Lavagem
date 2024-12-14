import React from 'react';
import { Heart, Target, Sparkles, Users } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Paixão pelo que fazemos",
      description: "Cada veículo é tratado com dedicação e amor, como se fosse nosso"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Excelência em cada detalhe",
      description: "Comprometimento com os mais altos padrões de qualidade"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Inovação constante",
      description: "Sempre em busca das melhores técnicas e produtos do mercado"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Foco no cliente",
      description: "Satisfação garantida em cada serviço realizado"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Valores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}