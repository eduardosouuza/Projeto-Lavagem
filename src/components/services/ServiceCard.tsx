import React from 'react';
import { ServiceImage } from './ServiceImage';
import { ServiceContent } from './ServiceContent';
import { ServicePrice } from './ServicePrice';
import { ServiceButton } from './ServiceButton';

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
      <ServiceImage imageUrl={imageUrl} title={title} />
      <div className="p-6 flex flex-col min-h-[250px]">
        <ServiceContent title={title} description={description} />
        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <ServicePrice price={price} />
          <ServiceButton onClick={handleWhatsApp} />
        </div>
      </div>
    </div>
  );
}