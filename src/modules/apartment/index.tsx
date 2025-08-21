'use client';

import { albra, sparkling } from '@/app/fonts';
import { useSectionObserver } from '@/hooks/use-section-observer';
import { cn } from '@/lib/utils';
import { ESectionId } from '@/types';
import { ApartmentList } from './apartment-list';

export const Apartment = () => {
  useSectionObserver(ESectionId.APARTMENT);

  return (
    <section
      id={ESectionId.APARTMENT}
      className="relative flex h-dvh flex-col justify-center gap-x-20 pt-20 lg:flex-row lg:items-center lg:pt-0"
    >
      <div className="text-center lg:-translate-y-8">
        <h2
          className={cn(
            'text-lg text-sundora-primary-foreground lg:text-xl',
            sparkling.className
          )}
        >
          Bộ sưu tập giới hạn
        </h2>
        <div className="mt-3 flex items-center justify-center text-center uppercase">
          <p className="-rotate-90 text-xs leading-6 tracking-widest text-sundora-secondary-foreground lg:text-sm">
            chỉ
          </p>
          <h1
            className={cn(
              'text-4xl font-light text-sundora-primary lg:text-5xl',
              albra.className
            )}
          >
            236 căn hộ
          </h1>
        </div>
      </div>
      <ApartmentList />
    </section>
  );
};
