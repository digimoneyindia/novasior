import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import InteractiveBackground from './InteractiveBackground';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-transparent text-brand-text overflow-x-hidden max-w-full w-full relative">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1 flex flex-col overflow-x-hidden w-full max-w-full relative z-10">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
