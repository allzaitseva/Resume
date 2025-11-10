/** @format */

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'cs';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.projects': 'projects',
    'nav.skills': 'skills',
    'nav.about': 'about me',
    'nav.contact': 'contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role': 'full-stack developer',
    'hero.description': 'passionate about crafting clean and responsive interfaces.',
    'hero.contact': 'Contact me',

    // Projects
    'projects.title': 'projects',
    'projects.viewAll': 'View all',
    'projects.taxi.description': 'Next.js, React, Vite, JavaScript, Tailwind CSS, C#, SQLite',
    'projects.burger.description': 'React, Vite, JavaScript, Tailwind CSS, Redux Toolkit',
    'projects.live': 'Live',
    'projects.github': 'GitHub',

    // Skills
    'skills.title': 'skills',
    'skills.frontend': 'Frontend',
    'skills.frontend.list': 'TypeScript, JavaScript (ES6+), React, HTML5/CSS3, Tailwind CSS, Redux Toolkit',
    'skills.tools': 'Tools & Build',
    'skills.tools.list': 'Vite, Git/GitHub, npm/Node.js, PostCSS, Netlify, Docker',
    'skills.design': 'Design & UI',
    'skills.design.list': 'Figma, Photoshop, Procreate, After Effects',
    'skills.backend': 'Backend',
    'skills.backend.list': 'C#, .NET, SQL, SQLite, Entity Framework, REST API',

    // Education
    'education.title': 'education',
    'education.university': 'Czech University of Life Sciences, Prague',
    'education.degree': "Bachelor's Degree in Informatics",
    'education.years': '2022 - present',

    // About
    'about.title': 'about me',
    'about.p1': "Hi, I'm Olena Zaitseva, a full-stack developer based in Prague.",
    'about.p2': 'For a long time, I worked as a digital artist, drawing on my tablet and creating illustrations.',
    'about.p3': 'But deep down, I was fascinated by how technology works, how a blank page in a browser can become something alive and interactive.',
    'about.p4': "That's how I found front-end development. It lets me combine both sides of myself - creativity and logic - and turn ideas into living, functional designs on the web.",
    'about.p5': 'I genuinely enjoy every step of the process: from a first idea to a finished website that feels clean, thoughtful, and alive.',

    // Contact
    'contact.title': 'contact',
    'contact.copied': '✓ Copied!',

    // Footer
    'footer.made': 'Made by Olena Zaitseva',
  },
  cs: {
    // Navbar
    'nav.projects': 'projekty',
    'nav.skills': 'dovednosti',
    'nav.about': 'o mně',
    'nav.contact': 'kontakt',

    // Hero
    'hero.greeting': 'Ahoj, jsem',
    'hero.role': 'full-stack vývojářka',
    'hero.description': 'která s vášní vytváří čisté a responzivní rozhraní.',
    'hero.contact': 'Kontakt',

    // Projects
    'projects.title': 'projekty',
    'projects.viewAll': 'Zobrazit vše',
    'projects.taxi.description': 'Next.js, React, Vite, JavaScript, Tailwind CSS, C#, SQLite',
    'projects.burger.description': 'React, Vite, JavaScript, Tailwind CSS, Redux Toolkit',
    'projects.live': 'Živě',
    'projects.github': 'GitHub',

    // Skills
    'skills.title': 'dovednosti',
    'skills.frontend': 'Frontend',
    'skills.frontend.list': 'TypeScript, JavaScript (ES6+), React, HTML5/CSS3, Tailwind CSS, Redux Toolkit',
    'skills.tools': 'Nástroje & Build',
    'skills.tools.list': 'Vite, Git/GitHub, npm/Node.js, PostCSS, Netlify, Docker',
    'skills.design': 'Design & UI',
    'skills.design.list': 'Figma, Photoshop, Procreate, After Effects',
    'skills.backend': 'Backend',
    'skills.backend.list': 'C#, .NET, SQL, SQLite, Entity Framework, REST API',

    // Education
    'education.title': 'vzdělání',
    'education.university': 'Česká zemědělská univerzita v Praze',
    'education.degree': 'Bakalářský titul v oboru Informatika',
    'education.years': '2022 - současnost',

    // About
    'about.title': 'o mně',
    'about.p1': 'Ahoj, jsem Olena Zaitseva, full-stack vývojářka z Prahy.',
    'about.p2': 'Dlouhou dobu jsem pracovala jako digitální umělkyně, kreslila jsem na tabletu a vytvářela ilustrace.',
    'about.p3': 'Ale hluboko uvnitř mě fascinovalo, jak funguje technologie, jak se z prázdné stránky v prohlížeči může stát něco živého a interaktivního.',
    'about.p4': 'Tak jsem našla front-end development. Umožňuje mi spojit obě mé stránky - kreativitu a logiku a přeměnit nápady na živé, funkční designy na webu.',
    'about.p5': 'Opravdu si užívám každý krok procesu: od prvního nápadu po hotovou webovou stránku, která vypadá čistě, promyšleně a živě.',

    // Contact
    'contact.title': 'kontakt',
    'contact.copied': '✓ Zkopírováno!',

    // Footer
    'footer.made': 'Vytvořila Olena Zaitseva',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
