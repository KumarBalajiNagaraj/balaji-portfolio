'use client';
import TextReveal from '@/components/motion/text-reveal';
import React from 'react';
import Line from '@/components/motion/line';
import Image from 'next/image';

export default function About() {
  return (
    <main className="my-24 flex-1 bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[50vh] flex-col items-center justify-center bg-black px-4 py-12 text-center text-white transition-colors duration-300 dark:bg-white dark:text-black"
        id="hero"
      >
        {/* Image Banner */}
        <Image
          src="/images/about1.jpg"
          alt="Journey of Balaji Nagaraj Kumar"
          className="mb-8 rounded-lg shadow-md"
          width={800}
          height={400}
        />

        {/* Hero Content */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            <TextReveal delay={0.1}>
              Pioneering → Humanizing Data.
              <br /> Preserving → Data-driven Humanity.{' '}
            </TextReveal>
          </h1>
          <Line className="mt-16 border-white dark:border-black" />
        </div>
      </section>

      {/* Journey Section */}
      <section
        className="relative flex flex-col items-center space-y-8 border-l-4 border-gray-800 px-6 py-12 transition-colors duration-300 dark:border-gray-200 md:px-12"
        id="journey"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          My Journey
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Growing up in India, I was captivated by the power of technology to
          transform lives. This curiosity took me through rigorous academic
          pursuits and enriching professional experiences, eventually landing me
          in Sweden. Today, I am proud to leverage this global exposure to
          deliver innovative solutions as a product manager on the global stage.
        </p>
        <Image
          src="/images/journey.jpg"
          alt="Journey of Balaji Nagaraj Kumar"
          className="rounded-lg shadow-md"
          width={800}
          height={400}
        />
      </section>

      {/* Work Experience Section */}
      <section
        className="relative flex flex-col items-center space-y-8 border-r-4 border-gray-800 px-6 py-12 transition-colors duration-300 dark:border-gray-200 md:px-12"
        id="work-experience"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Work Experience
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My career spans diverse roles, from engineering to product leadership.
          In India, I honed my technical foundations, working on impactful
          projects. In Sweden, I took this expertise global, driving
          transformative initiatives at Volvo Cars, empowering teams, and
          shaping solutions for the future of mobility.
        </p>
        <Image
          src="/images/work-experience.jpg"
          alt="Work Experience"
          className="rounded-lg shadow-md"
          width={800}
          height={400}
        />
      </section>

      {/* Education Section */}
      <section
        className="relative flex flex-col items-center space-y-8 border-l-4 border-gray-800 px-6 py-12 transition-colors duration-300 dark:border-gray-200 md:px-12"
        id="education"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Education & Masters
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My academic journey began with a strong technical foundation in India,
          which laid the groundwork for advanced studies in Sweden. My masters
          degree fueled my passion for problem-solving, exposing me to global
          perspectives and advanced methodologies that continue to inspire my
          work today.
        </p>
        <Image
          src="/images/education.jpg"
          alt="Education"
          className="rounded-lg shadow-md"
          width={800}
          height={400}
        />
      </section>

      {/* Curiosity Section */}
      <section
        className="relative flex flex-col items-center space-y-8 border-r-4 border-gray-800 px-6 py-12 transition-colors duration-300 dark:border-gray-200 md:px-12"
        id="curiosity"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Driven by Curiosity
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My journey has been fueled by a relentless curiosity to understand,
          innovate, and create. Whether it’s diving into new technologies or
          unraveling complex challenges, this curiosity has been the cornerstone
          of my growth as a leader and innovator.
        </p>
        <Image
          src="/images/curiosity.jpg"
          alt="Curiosity Driven"
          className="rounded-lg shadow-md"
          width={800}
          height={400}
        />
      </section>
      {/* Quote Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter text-gray-800 dark:text-gray-200 sm:text-5xl md:text-5xl lg:text-6xl">
          Pioneering → Humanizing Data.
        </h2>
        <h2 className="text-2xl font-bold leading-tight tracking-tighter text-gray-800 dark:text-gray-200 sm:text-5xl md:text-5xl lg:text-6xl">
          Preserving → Data-driven Humanity.
        </h2>
      </div>
    </main>
  );
}
