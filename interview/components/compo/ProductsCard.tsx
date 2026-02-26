'use client'
import Image from 'next/image';
import React from 'react';

interface CardProps {
  icon: React.ReactNode;  
  title: string;
  description: string;
  onClick: (() => void) | undefined;  
}

const Card: React.FC<CardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 mx-auto w-full text-white rounded-lg p-6 max-w-sm shadow-lg flex flex-col justify-between items-center">
      <div className="flex flex-col items-center">
        <div className="flex bg-cyan-700 rounded-md justify-center items-center mb-4 w-12 h-12">
          {icon}
        </div>
        <h3 className="text-lg font-semibold dark:text-gray-200 text-black text-center mb-3">{title}</h3>
        <p className="text-md text-gray-600 dark:text-slate-400 text-center py-2">{description}</p>
      </div>
      <button
        className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-800"
        onClick={onClick} 
      >
        Install
      </button>
    </div>
  );
};

export default Card;
