'use client';

import { albra } from '@/app/fonts';
import { Icons } from '@/components/icons';
import { VRButton } from '@/components/vr-button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSectionObserver } from '@/hooks/use-section-observer';
import { cn } from '@/lib/utils';
import { ESectionId } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const Library = () => {
  useSectionObserver(ESectionId.LIBRARY);
  const isMobile = useIsMobile();

  return (
    <section
      id={ESectionId.LIBRARY}
      className="flex h-dvh bg-sundora-accent-foreground pt-20 pb-6 lg:items-center lg:gap-x-32 lg:pt-10"
    >
      <div className="mt-10 w-full lg:w-auto">
        {isMobile && (
          <div className="mb-9 flex flex-col items-center gap-y-3">
            <h1
              className={cn(
                'text-4xl font-light text-white uppercase',
                albra.className
              )}
            >
              thư viện
            </h1>

            <VRButton showDetail />
          </div>
        )}
        <Image
          src="/images_avif/library-1.avif"
          alt="Hình ảnh dự án"
          width={385}
          height={371}
          className="w-full shrink-0 object-cover lg:w-auto"
        />
        <div className="flex h-14 items-center bg-gradient-to-b from-sundora-secondary-foreground to-sundora-secondary pl-8">
          <p className="text-sm font-semibold text-sundora-primary">
            Hình ảnh dự án
          </p>
        </div>

        {isMobile && (
          <div className="mt-6 flex items-baseline justify-center gap-x-2.5">
            <Icons.arrowLeft className="text-sundora-secondary-foreground" />
            <div
              className={cn(
                'inline-flex items-baseline gap-x-1 text-sundora-secondary',
                albra.className
              )}
            >
              <span className="text-2xl text-white">01</span>
              <span>/</span>
              <span>02</span>
            </div>
            <Icons.arrowLeft className="rotate-180 text-sundora-secondary" />
          </div>
        )}
      </div>
      <div className={cn(isMobile && 'hidden')}>
        <div className="flex items-center gap-8">
          <h1
            className={cn(
              'text-5xl font-light text-white uppercase',
              albra.className
            )}
          >
            thư viện
          </h1>

          <VRButton showDetail />
        </div>
        <div className="mt-10 flex gap-x-24">
          <div>
            <Link href="#!" className="relative">
              <Image
                src="/images_avif/library-2.avif"
                alt="Video dự án"
                width={336}
                height={243}
              />
              <Icons.play className="absolute top-1/2 left-1/2 size-12 -translate-1/2" />
            </Link>
            <p className="mt-4 text-sm font-medium text-white">Video dự án</p>
          </div>
          <div className="translate-y-24">
            <Link href="#!">
              <Image
                src="/images_avif/library-3.avif"
                alt="Tài liệu & CSBH"
                width={336}
                height={243}
              />
            </Link>
            <p className="mt-4 text-sm font-medium text-white">
              Tài liệu & CSBH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
