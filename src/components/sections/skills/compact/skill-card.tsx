import React from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Badge component
import { CodeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skill } from '@/types/skill';

interface SkillCardProps extends Skill {
  className?: string;
  stat?: string; // Add a stat prop for the badge text
}

function SkillCard({ name, description, stat, highlighter, className }: SkillCardProps) {
  function formatDescription(description: string | undefined): React.ReactNode {
    if (!description) return null;

    const lines = description.split('\n'); // Split lines by newlines for proper formatting

    return (
      <>
        {lines.map((line, index) => {
          if (line.startsWith('Why it\'s critical:')) {
            return (
              <p key={index} className="font-semibold text-gray-900 dark:text-white">
                <strong>Why it&apos;s critical:</strong> {line.replace("Why it's critical:", '').trim()}
              </p>
            );
          }
          if (line.startsWith('What to emphasize:')) {
            return (
              <p key={index} className="font-semibold text-gray-900 dark:text-white">
                <strong>What to emphasize:</strong> {line.replace('What to emphasize:', '').trim()}
              </p>
            );
          }
          if (line.startsWith('Future focus:')) {
            return (
              <p key={index} className="font-semibold text-gray-900 dark:text-white">
                <strong>Future focus:</strong> {line.replace('Future focus:', '').trim()}
              </p>
            );
          }
          return (
            <p key={index} className="text-sm text-gray-500 dark:text-gray-400">
              {line}
            </p>
          );
        })}
      </>
    );
  }

  return (
    <Card className={cn('bg-muted/40', className)}>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-4">
          <CodeIcon className="min-w-8 min-h-8" />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {name}
              {stat && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  {stat}
                </Badge>
              )}
            </h3>
            {highlighter && (
              <p className="italic text-gray-600 dark:text-gray-300 border-l-4 pl-4 border-zinc-500">
                {highlighter}
              </p>
            )}
            <div className="mt-2">{description}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
