import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  logo,
  className
}: ExperienceCardProps) {
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            {logo && (
              <Image
                src={logo}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <h3 className="text-3xl font-semibold">
              <TextReveal>{company}</TextReveal>
            </h3>
          </div>
          <span className="text-sm font-medium">
            <TextReveal>{duration}</TextReveal>
          </span>
        </div>
        <h4 className="mt-2 text-xl font-medium uppercase">
          <TextReveal>{name}</TextReveal>
        </h4>
        <p className="mt-2 text-zinc-700 dark:text-zinc-400 max-w-2xl text-lg font-light">
          <TextReveal>{description}</TextReveal>
        </p>
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
