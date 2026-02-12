export interface CourseConfig {
  slug: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  /** Franklin-API Kurs-UUID für getCourse (optional) */
  apiCourseId?: string;
  /** Mehrere Franklin-Kurs-IDs – alle API-Titel werden für die Suche genutzt (z. B. „Geschäftsmodelle Unternehmen - Kompetenzen“) */
  apiCourseIds?: string[];
  /** Zusätzliche Begriffe für Such-Matching (größte Überschneidung) */
  searchKeywords?: string[];
}

/** Detailseite eines Kurses (Dummy – später aus DB) */
export interface CourseDetailConfig {
  features: string[]; // z. B. "MacBook inklusive", "Bequem von zuhause aus lernen"
  rating: string;
  reviewCount: string;
  contentSections: { title: string; items: string[] }[];
  faq: FaqItemConfig[];
  /** Optionales Hero-Bild (z. B. /asian.png), Fallback: /asian+black.png */
  heroImage?: string;
}

export interface BenefitConfig {
  title: string;
  description: string;
  icon: string;
}

export interface CourseTopicConfig {
  label: string;
  href: string;
  icon: string;
}

export interface TrustStatsConfig {
  value: string;
  label: string;
}

export interface FaqItemConfig {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  /** Rechtliche Bezeichnung, z. B. für Impressum */
  companyLegalName: string;
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
    address: string;
  };
  legal: {
    /** Angaben gemäß § 5 TMG – Geschäftsführer / Vertreten durch */
    responsiblePerson: string;
    /** Inhaltlich verantwortlich gem. § 55 RStV */
    contentResponsible: string;
    /** z. B. Amtsgericht München */
    registerCourt: string;
    /** Registernummer */
    registerNumber: string;
    /** USt-IdNr. (optional) */
    vatId?: string;
  };
  nav: {
    links: { label: string; href: string }[];
    ctaText: string;
    ctaHref: string;
  };
  /** Themen-Kacheln für Kursfinder (Above the fold) */
  courseTopics: CourseTopicConfig[];
  /** Trust: Zertifikate, Awards, Kennzahlen */
  trust: {
    certificates: string[];
    awards: { name: string; subtitle?: string }[];
    stats: TrustStatsConfig[];
  };
  /** FAQ für Accordion */
  faq: FaqItemConfig[];
  /** Page-Logs an Google Sheet (brand für page_logs-Sheet) */
  tracking?: { brand: string };
}

/** Link für Bewerbung / Beratung (Typeform Kurzbewerbung) */
const APPLICATION_FORM_URL = "https://form.typeform.com/to/APjxbSz0";

