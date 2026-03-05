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
  /** Brand für SEO: Titel, Meta, Schema (z. B. "Forward Education"). Rechtliches bleibt companyLegalName. */
  seoBrand: string;
  /** Öffentliche Basis-URL der Website (für Sitemap, OpenGraph, Canonical). */
  siteUrl: string;
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
  seoBrand: "Forward Education",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://forward-education.de",
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
      "Weiterbildung, die wirkt – mit Bildungsgutschein bis zu 100 % förderbar. Live-Unterricht, echte Projekte und Bewerbungscoaching bis zum nächsten Job.",
    ctaText: "Jetzt kostenlos beraten lassen",
    ctaHref: APPLICATION_FORM_URL,
  },

  courses: [
    {
      slug: "kuenstliche-intelligenz",
      title: "Künstliche Intelligenz",
      description:
        "KI-Grundlagen, Machine Learning und Prompt Engineering – so wendest Du KI im Job sicher an und bleibst am Puls der Arbeitswelt.",
      icon: "brain",
      highlights: ["Machine Learning", "Prompt Engineering", "KI-Anwendungen"],
      searchKeywords: ["KI", "künstliche intelligenz", "machine learning", "prompt engineering", "AI", "Automatisierung", "AI & Automatisierung"],
      apiCourseIds: [], // Franklin-UUID(s) eintragen, damit Suche und Kachel den echten Kurs aus der DB anzeigen
    },
    {
      slug: "it-sales",
      title: "Sales",
      description:
        "IT-Lösungen verkaufen, Kunden beraten, Deals abschließen. Vertriebsstrategien und technisches Verständnis – der Einstieg in den IT-Vertrieb.",
      icon: "sales",
      highlights: ["Vertriebsstrategien", "Technische Beratung", "Kundenakquise"],
      searchKeywords: ["Sales", "IT-Sales", "Vertrieb", "Verkauf", "IT Vertrieb", "IT-Vertriebsmanager", "CRM", "CRM Spezialist", "Performance Marketing", "Google Ads", "Geschäftsmodelle", "Geschäftsmodelle Unternehmen", "Unternehmen Kompetenzen"],
      apiCourseIds: [], // Franklin-UUID(s) eintragen, z. B. für „Geschäftsmodelle Unternehmen - Kompetenzen“, damit der exakte DB-Titel angezeigt wird
    },
    {
      slug: "projektmanagement",
      title: "Projektmanagement",
      description:
        "Projekte planen, Teams führen, Ziele erreichen. Agile und klassische Methoden – von Scrum bis zur sauberen Ablage. Einstieg oder Vertiefung.",
      icon: "target",
      highlights: ["Agiles PM (Scrum)", "Klassisches PM", "Führungskompetenzen"],
      apiCourseId: "e5ca46a1-b606-42b6-834c-23b2ead2f6d2",
      searchKeywords: ["Projektmanagement", "PM", "Agile", "Scrum", "Produktmanagement", "IT-Berater", "Software-Berater", "Cybersecurity"],
    },
  ],

  benefits: [
    {
      title: "Du zahlst nichts",
      description: "Bildungsgutschein der Agentur für Arbeit übernimmt Kursgebühren, Fahrtkosten und bei Bedarf Kinderbetreuung. Alle unsere Kurse sind AZAV-zertifiziert.",
      icon: "piggybank",
    },
    {
      title: "Skills, die Du sofort nutzt",
      description: "Live-Unterricht und echte Projekte – kein reines Theorie-Paket. Was Du lernst, wendest Du im Job direkt an.",
      icon: "briefcase",
    },
    {
      title: "Online oder vor Ort",
      description: "Virtuelles Klassenzimmer von zu Hause oder Präsenz in München. Du wählst, was zu Dir passt.",
      icon: "clock",
    },
    {
      title: "Dozent:innen aus der Praxis",
      description: "Trainer:innen mit Berufserfahrung in KI, Vertrieb oder Projektmanagement – sie geben Dir konkretes, ehrliches Feedback.",
      icon: "users",
    },
    {
      title: "Maximal 15 Teilnehmer:innen",
      description: "Kleine Gruppen: mehr Zeit für Deine Fragen, besseres Feedback und Begleitung bis zum Abschluss.",
      icon: "usergroup",
    },
    {
      title: "Bewerbung inklusive",
      description: "Bewerbungscoaching und Karriereberatung inklusive – bis Du Deinen nächsten Job hast.",
      icon: "rocket",
    },
  ],

  cta: {
    headline: "Finde die Weiterbildung, die zu Dir passt.",
    subline:
      "Kostenlose Beratung – wir prüfen Deine Fördermöglichkeiten und melden uns innerhalb von 24 Stunden. Unverbindlich.",
    buttonText: "Jetzt kostenlos beraten lassen",
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
      { label: "Kurse", href: "/#kurse" },
      { label: "Standorte", href: "/standorte" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "FAQ", href: "/#faq" },
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
      { value: "55.000 €+", label: "Durchschnittliches Einstiegsgehalt in IT, Sales & PM" },
      { value: "90 %", label: "unserer Absolvent:innen bei attraktiven Arbeitgebern (DAX, Hidden Champions, Tech)" },
      { value: "< 1 Monat", label: "durchschnittlich bis zum neuen Job nach der Weiterbildung" },
    ],
  },
  faq: [
    {
      question: "Wer übernimmt die Kosten für die Weiterbildung?",
      answer:
        "Unsere Kurse sind AZAV-zertifiziert. Mit dem Bildungsgutschein der Agentur für Arbeit können bis zu 100 % der Kosten übernommen werden. Wir beraten Dich gerne zu Deinen Fördermöglichkeiten.",
    },
    {
      question: "Kann ich online von zu Hause aus lernen?",
      answer:
        "Ja. Du lernst im virtuellen Klassenzimmer von zu Hause oder in Präsenz in München – flexibel nach Deinem Zeitplan.",
    },
    {
      question: "Wie läuft die kostenlose Beratung ab?",
      answer:
        "Klick auf „Jetzt beraten lassen“ und fülle das kurze Formular aus. Wir melden uns innerhalb von 24 Stunden, prüfen Deine Voraussetzungen, klären Fördermöglichkeiten und finden den passenden Kurs. Kostenlos und unverbindlich.",
    },
    {
      question: "Für wen sind die Kurse geeignet?",
      answer:
        "Für Berufseinsteiger:innen, Quereinsteiger:innen und Berufstätige, die sich in KI, Sales oder Projektmanagement qualifizieren möchten. Vorkenntnisse sind je nach Kurs unterschiedlich – wir beraten Dich gerne.",
    },
  ],
  tracking: { brand: "forward-education" },
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
          "Ja, im Laufe der Weiterbildung erhältst Du mehrere Zertifikate von renommierten Anbietern, die in der IT-Branche ein hohes Ansehen genießen. So kannst Du nicht nur mit praktischer Erfahrung, sondern auch mit den passenden Nachweisen in Deine IT-Karriere starten.",
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
          "Ja, im Laufe der Weiterbildung erhältst Du mehrere Zertifikate von renommierten Anbietern, die in der IT-Branche ein hohes Ansehen genießen. So kannst Du nicht nur mit praktischer Erfahrung, sondern auch mit den passenden Nachweisen in Deine IT-Karriere starten.",
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
          "Ja, im Laufe der Weiterbildung erhältst Du mehrere Zertifikate von renommierten Anbietern, die in der IT-Branche ein hohes Ansehen genießen. So kannst Du nicht nur mit praktischer Erfahrung, sondern auch mit den passenden Nachweisen in Deine IT-Karriere starten.",
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
