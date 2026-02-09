export interface CourseConfig {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface BenefitConfig {
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    background: string;
    backgroundAlt: string;
    text: string;
    textLight: string;
  };
  hero: {
    headline: string;
    subline: string;
    ctaText: string;
    ctaHref: string;
  };
  courses: CourseConfig[];
  benefits: BenefitConfig[];
  cta: {
    headline: string;
    subline: string;
    buttonText: string;
    buttonHref: string;
  };
  footer: {
    copyright: string;
    email: string;
    phone: string;
    address: string;
  };
  nav: {
    links: { label: string; href: string }[];
    ctaText: string;
    ctaHref: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Forward Education",
  tagline: "Weiterbildung. Weiterkommen.",

  colors: {
    primary: "#3B82F6",
    primaryLight: "#DBEAFE",
    primaryDark: "#1E40AF",
    accent: "#1D4ED8",
    background: "#FFFFFF",
    backgroundAlt: "#F8FAFC",
    text: "#1E293B",
    textLight: "#64748B",
  },

  hero: {
    headline: "Deine Zukunft beginnt hier.",
    subline:
      "Starte jetzt deine Weiterbildung in den gefragtesten Bereichen der digitalen Welt: Künstliche Intelligenz, IT-Sales und Projektmanagement – praxisnah, zertifiziert und bis zu 100\u00A0% förderbar.",
    ctaText: "Jetzt kostenlos beraten lassen",
    ctaHref: "#kontakt",
  },

  courses: [
    {
      title: "Künstliche Intelligenz",
      description:
        "Lerne die Grundlagen und Anwendung von KI, Machine Learning und Prompt Engineering – und werde fit für die Arbeitswelt von morgen.",
      icon: "brain",
      highlights: ["Machine Learning", "Prompt Engineering", "KI-Anwendungen"],
    },
    {
      title: "IT-Sales",
      description:
        "Verkaufe IT-Lösungen und Dienstleistungen erfolgreich. Lerne Vertriebsstrategien, technisches Verständnis und Kundenberatung – für eine Karriere im IT-Vertrieb.",
      icon: "sales",
      highlights: ["Vertriebsstrategien", "Technische Beratung", "Kundenakquise"],
    },
    {
      title: "Projektmanagement",
      description:
        "Führe Projekte zum Erfolg – mit agilen und klassischen Methoden. Ideal für den Einstieg oder die Vertiefung deiner PM-Kompetenzen.",
      icon: "target",
      highlights: ["Agiles PM (Scrum)", "Klassisches PM", "Führungskompetenzen"],
    },
  ],

  benefits: [
    {
      title: "100\u00A0% förderbar",
      description: "Unsere Kurse sind AZAV-zertifiziert – die Kosten übernimmt die Agentur für Arbeit oder das Jobcenter.",
      icon: "piggybank",
    },
    {
      title: "Praxisnahe Inhalte",
      description: "Lerne anhand realer Projekte und Case Studies, die dich auf den Berufsalltag vorbereiten.",
      icon: "briefcase",
    },
    {
      title: "Flexible Lernzeiten",
      description: "Online und in Präsenz – gestalte deine Weiterbildung flexibel nach deinem Zeitplan.",
      icon: "clock",
    },
    {
      title: "Erfahrene Dozent:innen",
      description: "Unsere Trainer:innen kommen direkt aus der Praxis und bringen jahrelange Branchenerfahrung mit.",
      icon: "users",
    },
    {
      title: "Kleine Lerngruppen",
      description: "Individuelle Betreuung in kleinen Gruppen für maximalen Lernerfolg.",
      icon: "usergroup",
    },
    {
      title: "Karriereberatung",
      description: "Wir unterstützen dich auch nach dem Kurs – mit Bewerbungscoaching und Karriereplanung.",
      icon: "rocket",
    },
  ],

  cta: {
    headline: "Bereit für den nächsten Schritt?",
    subline:
      "Vereinbare jetzt ein kostenloses Beratungsgespräch und finde die passende Weiterbildung für deine Zukunft.",
    buttonText: "Jetzt Beratungstermin vereinbaren",
    buttonHref: "#kontakt",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Forward Education. Alle Rechte vorbehalten.`,
    email: "info@forward-education.de",
    phone: "+49 (0) 30 123 456 78",
    address: "Musterstraße 1, 10115 Berlin",
  },

  nav: {
    links: [
      { label: "Kurse", href: "#kurse" },
      { label: "Vorteile", href: "#vorteile" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    ctaText: "Jetzt beraten lassen",
    ctaHref: "#kontakt",
  },
};
