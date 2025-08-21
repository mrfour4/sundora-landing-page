import { GROUND_FLOORS } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const FloorTabs = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="relative mx-auto mt-3 w-fit border-b border-sundora-secondary">
      <div className="flex justify-between">
        {GROUND_FLOORS.map((floor, index) => (
          <div
            key={index}
            ref={(el) => void (tabRefs.current[index] = el)}
            className={cn(
              'cursor-pointer px-4 py-2 text-[10px] transition-colors duration-300',
              index === activeIndex
                ? 'font-bold text-sundora-secondary-foreground'
                : 'text-sundora-secondary'
            )}
            onClick={() => setActiveIndex(index)}
          >
            {floor}
          </div>
        ))}
      </div>

      <motion.div
        className="absolute bottom-0 h-[3px] translate-y-0.5 rounded-md bg-sundora-primary"
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        animate={underlineStyle}
        style={{
          position: 'absolute',
        }}
      />
    </div>
  );
};
