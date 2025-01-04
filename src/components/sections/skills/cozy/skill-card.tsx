import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer
} from '@/components/motion/dialog';
import { PlusIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge'; // Import the badge
import { Skill } from '@/types/skill';

import { trimLen } from '@/components/sections/skills/config';
import { cn, trimString } from '@/lib/utils';

import { MemoizedReactMarkdown } from '@/components/markdown';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import TextReveal from '@/components/motion/text-reveal';

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
}

export default function SkillCard({
  name,
  description,
  thumbnail,
  stat,
  highlighter,
  className
}: SkillCardProps) {
  function formatDescription(description: string | undefined): string | null | undefined {
    if (!description) return description;
    return description
      .replace(/Why it's critical:/g, '**Why it\'s critical:**') // Bold headings
      .replace(/What to emphasize:/g, '**What to emphasize:**')
      .replace(/Future focus:/g, '**Future focus:**')
      .replace(/\n/g, '\n\n'); // Double line breaks for paragraph spacing
  }
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px'
        }}
        className={cn(
          'flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900',
          className
        )}
      >
        <div className="flex flex-grow flex-col items-end justify-between gap-4 p-6">
          <button
            type="button"
            className="relative ml-1 flex h-10 w-10 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-full border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={18} />
          </button>
          <div className="flex w-full flex-col gap-2">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-3xl font-bold leading-8 tracking-tight text-zinc-950 dark:text-zinc-50">
                <TextReveal>{name}</TextReveal>
              </DialogTitle>
              {stat && (
                <Badge variant="secondary" className="px-3 py-1 text-xs">
                  {stat}
                </Badge>
              )}
            </div>
            <DialogSubtitle className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400">
              <TextReveal>
                {trimLen != -1
                  ? trimString(trimLen, description || '')
                  : description ?? ''}
              </TextReveal>
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px'
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          {thumbnail && (
            <DialogImage
              src={thumbnail}
              alt={`An image which depicts the skill (${name})`}
              className="h-full w-full"
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 }
              }}
            />
          )}
          <div className="flex flex-col p-6 gap-2">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-3xl font-bold leading-8 tracking-tight text-zinc-950 dark:text-zinc-50">
                {name}
              </DialogTitle>
              {stat && (
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {stat}
                </Badge>
              )}
            </div>
            {highlighter && (
              <p className="italic text-lg text-zinc-600 dark:text-zinc-300 border-l-4 pl-4 border-zinc-500">
                {highlighter}
              </p>
            )}
            <DialogDescription
              className="text-md text-muted-foreground text-zinc-700 dark:text-zinc-400"
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 }
              }}
            >
              <MemoizedReactMarkdown
                className="prose min-w-full break-words text-muted-foreground dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({ children }) {
                    return <p className="mb-4 last:mb-0">{children}</p>;
                  }
                }}
              >
                {description}
              </MemoizedReactMarkdown>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
