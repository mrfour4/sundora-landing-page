'use client';

import { useIsSecondary } from '@/hooks/use-is-secondary';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from './sundora/button';

export const CallButton = () => {
  const isSecondary = useIsSecondary();

  return (
    <Button
      className="gap-1 rounded-full px-3 py-1 lg:px-4 lg:py-1.5"
      asChild
      variant={isSecondary ? 'secondary' : 'default'}
    >
      <Link href="tel:0984868463">
        <Phone className="size-3!" />
        <span
          className={cn(
            'bg-gradient-to-r from-sundora-secondary to-sundora-secondary-foreground bg-clip-text text-xs font-bold tracking-wider text-transparent lg:text-sm',
            isSecondary && 'text-sundora-primary'
          )}
        >
          0984 868 463
        </span>
      </Link>
    </Button>
  );
};
