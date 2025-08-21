import { Icons } from '@/components/icons';
import { GROUNDS_DATA } from '@/constants';
import { cn } from '@/lib/utils';

type Props = {
  activeIndex: number;
  onChange: (index: number) => void;
};

export const GroupList = ({ activeIndex, onChange }: Props) => {
  return (
    <ul className="mt-5 inline-flex h-[250px] flex-col space-y-4 lg:mt-8 lg:h-[300px]">
      {GROUNDS_DATA.map((ground, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={index}
            className={cn(
              'xs:text-lg flex cursor-pointer items-center gap-x-3 border-b pb-1 text-sm text-[#C5B9A6]/50 transition-all',
              isActive &&
                'border-b-2 border-b-sundora-primary font-semibold text-sundora-secondary-foreground opacity-100'
            )}
            onClick={() => onChange(index)}
          >
            {ground.name}
            <Icons.arrowLeft className="ml-auto rotate-180" />
          </li>
        );
      })}
    </ul>
  );
};
