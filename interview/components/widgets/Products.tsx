'use client'
import React from 'react';
import Card from '~/components/compo/ProductsCard';
import {
  IconBrandGoogle,
  IconBrandWindows,
  IconBrandWordpress,
} from '@tabler/icons-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Products: React.FC = () => {
  const router = useRouter();
  const cards = [
    {
      icon: IconBrandGoogle,
      title: 'Google Workspace Add-on',
      description:
        'Enhance your productivity with our Google add-on. Seamlessly translate your Google Spreadsheets, Docs, and Slides directly in the application. Leverage the advanced capabilities of Google’s AI for translations that are quick and context-aware.',
    onClick: () => { 
      router.push('https://workspace.google.com/marketplace/app/translate_using_ai_for_google_workspace/55031248721');
    },
    },
    {
      icon: IconBrandWindows,
      title: 'Microsoft Office Add-in',
      description:
        'Empower your Microsoft Office Suite with our add-in. Translate Word, Excel, and PowerPoint files without leaving your workspace. Benefit from Microsoft’s cognitive services for accurate and nuanced translations.',
        onClick: () => {
          toast('Coming Soon',
            {
              icon:'⌛',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
        },
    },
    {
      icon: IconBrandWordpress,
      title: 'WordPress Plugin',
      description:
        'Make your WordPress site multilingual with our easy-to-use plugin. Combine the linguistic intelligence of GPT-4o with DeepL’s translation finesse for content that resonates globally.',
        onClick: () => {
          toast('Coming Soon',
            {
              icon:'⌛',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
        },
    },
  ];

   

  return (
    <div className="h-auto py-8 flex flex-col items-center justify-center px-4">
      <span className="text-xl text-cyan-700 dark:text-[#A5F3FC]  font-bold">Products</span>
      <h1 className="sm:text-5xl text-3xl font-bold text-center dark:text-gray-200 text-black mb-2">Our Products</h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl dark:text-slate-400 mb-8">Explore our selection of best-in-class products designed to enhance your productivity across multiple platforms.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={<card.icon />}
            title={card.title}
            description={card.description}
            onClick={card.onClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
