import React from 'react';

interface ServiceButtonProps {
  onClick: () => void;
}

export function ServiceButton({ onClick }: ServiceButtonProps) {
  return (
    <div className="w-full sm:w-auto">
      <button
        onClick={onClick}
        className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 lg:px-5 lg:py-2 rounded-full transition-colors font-medium text-center text-sm min-w-[120px] lg:min-w-[110px]"
      >
        Agendar
      </button>
    </div>
  );
}