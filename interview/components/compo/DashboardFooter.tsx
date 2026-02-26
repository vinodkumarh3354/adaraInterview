import Link from 'next/link';
import React from 'react';

const DashboardFooter = () => {
  return (
    <footer className="bg-white/50 dark:bg-gray-900/80 backdrop-blur-sm py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          © 2024 AdataTranslate. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="/privacy" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;