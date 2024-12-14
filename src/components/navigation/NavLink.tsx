import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
}

export function NavLink({ href, children, isButton = false }: NavLinkProps) {
  const scrollTo = useScrollTo();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollTo(sectionId);
  };

  if (isButton) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className="inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-full transition-colors duration-200 text-center font-medium"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
}