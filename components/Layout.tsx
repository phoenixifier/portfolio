import { Sora } from 'next/font/google';
import React from 'react';

import Header from '@/components/Header';
import Nav from '@/components/Nav';
import TopLeftImg from '@/components/TopLeftImg';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`page`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
