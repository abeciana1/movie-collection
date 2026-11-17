'use client';
import { useCallback, useRef, useState, type ReactNode } from 'react';
import useMeasure from 'react-use-measure';
import { AnimatePresence, motion, MotionConfig, type Transition } from 'motion/react';
import { cn } from '@/lib/utils';
import useClickOutside from "@/hooks/useClickOutside"
import { House, Bookmark, Database, LayoutGrid } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const transition: Transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.25,
};

// A link navigates (has `href`); a button expands the panel (has `content`).
type NavItem = { id: number; label: string; icon: ReactNode } & (
  | { href: string }
  | { content: ReactNode }
);

const ITEMS: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    icon: <House size={28} />,
    href: '/home',
  },
  {
    id: 2,
    label: 'Watchlist',
    icon: <Bookmark size={28} />,
    href: '/watchlist',
  },
  {
    id: 3,
    label: 'Collection',
    icon: <Database size={28} />,
    href: '/collection',
  },
  {
    id: 4,
    label: 'Browse',
    icon: <LayoutGrid size={28} />,
    content: (
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col text-zinc-700'>
          <span>Current Balance</span>
          <span>$1,250.32</span>
        </div>
        <button
          className='relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]'
          type='button'
        >
          View Transactions
        </button>
      </div>
    ),
  },
];

// Each item takes an equal share of the bar (flex-1) so the whole cell is the tap target.
const itemClasses =
  'relative flex flex-1 flex-col items-center justify-center gap-1 py-2 scale-100 select-none appearance-none rounded-lg text-foreground transition-colors focus-visible:ring-2 active:scale-[0.98]';
// Active = accent color + solid icon (fill-current fills the svg with the text color).
const activeClasses = 'text-orange-600 [&_svg]:fill-current';

export function MobileNavigation () {
  const pathname = usePathname();
  const [active, setActive] = useState<number | null>(null);
  const [contentRef, { height: heightContent }] = useMeasure();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closePanel = useCallback(() => {
    setIsOpen(false);
    setActive(null);
  }, []);

  useClickOutside(ref, closePanel);

  // Links: derived from the URL. Buttons: derived from which panel is open.
  const isActive = (item: NavItem) =>
    'href' in item
      ? pathname === item.href || pathname.startsWith(`${item.href}/`)
      : active === item.id;

  const toggleItem = (id: number) => {
    if (active === id) {
      closePanel();
      return;
    }

    setIsOpen(true);
    setActive(id);
  };

  return (
    <MotionConfig transition={transition}>
      <div className='sticky inset-x-0 bottom-0' ref={ref}>
        <div className='h-full w-full border-t-2 border-t-foreground bg-background'>
          <div className='overflow-hidden'>
            <AnimatePresence initial={false} mode='sync'>
              {isOpen ? (
                <motion.div
                  key='content'
                  initial={{ height: 0 }}
                  animate={{ height: heightContent || 0 }}
                  exit={{ height: 0 }}
                >
                  <div ref={contentRef} className='p-2'>
                    {ITEMS.map((item) => {
                      // Links have no panel content
                      if (!('content' in item)) return null;

                      const isSelected = active === item.id;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isSelected ? 1 : 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <div
                            className={cn(
                              'px-2 pt-2 text-sm',
                              isSelected ? 'block' : 'hidden'
                            )}
                          >
                            {item.content}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className='flex'>
            {ITEMS.map((item) =>
              'href' in item ? (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
                  aria-current={isActive(item) ? 'page' : undefined}
                  className={cn(itemClasses, isActive(item) && activeClasses)}
                  onClick={closePanel}
                >
                  {item.icon}
                  <span className='text-xs font-medium'>{item.label}</span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  aria-label={item.label}
                  aria-expanded={active === item.id}
                  className={cn(itemClasses, isActive(item) && activeClasses)}
                  type='button'
                  onClick={() => toggleItem(item.id)}
                >
                  {item.icon}
                  <span className='text-xs font-medium'>{item.label}</span>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}