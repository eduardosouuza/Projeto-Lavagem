import React from 'react';

interface ServiceImageProps {
  imageUrl: string;
  title: string;
}

export function ServiceImage({ imageUrl, title }: ServiceImageProps) {
  return (
    <div
      className="h-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="img"
      aria-label={title}
    />
  );
}