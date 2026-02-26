<<<<<<< HEAD
import React from 'react';
import { Home, CreditCard, LanguagesIcon, Menu } from 'lucide-react';
=======
import React, { useState } from 'react';
import { Home, Users, Settings, BarChart2, X, LanguagesIcon, CreditCard } from 'lucide-react';
import { signOutWithGoogle } from '~/lib/firebase.auth';
import { removeSession } from '~/utils/auth.actions';
>>>>>>> origin/main
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
<<<<<<< HEAD
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className={`lg:flex items-center ${
          isOpen ? 'justify-start' : 'justify-center'
        } p-3 bg-gray-700 hover:bg-gray-600 hidden`}
      >
        <Menu className="h-6 w-6" />
        {isOpen && (
          <span className="ml-3 text-sm font-medium text-white">Menu</span>
        )}
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {[
            { icon: Home, label: 'Home', url: '/dashboard/home' },
            { icon: LanguagesIcon, label: 'Translate', url: '/dashboard/translate' },
            { icon: CreditCard, label: 'Billing', url: '/dashboard/billing' },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.url}
                className={`flex items-center p-2 rounded-lg transition-all duration-200 ${
                  pathname === item.url
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-700 hover:text-white'
                }`}
              >
                {/* Icon */}
                <item.icon
                  className={`h-5 w-5 mr-3`}
                />
                {/* Label */}
                {isOpen && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
=======
 const pathname=usePathname();
  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };
  return (
    <div
      className={`
        fixed md:relative h-full 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        w-64 bg-white dark:bg-slate-900
      `}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {[
              { icon: Home, label: 'Home',url:"/dashboard/home" },
              { icon: LanguagesIcon, label: 'Translate',url:"/dashboard/translate" },
              { icon: CreditCard, label: 'Billing',url:"/dashboard/billing" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  className={`
                      flex items-center p-2 rounded-lg 
                      ${item.url === pathname ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100 dark:hover:text-black hover:text-black text-black dark:text-white'}
                      transition duration-200
                    `}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
  
        </nav>
      </div>
>>>>>>> origin/main
    </div>
  );
};
