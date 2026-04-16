// components/atoms/Card.tsx
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // ReactNode memungkinkan isi berupa teks, HTML, atau komponen lain
  className?: string; // Untuk kustomisasi tambahan lewat Tailwind
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`cursor-pointer bg-white shadow-md rounded overflow-hidden border border-gray-200 border-r-4 border-r-gray-400 p-6 transition-all duration-300 hover:shadow-xl hover:border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};
