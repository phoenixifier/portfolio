import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// icons
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className="fixed bottom-0 z-50 mt-auto flex w-full flex-col items-center xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      <div className="flex h-20 w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === path && 'text-accent'}
              group relative flex items-center transition-all duration-300 hover:text-accent`}
              key={index}
              href={link.path}
            >
              {/* tooltip */}
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-[3px] bg-white p-1.5 text-primary">
                  <div className="text-sm font-semibold capitalize leading-none">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className="absolute -right-2
                    border-y-[6px] border-l-8 border-solid border-y-transparent border-l-white"
                  ></div>
                </div>
              </div>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
