import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export function ServiceCard({ title, description, price, imageUrl }: ServiceCardProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar o serviço: ${title}`);
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={title}
      />
      <div className="p-6 flex flex-col min-h-[250px]">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 whitespace-nowrap">
              {price}
            </span>
          </div>
          <div className="w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors font-medium text-center min-w-[160px]"
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}