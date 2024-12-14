import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export function AboutHero() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      value: "5000+",
      label: "Clientes Atendidos"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      value: "8",
      label: "Anos de Experiência"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      value: "15+",
      label: "Prêmios Recebidos"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      value: "100%",
      label: "Satisfação Garantida"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Nossa História</h1>
          <p className="text-xl text-gray-600">
            Desde 2015, transformando a experiência de cuidar do seu veículo
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}