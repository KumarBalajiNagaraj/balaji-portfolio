'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';
import ParallaxImage from '@/components/motion/parallax-image';

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      {/* Text Section */}
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh] flex flex-col justify-center items-center">
        <div className="flex w-full flex-col items-center justify-center px-4 md:px-6 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Human | Product | Designer | Developer | Innovator | Leader <br />
            </p>
          </Reveal>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <TextReveal>Hi, I'm <br /> Balaji Nagaraj Kumar</TextReveal>
          </h1>
          <Reveal>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore my portfolio—where drive, insight, and bold innovation powering my future.
            </p>
          </Reveal>
        </div>
      </div>
      {/* 
      
      <div className="relative flex justify-center items-center mt-1 lg:mt-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg max-w-md w-full"
        >
          <Image
            src="/images/Hero.png" // Replace with your profile image
            alt="Profile Image"
            width={500}
            height={500}
            className="object-cover w-full h-auto rounded-xl"
          />
        </motion.div>
      </div> */}

      {/* Parallax Background Image */}
      <ParallaxImage
        src="/images/Hero.png" // Replace with your decorative image
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-[3/2] mx-auto max-w-2/3 w-[70%] md:w-[80%] lg:w-[70%]"
        priority
        parallaxOptions={{
          yStart: '-20%',
          yEnd: '20%',
          scaleStart: 1,
          scaleEnd: 1.7 // Subtle parallax scaling
        }}
      />
    </section>
  );
}

export default Hero;