export const siteConfig: SiteConfig = {
  name: "Forward Education",
  companyLegalName: "Forward Education GmbH",
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
      "Starte jetzt deine Weiterbildung in den gefragtesten Bereichen der digitalen Welt: Künstliche Intelligenz, Sales und Projektmanagement – praxisnah, zertifiziert.",
    ctaText: "Jetzt kostenlos beraten lassen",
    ctaHref: APPLICATION_FORM_URL,
  },

  courses: [
    {
      slug: "kuenstliche-intelligenz",
      title: "Künstliche Intelligenz",
      description:
        "Lerne die Grundlagen und Anwendung von KI, Machine Learning und Prompt Engineering – und werde fit für die Arbeitswelt von morgen.",
      icon: "brain",
      highlights: ["Machine Learning", "Prompt Engineering", "KI-Anwendungen"],
      searchKeywords: ["KI", "künstliche intelligenz", "machine learning", "prompt engineering", "AI", "Automatisierung", "AI & Automatisierung"],
    },
    {
      slug: "it-sales",
      title: "Sales",
      description:
        "Verkaufe IT-Lösungen und Dienstleistungen erfolgreich. Lerne Vertriebsstrategien, technisches Verständnis und Kundenberatung – für eine Karriere im IT-Vertrieb.",
      icon: "sales",
      highlights: ["Vertriebsstrategien", "Technische Beratung", "Kundenakquise"],
      searchKeywords: ["Sales", "IT-Sales", "Vertrieb", "Verkauf", "IT Vertrieb", "IT-Vertriebsmanager", "CRM", "CRM Spezialist", "Performance Marketing", "Google Ads"],
      apiCourseIds: [], // Franklin-UUID(s) eintragen, z. B. für „Geschäftsmodelle Unternehmen - Kompetenzen“, damit die Suche exakt mit API-Titeln vergleicht
    },
    {
      slug: "projektmanagement",
      title: "Projektmanagement",
      description:
        "Führe Projekte zum Erfolg – mit agilen und klassischen Methoden. Ideal für den Einstieg oder die Vertiefung deiner PM-Kompetenzen.",
      icon: "target",
      highlights: ["Agiles PM (Scrum)", "Klassisches PM", "Führungskompetenzen"],
      apiCourseId: "e5ca46a1-b606-42b6-834c-23b2ead2f6d2",
      searchKeywords: ["Projektmanagement", "PM", "Agile", "Scrum", "Produktmanagement", "IT-Berater", "Software-Berater", "Cybersecurity"],
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
    buttonHref: APPLICATION_FORM_URL,
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Forward Education GmbH. Alle Rechte vorbehalten.`,
    email: "lorenz.franz@forward-education.de",
    address: "Stefan-George-Ring 2, 81929 München",
  },

  legal: {
    responsiblePerson: "Johannes Burzin, Lorenz Franz",
    contentResponsible: "Johannes Burzin",
    registerCourt: "Amtsgericht München",
    registerNumber: "HRB 290423",
  },

  nav: {
    links: [
      { label: "Kurse", href: "/#kurs-finder" },
      { label: "Vorteile", href: "/#vorteile" },
      { label: "FAQ", href: "/#faq" },
      { label: "Kontakt", href: "/#kontakt" },
    ],
    ctaText: "Jetzt beraten lassen",
    ctaHref: APPLICATION_FORM_URL,
  },
  courseTopics: [
    { label: "AI & Automatisierung", href: "/kurse/kuenstliche-intelligenz", icon: "brand-openai" },
    { label: "IT-Vertriebsmanager", href: "/kurse/it-sales", icon: "briefcase" },
    { label: "CRM Spezialist", href: "/kurse/it-sales", icon: "database" },
    { label: "Performance Marketing", href: "/kurse/it-sales", icon: "brand-meta" },
    { label: "Cybersecurity", href: "/kurse/projektmanagement", icon: "shield-lock" },
    { label: "IT-Sales", href: "/kurse/it-sales", icon: "users-group" },
  ],
  trust: {
    certificates: [],
    awards: [],
    stats: [
      { value: "100 %", label: "förderbar" },
      { value: "95 %", label: "Erfolgsquote" },
      { value: "24 h", label: "Antwort garantiert" },
    ],
  },
  faq: [
    {
      question: "Wer übernimmt die Kosten für die Weiterbildung?",
      answer:
        "Unsere Kurse sind AZAV-zertifiziert. Bei Berechtigung übernehmen die Agentur für Arbeit oder das Jobcenter die Kosten zu 100 % über den Bildungsgutschein. Wir beraten Sie gerne zu Ihren Fördermöglichkeiten.",
    },
    {
      question: "Kann ich online von zu Hause aus lernen?",
      answer:
        "Ja. Wir bieten hybrides Lernen an: im virtuellen Klassenzimmer von zu Hause oder in Präsenz an unserem Standort in München. So können Sie flexibel nach Ihrem Zeitplan lernen.",
    },
    {
      question: "Wie läuft die kostenlose Beratung ab?",
      answer:
        "Ganz einfach: Klicken Sie auf „Jetzt beraten lassen“ und schreiben Sie uns. Per E-Mail oder über den Kontaktbereich auf dieser Seite teilen Sie uns mit, worum es geht – ohne Telefonnummer oder Anruf. Wir melden uns zeitnah bei Ihnen, prüfen Ihre Voraussetzungen, klären Fördermöglichkeiten und finden den passenden Kurs. Die Beratung ist kostenlos und unverbindlich.",
    },
    {
      question: "Für wen sind die Kurse geeignet?",
      answer:
        "Unsere Weiterbildungen richten sich an Berufseinsteiger:innen, Quereinsteiger:innen und Berufstätige, die sich in den Bereichen KI, Sales oder Projektmanagement qualifizieren möchten. Vorkenntnisse sind je nach Kurs unterschiedlich – wir beraten Sie gerne.",
    },
  ],
  tracking: { brand: "meinnow" },
};

/** Dummy-Daten für Kursdetailseiten (später aus Datenbank) */
export const courseDetailsBySlug: Record<string, CourseDetailConfig> = {
  "kuenstliche-intelligenz": {
    features: [
      "MacBook inklusive",
      "Bequem von zuhause aus lernen",
      "Optimal für Quereinsteiger:innen",
    ],
    rating: "4,9",
    reviewCount: "315+",
    contentSections: [
      {
        title: "Grundlagen künstliche Intelligenz",
        items: [
          "Einführung in künstliche Intelligenz: Definition, Geschichte und aktuelle Entwicklungen",
          "Unterschied zwischen enger und allgemeiner KI",
          "Anwendungsbereiche von KI in Wirtschaft und Gesellschaft",
          "Technologische Grundlagen: Algorithmen, Daten und Rechenleistung",
          "Überblick über die wichtigsten KI-Frameworks und Plattformen",
          "Rechtliche und regulatorische Rahmenbedingungen für den KI-Einsatz",
          "Zukunftsperspektiven und Trends der künstlichen Intelligenz",
        ],
      },
      {
        title: "Machine Learning – Theorie und Praxis",
        items: [
          "Einführung in maschinelles Lernen: überwachtes, unüberwachtes und bestärkendes Lernen",
          "Datenvorbereitung, -bereinigung und Feature-Engineering",
          "Trainingsdaten: Qualität, Bias und Datenschutz",
          "Klassische Algorithmen: lineare Regression, Entscheidungsbäume, Random Forest",
          "Neuronale Netze: Aufbau, Schichten und Aktivierungsfunktionen",
          "Deep Learning: Convolutional Neural Networks (CNN) und Recurrent Neural Networks (RNN)",
          "Modellvalidierung, Hyperparameter-Tuning und Evaluation",
          "Deployment von ML-Modellen in Produktionsumgebungen",
          "Best Practices für reproduzierbares Machine Learning",
        ],
      },
      {
        title: "Large Language Models & Natural Language Processing",
        items: [
          "Einführung in Natural Language Processing (NLP)",
          "Architektur von Large Language Models (LLM) wie GPT, Claude, Llama",
          "Tokenisierung und Embeddings",
          "Context Windows und Limitationen von LLMs",
          "RAG (Retrieval-Augmented Generation): externe Wissensquellen einbinden",
          "Fine-Tuning vs. Prompting: wann welche Methode nutzen",
          "Multimodale Modelle: Text, Bild, Audio und Video",
          "Open Source vs. kommerzielle LLM-Anbieter",
        ],
      },
      {
        title: "Prompt Engineering – effektive Nutzung von LLMs",
        items: [
          "Grundprinzipien des Prompt Engineering",
          "Zero-Shot, Few-Shot und Chain-of-Thought Prompting",
          "System-Prompts und Rollen definieren",
          "Strukturierte Outputs: JSON, Markdown, Listen",
          "Problemlösung bei Halluzinationen und Fehlausgaben",
          "Iteratives Verfeinern von Prompts",
          "Prompt-Templates für wiederkehrende Aufgaben",
          "Tools und Best Practices für produktives Arbeiten mit KI-Assistenten",
          "Evaluation und Qualitätssicherung von Prompts",
        ],
      },
      {
        title: "KI im Geschäftsalltag – Anwendungen",
        items: [
          "KI für Dokumentenanalyse und -auswertung",
          "Automatisierung von Kundenkommunikation (Chatbots, E-Mail-Assistenten)",
          "Content-Erstellung und Redaktion mit KI",
          "KI-gestützte Recherche und Wissensmanagement",
          "Code-Generierung und Software-Entwicklung mit KI",
          "KI für Datenanalyse, Reporting und Business Intelligence",
          "Personalisierung und Empfehlungssysteme",
          "Workflow-Automatisierung mit KI-Tools (z. B. Zapier, Make, n8n)",
          "Integration von KI in bestehende Geschäftsprozesse",
        ],
      },
      {
        title: "Ethik, Sicherheit und verantwortungsvoller Einsatz",
        items: [
          "Ethische Grundsätze und Leitlinien für KI",
          "Bias, Fairness und Diskriminierung in KI-Systemen",
          "Datenschutz (DSGVO) und KI: Anforderungen und Umsetzung",
          "Transparenz, Explainability und Nachvollziehbarkeit",
          "Sicherheit: Prompt Injection, Datenlecks, Missbrauch",
          "Nachhaltigkeit: Energieverbrauch und CO₂-Fußabdruck von KI",
          "Corporate AI Governance und Richtlinien",
          "Mensch-KI-Kollaboration: Aufgabenverteilung und Kontrolle",
        ],
      },
    ],
    faq: [
      {
        question: "Bekomme ich nach der Weiterbildung ein anerkanntes Zertifikat?",
        answer:
          "Ja, im Laufe der Weiterbildung erhältst du mehrere Zertifikate von renommierten Anbietern, die in der IT-Branche ein hohes Ansehen genießen. So kannst du nicht nur mit praktischer Erfahrung, sondern auch mit den passenden Nachweisen in deine IT-Karriere starten.",
      },
      {
        question: "Was bringt mir die Weiterbildung?",
        answer:
          "Karriere ist unsere Leidenschaft. Genau das wollen wir auch Dir ermöglichen – mit unseren Weiterbildungen bereitest Du Dich gezielt auf eine erfolgreiche Zukunft in der IT-Branche vor. Über mehrere Monate bilden wir Dich praxisnah in einem gefragten Berufsfeld aus und begleiten Dich anschließend beim Einstieg in Deinen Wunschjob. Gemeinsam gestalten wir Deinen beruflichen Weg und statten Dich mit allem aus, was Du für Deinen Erfolg brauchst.",
      },
      {
        question: "Ist der Kurs für Quereinsteiger geeignet?",
        answer:
          "Absolut. Viele Teilnehmende kommen aus dem Projektmanagement, Marketing oder IT-Support und suchen einen soliden Einstieg in agile Produktarbeit. Du brauchst keine Vorbildung – aber Lust, Verantwortung zu übernehmen.",
      },
      {
        question: "Brauche ich Vorkenntnisse in Programmierung?",
        answer:
          "Grundlegende Computerkenntnisse reichen. Wir starten mit den Basics und führen Sie Schritt für Schritt in KI und Machine Learning ein. Ideal auch für Quereinsteiger:innen.",
      },
      {
        question: "Wie lange dauert der Kurs?",
        answer:
          "Die Weiterbildung umfasst in der Regel mehrere Monate – je nach Format und Förderung. In der Beratung klären wir den passenden Einstieg und Zeitrahmen mit Ihnen.",
      },
    ],
  },
  "it-sales": {
    heroImage: "/asian.png",
    features: [
      "MacBook inklusive",
      "Bequem von zuhause aus lernen",
      "Optimal für Quereinsteiger:innen",
    ],
    rating: "4,9",
    reviewCount: "280+",
    contentSections: [
      {
        title: "Vertriebsgrundlagen und Sales-Prozesse",
        items: [
          "Einführung in den IT-Vertrieb: Besonderheiten und Anforderungen",
          "Vertriebsstrategien: B2B vs. B2C, Direktvertrieb, Channel-Sales",
          "Der Sales-Funnel: von der Lead-Generierung bis zum Abschluss",
          "CRM-Systeme: Nutzung von Salesforce, HubSpot und vergleichbaren Tools",
          "Pipeline-Management und Forecast-Erstellung",
          "Qualifizierung von Leads: BANT und andere Methoden",
          "Vertriebszyklen und typische Phasen im IT-Verkauf",
          "Messung von Vertriebskennzahlen (KPIs) und Reporting",
          "Best Practices für effektive Sales-Prozesse",
        ],
      },
      {
        title: "Technisches Verständnis für IT-Produkte",
        items: [
          "Grundlagen Software und IT-Infrastruktur für Vertriebler:innen",
          "Cloud-Services: IaaS, PaaS, SaaS – Unterschiede und Verkaufsargumente",
          "Cybersecurity-Produkte: Bedrohungslage und Lösungsportfolio",
          "Enterprise Software: ERP, CRM, Collaboration-Tools",
          "IT-Projekttypen: Beratung, Implementierung, Wartung",
          "Technische Terminologie: souverän mit IT-Entscheider:innen kommunizieren",
          "Demos und Produktpräsentationen vorbereiten und durchführen",
          "Technische Einwände erkennen und fachkundig beantworten",
          "Partnerschaften mit Herstellern und Systemintegratoren",
        ],
      },
      {
        title: "Kundenakquise und Neukundengewinnung",
        items: [
          "Prospect Research: Zielgruppen identifizieren und priorisieren",
          "Outbound-Sales: Cold Calling, Cold E-Mails, LinkedIn-Outreach",
          "Inbound-Marketing und Lead-Nurturing",
          "Messe- und Event-Akquise",
          "Netzwerken und Empfehlungsmarketing",
          "Account-Based Selling: fokussierte Ansprache von Schlüsselaccounts",
          "Qualifizierungsgespräche und Discovery Calls",
          "Umgang mit Gatekeepern und Entscheidungsfindung im Unternehmen",
          "Wettbewerbsanalyse und Differenzierung",
        ],
      },
      {
        title: "Beratungsorientierter Verkauf und Kundenberatung",
        items: [
          "Consultative Selling: vom Verkäufer zum Berater",
          "Kundenbedürfnisse ermitteln: aktives Zuhören und gezielte Fragen",
          "Pain Points identifizieren und quantifizieren",
          "Lösungsorientierte Gesprächsführung",
          "Value Proposition und Nutzenargumentation",
          "Angebotserstellung: Struktur, Kalkulation und Pricing",
          "Präsentationstechniken für technische und nicht-technische Ansprechpartner:innen",
          "Piloten, Proof of Concept und Referenzprojekte",
          "Nach dem Verkauf: Customer Success und Account Management",
        ],
      },
      {
        title: "Verhandlung und Abschluss",
        items: [
          "Verhandlungsstrategien im IT-Vertrieb",
          "Preisgestaltung: Festpreis, Zeit & Material, Subscription-Modelle",
          "Umgang mit Einwänden und Preisverhandlungen",
          "Rahmenverträge, SLAs und rechtliche Aspekte",
          "Abschlusstechniken und den Deal zum Ziel führen",
          "Multi-Stakeholder-Verkauf: verschiedene Interessen im Einklang bringen",
          "Verlängerung und Upselling bei Bestandskunden",
          "Gesprächspsychologie und Verhandlungstaktik",
          "Nach dem Abschluss: Übergabe an das Projektteam",
        ],
      },
      {
        title: "Kommunikation, Präsentation und Soft Skills",
        items: [
          "Selbstpräsentation und persönliche Marke im Vertrieb",
          "Elevator Pitch und Value Proposition formulieren",
          "Präsentationen vor kleinen und großen Gruppen",
          "E-Mail-Kommunikation: professionell und zielführend",
          "Virtual Selling: Videocalls und Remote-Präsentationen",
          "Zeitmanagement und Priorisierung im Vertriebsalltag",
          "Belastbarkeit und Umgang mit Rückschlägen",
          "Ethik und Integrität im Vertrieb",
        ],
      },
    ],
    faq: [
      {
        question: "Bekomme ich nach der Weiterbildung ein anerkanntes Zertifikat?",
        answer:
          "Ja, im Laufe der Weiterbildung erhältst du mehrere Zertifikate von renommierten Anbietern, die in der IT-Branche ein hohes Ansehen genießen. So kannst du nicht nur mit praktischer Erfahrung, sondern auch mit den passenden Nachweisen in deine IT-Karriere starten.",
      },
      {
        question: "Was bringt mir die Weiterbildung?",
        answer:
          "Karriere ist unsere Leidenschaft. Genau das wollen wir auch Dir ermöglichen – mit unseren Weiterbildungen bereitest Du Dich gezielt auf eine erfolgreiche Zukunft in der IT-Branche vor. Über mehrere Monate bilden wir Dich praxisnah in einem gefragten Berufsfeld aus und begleiten Dich anschließend beim Einstieg in Deinen Wunschjob. Gemeinsam gestalten wir Deinen beruflichen Weg und statten Dich mit allem aus, was Du für Deinen Erfolg brauchst.",
      },
      {
        question: "Ist der Kurs für Quereinsteiger geeignet?",
        answer:
          "Absolut. Viele Teilnehmende kommen aus dem Projektmanagement, Marketing oder IT-Support und suchen einen soliden Einstieg in agile Produktarbeit. Du brauchst keine Vorbildung – aber Lust, Verantwortung zu übernehmen.",
      },
      {
        question: "Ist der Kurs auch ohne IT-Hintergrund möglich?",
        answer:
          "Ja. Wir vermitteln das nötige technische Know-how für den IT-Vertrieb. Quereinsteiger:innen sind ausdrücklich willkommen.",
      },
    ],
  },
  "projektmanagement": {
    heroImage: "/schwarzeFrauMann.png",
    features: [
      "MacBook inklusive",
      "Bequem von zuhause aus lernen",
      "Optimal für Quereinsteiger:innen",
    ],
    rating: "4,9",
    reviewCount: "290+",
    contentSections: [
      {
        title: "Grundlagen des Projektmanagements",
        items: [
          "Einführung in das Projektmanagement: Definition, Ziele und Erfolgsfaktoren",
          "Projekt vs. Linie: Besonderheiten der Projektarbeit",
          "Projektlebenszyklus und Phasenmodell",
          "Projektarten: interne, externe, nationale, internationale Projekte",
          "Stakeholder-Management: Identifikation, Analyse und Kommunikation",
          "Projektauftrag und Kick-off: Klärung von Zielen und Rahmenbedingungen",
          "Projektorganisation: Rollen, Verantwortlichkeiten und Entscheidungsstrukturen",
          "Projektcontrolling und Steuerung",
          "Projektabschluss: Lessons Learned und Übergabe",
        ],
      },
      {
        title: "Klassisches Projektmanagement",
        items: [
          "Wasserfall-Modell und sequenzielle Planung",
          "Projektstrukturplan (PSP) und Arbeitspakete",
          "Meilensteinplanung und Meilensteintrendanalyse",
          "Ressourcenplanung: Kapazitäten, Verfügbarkeit, Auslastung",
          "Terminplanung: Gantt-Diagramme, Netzplantechnik, kritischer Pfad",
          "Kostenplanung und Budgetierung",
          "Risikomanagement: Identifikation, Bewertung, Maßnahmen",
          "Änderungsmanagement und Change Requests",
          "Projektberichterstattung und Status-Reporting",
        ],
      },
      {
        title: "Agile Methoden: Scrum",
        items: [
          "Agiles Manifest und agile Prinzipien",
          "Scrum-Rahmenwerk: Rollen, Events, Artefakte",
          "Product Owner: Backlog-Management und Priorisierung",
          "Scrum Master: Servant Leadership und Hindernisbeseitigung",
          "Development Team: Selbstorganisation und Commitment",
          "Sprint Planning, Daily Scrum, Sprint Review, Retrospective",
          "Product Backlog und Sprint Backlog",
          "Definition of Done und Qualitätssicherung",
          "Scaling Scrum: Scrum of Scrums, LeSS, SAFe",
        ],
      },
      {
        title: "Agile Methoden: Kanban und weitere",
        items: [
          "Kanban: Prinzipien und Visualisierung des Workflows",
          "WIP-Limits und Pull-System",
          "Kanban-Boards gestalten und nutzen",
          "Hybride Ansätze: Scrum und Kanban kombinieren",
          "Lean Project Management: Verschwendung vermeiden",
          "Design Thinking in Projekten",
          "Extreme Programming (XP) und technische Praktiken",
          "Auswahl der passenden Methode für das Projekt",
        ],
      },
      {
        title: "Tools und Projektplanung",
        items: [
          "Überblick über PM-Tools: Jira, Asana, Monday, MS Project",
          "Jira: Boards, Sprints, Backlogs und Workflows",
          "Gantt- und Kalenderansichten nutzen",
          "Zeiterfassung und Ressourcenplanung in Tools",
          "Reporting und Dashboards einrichten",
          "Integration von Tools in den Arbeitsalltag",
          "Kollaboration: Dokumentation, Wiki, Knowledge Base",
          "Virtual Collaboration: Remote-Teams und verteilte Projekte",
        ],
      },
      {
        title: "Führung und Kommunikation im Projekt",
        items: [
          "Projektleitung: Führungsaufgaben und -stile",
          "Teambildung und Motivation",
          "Konfliktmanagement und Eskalation",
          "Meeting-Kultur: effektive Besprechungen planen und leiten",
          "Kommunikation mit Auftraggeber:innen und Stakeholdern",
          "Feedback geben und nehmen",
          "Interkulturelle Kommunikation in internationalen Projekten",
          "Crisis Management: Umgang mit Problemen und Rückschlägen",
          "Persönliche Resilienz und Stressmanagement",
        ],
      },
      {
        title: "IT-Projekte und Besonderheiten",
        items: [
          "Software-Entwicklungsprojekte: Anforderungen, Iterationen, Releases",
          "Anforderungsmanagement: User Stories, Use Cases, Acceptance Criteria",
          "Umgang mit technischer Komplexität und Unsicherheit",
          "Qualitätssicherung und Testing in IT-Projekten",
          "DevOps und kontinuierliche Lieferung",
          "Projektmanagement in der Produktentwicklung",
          "Vendor Management und externe Dienstleister",
        ],
      },
    ],
    faq: [
      {
        question: "Bekomme ich nach der Weiterbildung ein anerkanntes Zertifikat?",
        answer:
          "Ja, im Laufe der Weiterbildung erhältst du mehrere Zertifikate von renommierten Anbietern, die in der IT-Branche ein hohes Ansehen genießen. So kannst du nicht nur mit praktischer Erfahrung, sondern auch mit den passenden Nachweisen in deine IT-Karriere starten.",
      },
      {
        question: "Was bringt mir die Weiterbildung?",
        answer:
          "Karriere ist unsere Leidenschaft. Genau das wollen wir auch Dir ermöglichen – mit unseren Weiterbildungen bereitest Du Dich gezielt auf eine erfolgreiche Zukunft in der IT-Branche vor. Über mehrere Monate bilden wir Dich praxisnah in einem gefragten Berufsfeld aus und begleiten Dich anschließend beim Einstieg in Deinen Wunschjob. Gemeinsam gestalten wir Deinen beruflichen Weg und statten Dich mit allem aus, was Du für Deinen Erfolg brauchst.",
      },
      {
        question: "Ist der Kurs für Quereinsteiger geeignet?",
        answer:
          "Absolut. Viele Teilnehmende kommen aus dem Projektmanagement, Marketing oder IT-Support und suchen einen soliden Einstieg in agile Produktarbeit. Du brauchst keine Vorbildung – aber Lust, Verantwortung zu übernehmen.",
      },
      {
        question: "Wird eine Zertifizierung angeboten?",
        answer:
          "Je nach Kurs können Zertifizierungen oder Zertifikate erworben werden. Details besprechen wir gerne in der Beratung.",
      },
    ],
  },
};
