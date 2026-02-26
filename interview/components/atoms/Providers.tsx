'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
 

export interface ProvidersProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()
const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
  <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
  </ThemeProvider>
);

export default Providers;
