import React from 'react';

interface ServiceContentProps {
  title: string;
  description: string;
}

export function ServiceContent({ title, description }: ServiceContentProps) {
  return (
    <div className="mb-6 flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}