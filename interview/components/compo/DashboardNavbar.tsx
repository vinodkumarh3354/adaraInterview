import React from 'react';
<<<<<<< HEAD
import { Menu } from 'lucide-react';
import { useUserSession } from '~/hooks/useUserSession';
import ToggleDarkMode from '../atoms/ToggleDarkMode';
import Image from 'next/image';

interface NavbarProps {
  toggleSidebar: () => void;
}

const DashboardNavbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { user, isLoading } = useUserSession();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-30 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
          {/* Hamburger */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          <span className="block lg:hidden">Adara</span> 
          <span className="hidden lg:block">Adara Translate</span> 
          </h1>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user && !isLoading ? (
              <div className="flex items-center space-x-4">
                <ToggleDarkMode />
                {user.photoURL && (
                  <Image
                    src={user.photoURL}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
              </div>
            ) : (
              <div>Loading...</div>
=======
import { signOut, User } from 'firebase/auth';
import { IconUser, IconLogout, IconHome, IconWorld } from '@tabler/icons-react';
import ToggleDarkMode from '../atoms/ToggleDarkMode';
import { useUserSession } from '~/hooks/useUserSession';
import Image from 'next/image';
import { signOutWithGoogle } from '~/lib/firebase.auth';
import { removeSession } from '~/utils/auth.actions';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
const DashboardNavbar = () => {
  const {user ,isLoading} = useUserSession();
  const router = useRouter();
  const handleLogout = async () => {
   await signOutWithGoogle();
   await removeSession();
  };
  

  return (
    <nav className="w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-30 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
            onClick={() => router.push("/")}
            className="flex-shrink-0 cursor-pointer">
              <h1 className="text-2xl pl-14 md:pl-0 flex gap-1 font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Adara <span className='md:block hidden'> Translate </span> 
              </h1>
            </div>

            {/* Navigation Links
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <IconHome className="w-5 h-5" />
                <span>Home</span>
              </a>
              <a
                href="/translation"
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <IconWorld className="w-5 h-5" />
                <span>Translate</span>
              </a>
            </div> */}
          </div>

          {/* User Section */}

          <div className="flex items-center space-x-4">
            {user && !isLoading ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div>
                    <ToggleDarkMode />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    {user?.photoURL && (
                      <div>
                        <Image src={user?.photoURL} alt="User Avatar" width={40} height={40} className="rounded-full" />
                      </div>
                    )}
                    {!user?.photoURL && (
                      <IconUser className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                  <span className="text-gray-700 md:block hidden dark:text-gray-300 text-sm">{user?.email}</span>
                </div>
                <button
                  className="
                    bg-red-100/50 dark:bg-red-500/20 
                    text-red-600 dark:text-red-400
                    hover:bg-red-100 dark:hover:bg-red-500/30 
                    px-3 py-2 rounded-xl 
                    flex items-center space-x-2
                    transition-all duration-300
                  "
                  onClick={handleLogout}
                >
                  <IconLogout className="w-5 h-5" />
                  <span className='md:block hidden'>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                <div className="hidden md:block h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-8 w-8 md:w-20 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>
>>>>>>> origin/main
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
