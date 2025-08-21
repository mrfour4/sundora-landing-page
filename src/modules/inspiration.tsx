'use client';

import { albra, sparkling } from '@/app/fonts';
import { INSPIRATION_IMG, INSPIRATION_IMG_MOBILE } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSectionObserver } from '@/hooks/use-section-observer';
import { cn } from '@/lib/utils';
import { ESectionId } from '@/types';
import Image from 'next/image';

export const Inspiration = () => {
  useSectionObserver(ESectionId.INSPIRATION);
  const isMobile = useIsMobile();

  return (
    <section
      id={ESectionId.INSPIRATION}
      className="flex h-dvh flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: isMobile
          ? `url(${INSPIRATION_IMG_MOBILE})`
          : `url(${INSPIRATION_IMG})`,
      }}
    >
      <div className="flex w-full flex-1 flex-col justify-center lg:mt-0 lg:w-auto lg:flex-row lg:items-center lg:gap-x-16">
        <div className="relative z-10 shrink-0 pb-8 pl-8">
          <Image
            src="/images_avif/inspiration-view-1.avif"
            alt="Trái tim thành phố Đà Nẵng"
            width={472}
            height={472}
            unoptimized
            className="w-[350px] shrink-0 object-cover lg:aspect-square lg:size-[450px]"
          />
          <Image
            src="/images_avif/inspiration-view-2.avif"
            alt="Trái tim thành phố Đà Nẵng"
            width={292}
            height={184}
            className="absolute -bottom-0 left-0 -z-10 object-cover"
          />
        </div>
        <div className="p-6 lg:pl-20">
          <h1
            className={cn(
              'xs:text-3xl text-2xl font-light text-sundora-primary uppercase lg:text-5xl',
              albra.className
            )}
          >
            CHẤT TINH TẾ
            {isMobile ? ' ' : <br />}
            RIÊNG NƠI
          </h1>
          <h2
            className={cn(
              'xs:text-lg mt-2 text-base text-sundora-primary-foreground lg:-translate-x-11 lg:text-xl',
              sparkling.className
            )}
          >
            Trái tim thành phố Đà Nẵng
          </h2>

          <div className="text-muted-secondary-foreground mt-6 w-full space-y-5 text-sm lg:w-md [&_p]:text-justify">
            <p>
              Giữa nhịp sống rộn ràng của thành phố trẻ, Sundora chọn cách hiện
              diện khác biệt nhẹ nhàng nhưng đủ cuốn hút để tạo dấu ấn riêng.
            </p>
            <p>
              Như một nốt ngân tuyệt đẹp nơi ánh sáng, thiên nhiên và kiến trúc
              hòa quyện để tạo nên chất sống thanh lịch cho những ai quý trọng
              sự bình yên.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
