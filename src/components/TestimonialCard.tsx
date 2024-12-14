import React from 'react';

interface TestimonialCardProps {
  name: string;
  age: number;
  image: string;
  content: string;
  service: string;
}

export function TestimonialCard({ name, age, image, content, service }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-gray-800">{name}, {age}</h3>
          <p className="text-sm text-gray-600">{service}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
      <div className="absolute -top-3 left-8 text-primary text-6xl opacity-20">"</div>
    </div>
  );
}