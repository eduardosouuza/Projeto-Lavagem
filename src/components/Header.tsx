import React from 'react';
import { Car } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">AutoWash Pro</span>
        </div>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
        >
          Contato
        </a>
      </div>
    </header>
  );
}