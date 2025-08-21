import { albra } from '@/app/fonts';
import { UTILITIES_DATA } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
  activeIndex: number;
  onChange: (index: number) => void;
};

export const UtilityList = ({ activeIndex, onChange }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div className="mt-4 flex justify-between px-6 lg:ml-20 lg:px-0">
      <ul className="ml-auto flex h-[200px] flex-col justify-between lg:h-[258px] lg:w-[300px] lg:flex-1">
        {UTILITIES_DATA.map((uti, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={uti.imageUrl}
              className={cn(
                'flex w-fit cursor-pointer items-center gap-x-4 py-1 transition-transform ease-linear lg:gap-7',
                isActive &&
                  'xs:-translate-x-20 -translate-x-10 border-b-2 border-sundora-primary'
              )}
              onClick={() => onChange(index)}
            >
              <span
                className={cn(
                  'text-muted-secondary font-light opacity-40',
                  albra.className,
                  isActive &&
                    'bg-gradient-to-b from-sundora-secondary to-sundora-secondary-foreground bg-clip-text text-2xl text-transparent opacity-100'
                )}
              >
                0{index + 1}
              </span>
              <p
                className={cn(
                  'border-muted-secondary text-muted-secondary flex-1 border-b text-xs leading-loose uppercase lg:text-sm',
                  isActive &&
                    'border-none font-semibold text-sundora-secondary-foreground'
                )}
              >
                {uti.name}
              </p>
            </li>
          );
        })}
      </ul>
      <div
        className={cn(
          'invisible relative ml-auto flex h-[88px] items-center gap-x-1.5 overflow-hidden',
          isMobile && 'hidden'
        )}
      >
        <Image
          src={UTILITIES_DATA[activeIndex].imageUrl}
          alt={UTILITIES_DATA[activeIndex].name}
          width={126}
          height={88}
          className="shrink-0 object-cover"
        />
        <Image
          src={UTILITIES_DATA[activeIndex].imageUrl}
          alt={UTILITIES_DATA[activeIndex].name}
          width={126}
          height={88}
          className="shrink-0 object-cover"
        />
      </div>
    </div>
  );
};
