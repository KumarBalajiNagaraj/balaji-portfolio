import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Product Strategy & Vision',
    // todo: use proper thumbnail pics
    highlighter: 'Not just in words, but in action - I turn ideas into reality with a clear vision and strategy.',
    thumbnail: '/images/skills/web-development.jpg',
    description: `Driving long-term impact through product innovation and alignment. I excel at conceptualizing long-term product roadmaps, aligning business objectives with user needs, and adapting to market trends. My strength lies in transforming strategic visions into actionable initiatives that lead to tangible milestones and market success.`,
    stat: '7+ Years | 15 Products'
  },
  {
    name: 'Cross-Functional Collaboration & Leadership',
    highlighter: 'I do not just bring teams together—I inspire alignment and momentum toward shared success.',
    thumbnail: '/images/skills/ui-ux-design.jpg',
    description: `Fostering collaboration across diverse teams to drive shared success. I lead cross-functional teams with a clear focus on communication, alignment, and shared objectives. My experience working with developers, designers, stakeholders, and partners enables me to foster a culture of collaboration and innovation.`,
    stat: 'Lead 3 teams | 20+ Members'
  },
  {
    name: 'Data-Driven Decision Making',
    highlighter:"Data isn't just numbers—it's the story that shapes every product decision I make.",
    thumbnail: '/images/skills/database-management.jpg',
    description: `Turning data into actionable insights for continuous improvement.
I thrive on using data to validate ideas, iterate on solutions, and measure success. From user feedback to advanced analytics, I ensure that every product decision is informed by real-world insights.`,
    stat: 'Eats Data for Breakfast'
  },
  {
    name: 'User-Centric Design Thinking & Rapid Prototyping',
    highlighter: 'I design experiences that don’t just solve problems—they make users feel empowered.',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Designing products that are intuitive, impactful, and user-driven.
I manage the entire design process—from user stories to wireframing, prototyping, testing, and iterating. I prioritize user experience in every step of product development, ensuring that products are not only functional but delightful to use.`,
    stat: 'Designed 7 products | 100+ Features'
  },
  {
    name: 'Stakeholder & Partner Engagement',
    highlighter: 'Strong partnerships aren’t built overnight — I build trust, drive value, and foster collaboration that lasts.',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Building strong partnerships and driving stakeholder alignment.
I excel at building and nurturing relationships with stakeholders and partners. Whether managing external vendors or collaborating with internal teams, I ensure that every engagement is aligned with business objectives and user needs.`,
    stat: '1000+ Stakeholders | 20+ Partners'
  },
  {
    name: ' Execution Excellence with Agile Product Operations',
    highlighter: 'I turn complex roadmaps into seamless execution—delivering impact, iteration after iteration.',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Driving seamless product delivery through agile processes and DevOps excellence.
I am proficient in agile workflows, DevOps integrations, and managing tools like JIRA, GitHub, and Product Board. I ensure that all stages of the product lifecycle, from ideation to deployment, are optimized for efficiency and scalability.`,
    stat: '100% Delivery Rate on time'
  }
];

export { trimLen, skills };
