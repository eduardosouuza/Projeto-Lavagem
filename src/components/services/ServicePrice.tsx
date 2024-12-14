import React from 'react';

interface ServicePriceProps {
  price: string;
}

export function ServicePrice({ price }: ServicePriceProps) {
  return (
    <div className="w-full sm:w-auto text-center sm:text-left">
      <span className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-blue-600 whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}