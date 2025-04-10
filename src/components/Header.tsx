'use client';
import { useScroll } from '@/hooks/useScroll';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';

export const Header = () => {
  const isScrolled = useScroll();

  return (
    <header
      className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between p-4 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
};
