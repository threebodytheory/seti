import { type PopoverProps, Popover, Transition } from '@headlessui/react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { cn } from '@/lib/utils';

import { navigationItems } from '@/config/nav';

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'relative block whitespace-nowrap px-3 py-2 transition',
          isActive
            ? 'text-primary-600 dark:text-primary-400'
            : 'hover:text-primary-600 dark:hover:text-primary-400'
        )}
      >
        {children}
        {isActive && (
          <motion.span
            className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-400/0 via-primary-400/40 to-primary-400/0'
            layoutId='active-nav-item'
          />
        )}
      </Link>
    </li>
  );
}

function Desktop({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { t } = useTranslation('common');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - bounds.left);
      mouseY.set(clientY - bounds.top);
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5);
    },
    [mouseX, mouseY, radius]
  );
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)`;

  return (
    <nav
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative',
        'rounded-full bg-gradient-to-b',
        'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-100/10 backdrop-blur-md',
        'from-zinc-900/70 to-zinc-800/90',
        '[--spotlight-color:rgb(217_249_157_/_0.07)]',
        className
      )}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        style={{ background }}
        aria-hidden='true'
      />

      <ul className='flex bg-transparent px-3 text-sm font-medium text-zinc-200 '>
        {navigationItems.map(({ href, text }) => (
          <NavItem key={href} href={href}>
            {t(text)}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className='block py-2'>
        {children}
      </Popover.Button>
    </li>
  );
}

function Mobile(props: PopoverProps<'div'>) {
  const { t } = useTranslation('common');
  return (
    <Popover {...props}>
      <Popover.Button className='group flex w-28 items-center justify-between rounded-full bg-gradient-to-b px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur-md focus:outline-none focus-visible:ring-2 from-zinc-900/30 to-zinc-800/80 text-zinc-200 ring-white/10 hover:ring-white/20 focus-visible:ring-primary-500/80'>
        {t('nav.go')}
        {/* Chevron */}
        <svg
          viewBox='0 0 8 6'
          aria-hidden='true'
          className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'
        >
          <path
            d='M1.75 1.75 4 4.25l2.25-2.5'
            fill='none'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={React.Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur dark:bg-black/80' />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-gradient-to-b p-8 ring-1 from-zinc-900/50 to-zinc-900 ring-zinc-100/10'
          >
            <div className='flex flex-row-reverse items-center justify-between'>
              <Popover.Button aria-label='关闭菜单' className='-m-1 p-1'>
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='h-6 w-6 text-zinc-400'
                >
                  <path
                    d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Popover.Button>
              <h2 className='text-sm font-medium text-zinc-400'>
                {t('nav.go')}
              </h2>
            </div>
            <nav className='mt-6'>
              <ul className='-my-2 divide-y text-base divide-zinc-100/5 text-zinc-300'>
                {navigationItems.map(({ href, text }) => (
                  <MobileNavItem key={href} href={href}>
                    {t(text)}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export const NavigationBar = {
  Desktop,
  Mobile,
} as const;
