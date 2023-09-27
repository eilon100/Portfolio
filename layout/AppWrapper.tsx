import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import NavBar from '../components/NavBar';
import ActiveSectionContextProvider from '../context/active-section-context';

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ActiveSectionContextProvider>
      <Script src="https://kit.fontawesome.com/c3b56a7551.js" />
      <Head>
        <title>Eilon&apos;s Portfolio</title>
      </Head>
      <div>
        <NavBar />
        {children}
      </div>
    </ActiveSectionContextProvider>
  );
}

export default AppWrapper;
