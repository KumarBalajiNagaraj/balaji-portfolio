/* eslint-disable react/jsx-key */
import React from 'react';
import Link from '@/components/motion/link'; import { metadata as meta } from '@/app/config';

import { footer } from '@/components/sections/footer/config';

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 {meta.author.name}. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <div className="text-xs underline-offset-4 hover:underline">
              <Link
                href={href}
                key={`l_${index}`}
              >
                {title}
              </Link>
            </div>

          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
