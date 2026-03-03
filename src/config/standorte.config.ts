export interface StandortConfig {
  slug: string;
  name: string;
  bundesland: string;
  intro: string;
  /** Physischer Standort (nur München) */
  address?: string;
  arbeitsagentur?: { name: string; address: string; url: string };
}

/** Slugs der wichtigsten Großstädte – nur diese werden in der UI angezeigt; alle anderen haben weiterhin eigene Seiten für SEO. */
const FEATURED_STANDORTE_SLUGS: string[] = [
  "muenchen", "berlin", "hamburg", "koeln", "frankfurt", "duesseldorf",
  "stuttgart", "dortmund", "essen", "leipzig", "bremen", "dresden",
];

// ─── Bundesland-spezifische Intro-Funktionen (SEO-optimiert) ───────────────

function bayernIntro(name: string): string {
  return `In ${name} qualifizierst Du Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement – und startest direkt bei Bayerns führenden Arbeitgebern wie BMW, Siemens oder dem starken Mittelstand. Komplett gefördert durch den Bildungsgutschein der Agentur für Arbeit.`;
}

function bwIntro(name: string): string {
  return `In ${name} arbeitest Du nach Deiner Weiterbildung für Unternehmen wie Bosch, SAP oder Mercedes-Benz – Baden-Württemberg ist Heimat der stärksten Innovationswirtschaft Deutschlands. Qualifiziere Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement – gefördert durch den Bildungsgutschein.`;
}

function nrwIntro(name: string): string {
  return `In ${name} erwartet Dich der größte Arbeitsmarkt Deutschlands: NRW mit Bayer, Henkel, Deutsche Post und hunderten Mittelständlern sucht händeringend nach IT- und Sales-Fachkräften. Qualifiziere Dich in 3 bis 6 Monaten online – komplett gefördert durch die Agentur für Arbeit.`;
}

function niedersachsenIntro(name: string): string {
  return `In ${name} profitierst Du vom Volkswagen-Ökosystem und einem starken Mittelstand, der Niedersachsen zu einem der wichtigsten Industrie- und Technologiestandorte Deutschlands macht. Qualifiziere Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement – gefördert durch den Bildungsgutschein.`;
}

function hessenIntro(name: string): string {
  return `In ${name} bist Du nah am stärksten Finanz- und Pharmastandort Deutschlands: Hessen mit der Deutschen Bank, Merck und Fresenius sucht gezielt nach digitalem Nachwuchs. Qualifiziere Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement – komplett gefördert durch den Bildungsgutschein.`;
}

function sachsenIntro(name: string): string {
  return `In ${name} startest Du durch in Europas aufstrebendstem Tech-Cluster: Sachsens Silicon Saxony mit TSMC, Infineon und Bosch wächst rasant – und sucht IT- und Projektmanagement-Fachkräfte. In 3 bis 6 Monaten bist Du bereit, gefördert durch den Bildungsgutschein der Agentur für Arbeit.`;
}

function brandenburgIntro(name: string): string {
  return `In ${name} profitierst Du vom Wachstumsraum Berlin-Brandenburg: Tesla in Grünheide, wachsende Tech-Unternehmen und Berlins Startup-Ökosystem schaffen Tausende neue Jobs. Qualifiziere Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement – gefördert durch die Agentur für Arbeit.`;
}

function thueringenIntro(name: string): string {
  return `In ${name} qualifizierst Du Dich für eine Region, die auf Präzision setzt: Thüringen mit Carl Zeiss, Jenoptik und starken Automotive-Zulieferern braucht IT- und Projektmanagement-Fachkräfte. In 3 bis 6 Monaten online, komplett gefördert durch den Bildungsgutschein.`;
}

function sachsenAnhaltIntro(name: string): string {
  return `In ${name} bist Du dabei, wenn Sachsen-Anhalt sich neu erfindet: Intel baut in Magdeburg Europas modernste Chipfabrik, und der Bedarf an IT- und Projektfachkräften wächst rasant. Qualifiziere Dich in 3 bis 6 Monaten online – komplett gefördert durch die Agentur für Arbeit.`;
}

function shIntro(name: string): string {
  return `In ${name} qualifizierst Du Dich für einen Wirtschaftsraum, der Windenergie und maritime Technologie mit digitalen Jobs verbindet – nah an Hamburgs Arbeitgebern. In 3 bis 6 Monaten wirst Du zur KI-, Vertriebs- oder Projektmanagement-Fachkraft, komplett gefördert durch den Bildungsgutschein.`;
}

function rlpIntro(name: string): string {
  return `In ${name} startest Du durch in einer Region mit BASF, einem der größten Industriearbeitgeber Europas, und einem wachsenden Bedarf an digitalen Fachkräften in Chemie, Logistik und IT. Qualifiziere Dich in 3 bis 6 Monaten online – gefördert durch den Bildungsgutschein.`;
}

function mvIntro(name: string): string {
  return `In ${name} qualifizierst Du Dich online für eine Region im digitalen Aufbruch: Mecklenburg-Vorpommern investiert in IT-Infrastruktur, und wachsende Unternehmen suchen Fachkräfte für KI, IT-Vertrieb und Projektmanagement. 3 bis 6 Monate, komplett gefördert durch die Agentur für Arbeit.`;
}

function saarlandIntro(name: string): string {
  return `In ${name} profitierst Du vom Strukturwandel des Saarlandes: Frühere Stahlregion, heute wachsender IT-Standort mit Unternehmen, die händeringend nach digitalen Fachkräften für KI, Vertrieb und Projektmanagement suchen. Qualifiziere Dich in 3 bis 6 Monaten online – komplett gefördert durch den Bildungsgutschein.`;
}

function berlinIntro(name: string): string {
  return `In ${name} – mitten in Europas Startup-Hauptstadt – qualifizierst Du Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement. Zalando, N26, HelloFresh und über 5.000 Tech-Unternehmen in Berlin suchen aktiv nach digitalem Nachwuchs. Komplett gefördert durch den Bildungsgutschein.`;
}

function hamburgIntro(name: string): string {
  return `In ${name} – im Herzen der Hamburger Wirtschaft – qualifizierst Du Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement. Airbus, About You, Otto und Hamburgs wachsende Logistik-Tech-Szene suchen digitale Fachkräfte. Komplett gefördert durch die Agentur für Arbeit.`;
}

function bremenIntro(name: string): string {
  return `In ${name} qualifizierst Du Dich in 3 bis 6 Monaten online für KI, IT-Vertrieb oder Projektmanagement – und wirst zur gefragten Fachkraft für Unternehmen wie Airbus, Mercedes-Benz Trucks und OHB Space. Komplett gefördert durch den Bildungsgutschein der Agentur für Arbeit.`;
}

/** Vor-Ort-URL-Slugs der Arbeitsagentur (wenn abweichend von unserem Standort-Slug) */
const ARBEITSAGENTUR_VOR_ORT_SLUG: Record<string, string> = {
  "berlin-mitte": "berlin-mitte",
  "berlin-charlottenburg": "berlin-mitte",
  "berlin-friedrichshain": "berlin-mitte",
  "berlin-spandau": "berlin-mitte",
  "berlin-tempelhof": "berlin-mitte",
  "bremerhaven": "bremen-bremerhaven",
  "hamburg-harburg": "hamburg",
  "hamburg-altona": "hamburg",
};

/** Standard-Arbeitsagentur-Eintrag für Standorte ohne eigene Adresse (verlinkt auf vor-ort-Seite) */
function defaultArbeitsagentur(slug: string, name: string): { name: string; address: string; url: string } {
  const vorOrtSlug = ARBEITSAGENTUR_VOR_ORT_SLUG[slug] ?? slug;
  return {
    name: `Agentur für Arbeit ${name}`,
    address: "Adresse und Öffnungszeiten auf der Website der Agentur für Arbeit.",
    url: `https://www.arbeitsagentur.de/vor-ort/${vorOrtSlug}`,
  };
}

export const standorte: StandortConfig[] = [
  // ─── Großstädte mit individuellem Intro ────────────────────────────────────
  {
    slug: "muenchen",
    name: "München",
    bundesland: "Bayern",
    intro:
      "München zählt über 100.000 offene IT-Stellen jährlich. Ob Du vor Ort an unserem Standort oder online teilnimmst – in 3 bis 6 Monaten qualifizierst Du Dich für KI, Vertrieb oder Projektmanagement. Die Agentur für Arbeit übernimmt die Kosten.",
    address: "Stefan-George-Ring 2, 81929 München",
    arbeitsagentur: {
      name: "Agentur für Arbeit München",
      address: "Kapuzinerstraße 26, 80337 München",
      url: "https://www.arbeitsagentur.de/vor-ort/muenchen",
    },
  },
  {
    slug: "berlin",
    name: "Berlin",
    bundesland: "Berlin",
    intro:
      "Berlin hat die höchste Startup-Dichte Europas – und sucht Fachkräfte. In 3 bis 6 Monaten qualifizierst Du Dich online für KI, IT-Vertrieb oder Projektmanagement. Die Agentur für Arbeit übernimmt die kompletten Kosten.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Berlin Mitte",
      address: "Friedrichstraße 39, 10969 Berlin",
      url: "https://www.arbeitsagentur.de/vor-ort/berlin-mitte",
    },
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    bundesland: "Hamburg",
    intro:
      "Hamburgs Hafen- und Medienbranche digitalisiert sich schnell. Qualifiziere Dich in 3 bis 6 Monaten für KI, IT-Vertrieb oder Projektmanagement – online von Hamburg aus, komplett gefördert durch den Bildungsgutschein.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Hamburg",
      address: "Kurt-Schumacher-Allee 16, 20097 Hamburg",
      url: "https://www.arbeitsagentur.de/vor-ort/hamburg",
    },
  },
  {
    slug: "koeln",
    name: "Köln",
    bundesland: "Nordrhein-Westfalen",
    intro:
      "Kölns Medien- und Gaming-Branche sucht KI- und Vertriebstalente. Deine Weiterbildung dauert 3 bis 6 Monate, läuft online und wird vollständig von der Agentur für Arbeit finanziert.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Köln",
      address: "Luxemburger Straße 121, 50939 Köln",
      url: "https://www.arbeitsagentur.de/vor-ort/koeln",
    },
  },
  {
    slug: "frankfurt",
    name: "Frankfurt am Main",
    bundesland: "Hessen",
    intro:
      "Frankfurts Banken und Fintechs investieren Milliarden in Digitalisierung. Positioniere Dich in 3 bis 6 Monaten als KI-, Sales- oder Projektmanagement-Fachkraft – online, komplett gefördert.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Frankfurt am Main",
      address: "Fischerfeldstraße 10–12, 60311 Frankfurt am Main",
      url: "https://www.arbeitsagentur.de/vor-ort/frankfurt",
    },
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    bundesland: "Nordrhein-Westfalen",
    intro:
      "Düsseldorfs Unternehmenslandschaft – von Henkel bis Trivago – braucht digitale Fachkräfte. In 3 bis 6 Monaten bist Du bereit für KI, Vertrieb oder Projektmanagement. Die Kosten übernimmt die Agentur für Arbeit.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Düsseldorf",
      address: "Grafenberger Allee 300, 40237 Düsseldorf",
      url: "https://www.arbeitsagentur.de/vor-ort/duesseldorf",
    },
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    bundesland: "Baden-Württemberg",
    intro:
      "Porsche, Bosch, Mercedes – Stuttgarts Industrie setzt auf KI und Automatisierung. Qualifiziere Dich in 3 bis 6 Monaten online und steig in eine Branche ein, die Fachkräfte sucht.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Stuttgart",
      address: "Nordbahnhofstraße 30–34, 70191 Stuttgart",
      url: "https://www.arbeitsagentur.de/vor-ort/stuttgart",
    },
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    bundesland: "Nordrhein-Westfalen",
    intro:
      "Das Ruhrgebiet wandelt sich: Signal Iduna, Materna und hunderte Tech-Firmen sitzen in Dortmund. In 3 bis 6 Monaten qualifizierst Du Dich online – die Agentur für Arbeit übernimmt die Kosten.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Dortmund",
      address: "Steinstraße 39, 44147 Dortmund",
      url: "https://www.arbeitsagentur.de/vor-ort/dortmund",
    },
  },
  {
    slug: "essen",
    name: "Essen",
    bundesland: "Nordrhein-Westfalen",
    intro:
      "Von E.ON bis Hochtief – Essen ist ein Wirtschaftszentrum mit wachsendem IT-Bedarf. Qualifiziere Dich in 3 bis 6 Monaten online für KI, Vertrieb oder Projektmanagement. Komplett gefördert.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Essen",
      address: "Berliner Platz 10, 45127 Essen",
      url: "https://www.arbeitsagentur.de/vor-ort/essen",
    },
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    bundesland: "Sachsen",
    intro:
      "Leipzig wächst schneller als jede andere deutsche Großstadt – besonders in IT und Kreativwirtschaft. In 3 bis 6 Monaten bist Du bereit für den Arbeitsmarkt. Die Kosten? Übernimmt die Agentur für Arbeit.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Leipzig",
      address: "Georg-Schumann-Straße 150, 04159 Leipzig",
      url: "https://www.arbeitsagentur.de/vor-ort/leipzig",
    },
  },
  {
    slug: "bremen",
    name: "Bremen",
    bundesland: "Bremen",
    intro:
      "Airbus, OHB, Mercedes – Bremens Industrie digitalisiert sich. Qualifiziere Dich in 3 bis 6 Monaten online für KI, Vertrieb oder Projektmanagement. Die Agentur für Arbeit übernimmt die Kosten.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Bremen",
      address: "Doventorsteinweg 48–52, 28195 Bremen",
      url: "https://www.arbeitsagentur.de/vor-ort/bremen-bremerhaven",
    },
  },
  {
    slug: "dresden",
    name: "Dresden",
    bundesland: "Sachsen",
    intro:
      "TSMC, Infineon, Bosch – Dresden wird Europas Chip-Hauptstadt. Die Nachfrage nach KI- und Projektmanagement-Fachkräften explodiert. In 3 bis 6 Monaten bist Du bereit – komplett gefördert.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Dresden",
      address: "Henriette-Heber-Straße 6, 01069 Dresden",
      url: "https://www.arbeitsagentur.de/vor-ort/dresden",
    },
  },
  {
    slug: "hannover",
    name: "Hannover",
    bundesland: "Niedersachsen",
    intro:
      "Continental, VW Financial Services, die CeBIT-Stadt – Hannover ist ein Technologie-Standort mit Bedarf an digitalen Fachkräften. 3 bis 6 Monate Weiterbildung, komplett gefördert.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Hannover",
      address: "Brühlstraße 4, 30169 Hannover",
      url: "https://www.arbeitsagentur.de/vor-ort/hannover",
    },
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    bundesland: "Bayern",
    intro:
      "Datev, Siemens, GfK – Nürnberg hat eine der stärksten IT-Szenen Süddeutschlands. In 3 bis 6 Monaten qualifizierst Du Dich online für KI, Vertrieb oder Projektmanagement. Komplett gefördert.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Nürnberg",
      address: "Richard-Wagner-Platz 5, 90443 Nürnberg",
      url: "https://www.arbeitsagentur.de/vor-ort/nuernberg",
    },
  },
  {
    slug: "duisburg",
    name: "Duisburg",
    bundesland: "Nordrhein-Westfalen",
    intro:
      "Duisburg investiert in den digitalen Wandel – von Logistik-Tech bis Smart Port. Qualifiziere Dich in 3 bis 6 Monaten online und nutze die Förderung der Agentur für Arbeit.",
    arbeitsagentur: {
      name: "Agentur für Arbeit Duisburg",
      address: "Wintgensstraße 29–33, 47058 Duisburg",
      url: "https://www.arbeitsagentur.de/vor-ort/duisburg",
    },
  },

  // ─── Bayern ────────────────────────────────────────────────────────────────
  { slug: "augsburg", name: "Augsburg", bundesland: "Bayern", intro: bayernIntro("Augsburg"), arbeitsagentur: defaultArbeitsagentur("augsburg", "Augsburg") },
  { slug: "ingolstadt", name: "Ingolstadt", bundesland: "Bayern", intro: bayernIntro("Ingolstadt"), arbeitsagentur: defaultArbeitsagentur("ingolstadt", "Ingolstadt") },
  { slug: "regensburg", name: "Regensburg", bundesland: "Bayern", intro: bayernIntro("Regensburg"), arbeitsagentur: defaultArbeitsagentur("regensburg", "Regensburg") },
  { slug: "wuerzburg", name: "Würzburg", bundesland: "Bayern", intro: bayernIntro("Würzburg"), arbeitsagentur: defaultArbeitsagentur("wuerzburg", "Würzburg") },
  { slug: "fuerth", name: "Fürth", bundesland: "Bayern", intro: bayernIntro("Fürth"), arbeitsagentur: defaultArbeitsagentur("fuerth", "Fürth") },
  { slug: "erlangen", name: "Erlangen", bundesland: "Bayern", intro: bayernIntro("Erlangen"), arbeitsagentur: defaultArbeitsagentur("erlangen", "Erlangen") },
  { slug: "bayreuth", name: "Bayreuth", bundesland: "Bayern", intro: bayernIntro("Bayreuth"), arbeitsagentur: defaultArbeitsagentur("bayreuth", "Bayreuth") },
  { slug: "bamberg", name: "Bamberg", bundesland: "Bayern", intro: bayernIntro("Bamberg"), arbeitsagentur: defaultArbeitsagentur("bamberg", "Bamberg") },
  { slug: "rosenheim", name: "Rosenheim", bundesland: "Bayern", intro: bayernIntro("Rosenheim"), arbeitsagentur: defaultArbeitsagentur("rosenheim", "Rosenheim") },
  { slug: "kempten", name: "Kempten (Allgäu)", bundesland: "Bayern", intro: bayernIntro("Kempten"), arbeitsagentur: defaultArbeitsagentur("kempten", "Kempten (Allgäu)") },
  { slug: "landshut", name: "Landshut", bundesland: "Bayern", intro: bayernIntro("Landshut"), arbeitsagentur: defaultArbeitsagentur("landshut", "Landshut") },
  { slug: "memmingen", name: "Memmingen", bundesland: "Bayern", intro: bayernIntro("Memmingen"), arbeitsagentur: defaultArbeitsagentur("memmingen", "Memmingen") },
  { slug: "passau", name: "Passau", bundesland: "Bayern", intro: bayernIntro("Passau"), arbeitsagentur: defaultArbeitsagentur("passau", "Passau") },
  { slug: "schwabach", name: "Schwabach", bundesland: "Bayern", intro: bayernIntro("Schwabach"), arbeitsagentur: defaultArbeitsagentur("schwabach", "Schwabach") },
  { slug: "straubing", name: "Straubing", bundesland: "Bayern", intro: bayernIntro("Straubing"), arbeitsagentur: defaultArbeitsagentur("straubing", "Straubing") },
  { slug: "kaufbeuren", name: "Kaufbeuren", bundesland: "Bayern", intro: bayernIntro("Kaufbeuren"), arbeitsagentur: defaultArbeitsagentur("kaufbeuren", "Kaufbeuren") },
  { slug: "weiden", name: "Weiden i.d.OPf.", bundesland: "Bayern", intro: bayernIntro("Weiden"), arbeitsagentur: defaultArbeitsagentur("weiden", "Weiden i.d.OPf.") },
  { slug: "aschaffenburg", name: "Aschaffenburg", bundesland: "Bayern", intro: bayernIntro("Aschaffenburg"), arbeitsagentur: defaultArbeitsagentur("aschaffenburg", "Aschaffenburg") },
  { slug: "schweinfurt", name: "Schweinfurt", bundesland: "Bayern", intro: bayernIntro("Schweinfurt"), arbeitsagentur: defaultArbeitsagentur("schweinfurt", "Schweinfurt") },
  { slug: "ansbach", name: "Ansbach", bundesland: "Bayern", intro: bayernIntro("Ansbach"), arbeitsagentur: defaultArbeitsagentur("ansbach", "Ansbach") },
  { slug: "coburg", name: "Coburg", bundesland: "Bayern", intro: bayernIntro("Coburg"), arbeitsagentur: defaultArbeitsagentur("coburg", "Coburg") },
  { slug: "hof", name: "Hof", bundesland: "Bayern", intro: bayernIntro("Hof"), arbeitsagentur: defaultArbeitsagentur("hof", "Hof") },
  { slug: "freising", name: "Freising", bundesland: "Bayern", intro: bayernIntro("Freising"), arbeitsagentur: defaultArbeitsagentur("freising", "Freising") },
  { slug: "dachau", name: "Dachau", bundesland: "Bayern", intro: bayernIntro("Dachau"), arbeitsagentur: defaultArbeitsagentur("dachau", "Dachau") },
  { slug: "erding", name: "Erding", bundesland: "Bayern", intro: bayernIntro("Erding"), arbeitsagentur: defaultArbeitsagentur("erding", "Erding") },
  { slug: "gauting", name: "Gauting", bundesland: "Bayern", intro: bayernIntro("Gauting"), arbeitsagentur: defaultArbeitsagentur("gauting", "Gauting") },
  { slug: "germering", name: "Germering", bundesland: "Bayern", intro: bayernIntro("Germering"), arbeitsagentur: defaultArbeitsagentur("germering", "Germering") },
  { slug: "fuerstenfeldbruck", name: "Fürstenfeldbruck", bundesland: "Bayern", intro: bayernIntro("Fürstenfeldbruck"), arbeitsagentur: defaultArbeitsagentur("fuerstenfeldbruck", "Fürstenfeldbruck") },
  { slug: "deggendorf", name: "Deggendorf", bundesland: "Bayern", intro: bayernIntro("Deggendorf"), arbeitsagentur: defaultArbeitsagentur("deggendorf", "Deggendorf") },
  { slug: "neustadt-aisch", name: "Neustadt a.d. Aisch", bundesland: "Bayern", intro: bayernIntro("Neustadt a.d. Aisch"), arbeitsagentur: defaultArbeitsagentur("neustadt-aisch", "Neustadt a.d. Aisch") },
  { slug: "altdorf", name: "Altdorf b. Nürnberg", bundesland: "Bayern", intro: bayernIntro("Altdorf b. Nürnberg"), arbeitsagentur: defaultArbeitsagentur("altdorf", "Altdorf b. Nürnberg") },
  { slug: "gunzenhausen", name: "Gunzenhausen", bundesland: "Bayern", intro: bayernIntro("Gunzenhausen"), arbeitsagentur: defaultArbeitsagentur("gunzenhausen", "Gunzenhausen") },
  { slug: "amberg", name: "Amberg", bundesland: "Bayern", intro: bayernIntro("Amberg"), arbeitsagentur: defaultArbeitsagentur("amberg", "Amberg") },
  { slug: "neumarkt", name: "Neumarkt i.d.OPf.", bundesland: "Bayern", intro: bayernIntro("Neumarkt i.d.OPf."), arbeitsagentur: defaultArbeitsagentur("neumarkt", "Neumarkt i.d.OPf.") },
  { slug: "guenzburg", name: "Günzburg", bundesland: "Bayern", intro: bayernIntro("Günzburg"), arbeitsagentur: defaultArbeitsagentur("guenzburg", "Günzburg") },
  { slug: "donauwörth", name: "Donauwörth", bundesland: "Bayern", intro: bayernIntro("Donauwörth"), arbeitsagentur: defaultArbeitsagentur("donauwörth", "Donauwörth") },
  { slug: "neu-ulm", name: "Neu-Ulm", bundesland: "Bayern", intro: bayernIntro("Neu-Ulm"), arbeitsagentur: defaultArbeitsagentur("neu-ulm", "Neu-Ulm") },
  { slug: "garmisch-partenkirchen", name: "Garmisch-Partenkirchen", bundesland: "Bayern", intro: bayernIntro("Garmisch-Partenkirchen"), arbeitsagentur: defaultArbeitsagentur("garmisch-partenkirchen", "Garmisch-Partenkirchen") },
  { slug: "bad-toelz", name: "Bad Tölz", bundesland: "Bayern", intro: bayernIntro("Bad Tölz"), arbeitsagentur: defaultArbeitsagentur("bad-toelz", "Bad Tölz") },
  { slug: "miesbach", name: "Miesbach", bundesland: "Bayern", intro: bayernIntro("Miesbach"), arbeitsagentur: defaultArbeitsagentur("miesbach", "Miesbach") },
  { slug: "traunstein", name: "Traunstein", bundesland: "Bayern", intro: bayernIntro("Traunstein"), arbeitsagentur: defaultArbeitsagentur("traunstein", "Traunstein") },
  { slug: "bad-reichenhall", name: "Bad Reichenhall", bundesland: "Bayern", intro: bayernIntro("Bad Reichenhall"), arbeitsagentur: defaultArbeitsagentur("bad-reichenhall", "Bad Reichenhall") },
  { slug: "mühldorf", name: "Mühldorf a. Inn", bundesland: "Bayern", intro: bayernIntro("Mühldorf a. Inn"), arbeitsagentur: defaultArbeitsagentur("mühldorf", "Mühldorf a. Inn") },
  { slug: "wasserburg", name: "Wasserburg am Inn", bundesland: "Bayern", intro: bayernIntro("Wasserburg am Inn"), arbeitsagentur: defaultArbeitsagentur("wasserburg", "Wasserburg am Inn") },
  { slug: "burglengenfeld", name: "Burglengenfeld", bundesland: "Bayern", intro: bayernIntro("Burglengenfeld"), arbeitsagentur: defaultArbeitsagentur("burglengenfeld", "Burglengenfeld") },
  { slug: "schwandorf", name: "Schwandorf", bundesland: "Bayern", intro: bayernIntro("Schwandorf"), arbeitsagentur: defaultArbeitsagentur("schwandorf", "Schwandorf") },
  { slug: "cham", name: "Cham", bundesland: "Bayern", intro: bayernIntro("Cham"), arbeitsagentur: defaultArbeitsagentur("cham", "Cham") },
  { slug: "dingolfing", name: "Dingolfing", bundesland: "Bayern", intro: bayernIntro("Dingolfing"), arbeitsagentur: defaultArbeitsagentur("dingolfing", "Dingolfing") },
  { slug: "eggenfelden", name: "Eggenfelden", bundesland: "Bayern", intro: bayernIntro("Eggenfelden"), arbeitsagentur: defaultArbeitsagentur("eggenfelden", "Eggenfelden") },
  { slug: "pfarrkirchen", name: "Pfarrkirchen", bundesland: "Bayern", intro: bayernIntro("Pfarrkirchen"), arbeitsagentur: defaultArbeitsagentur("pfarrkirchen", "Pfarrkirchen") },
  { slug: "burghausen", name: "Burghausen", bundesland: "Bayern", intro: bayernIntro("Burghausen"), arbeitsagentur: defaultArbeitsagentur("burghausen", "Burghausen") },
  { slug: "altötting", name: "Altötting", bundesland: "Bayern", intro: bayernIntro("Altötting"), arbeitsagentur: defaultArbeitsagentur("altötting", "Altötting") },
  { slug: "eichstaett", name: "Eichstätt", bundesland: "Bayern", intro: bayernIntro("Eichstätt"), arbeitsagentur: defaultArbeitsagentur("eichstaett", "Eichstätt") },
  { slug: "neuburg", name: "Neuburg a.d. Donau", bundesland: "Bayern", intro: bayernIntro("Neuburg a.d. Donau"), arbeitsagentur: defaultArbeitsagentur("neuburg", "Neuburg a.d. Donau") },
  { slug: "pfaffenhofen", name: "Pfaffenhofen a.d. Ilm", bundesland: "Bayern", intro: bayernIntro("Pfaffenhofen a.d. Ilm"), arbeitsagentur: defaultArbeitsagentur("pfaffenhofen", "Pfaffenhofen a.d. Ilm") },
  { slug: "weilheim", name: "Weilheim i.OB", bundesland: "Bayern", intro: bayernIntro("Weilheim"), arbeitsagentur: defaultArbeitsagentur("weilheim", "Weilheim i.OB") },
  { slug: "starnberg", name: "Starnberg", bundesland: "Bayern", intro: bayernIntro("Starnberg"), arbeitsagentur: defaultArbeitsagentur("starnberg", "Starnberg") },
  { slug: "landsberg-lech", name: "Landsberg am Lech", bundesland: "Bayern", intro: bayernIntro("Landsberg am Lech"), arbeitsagentur: defaultArbeitsagentur("landsberg-lech", "Landsberg am Lech") },
  { slug: "bad-worishofen", name: "Bad Wörishofen", bundesland: "Bayern", intro: bayernIntro("Bad Wörishofen"), arbeitsagentur: defaultArbeitsagentur("bad-worishofen", "Bad Wörishofen") },
  { slug: "buchloe", name: "Buchloe", bundesland: "Bayern", intro: bayernIntro("Buchloe"), arbeitsagentur: defaultArbeitsagentur("buchloe", "Buchloe") },
  { slug: "lindau", name: "Lindau (Bodensee)", bundesland: "Bayern", intro: bayernIntro("Lindau"), arbeitsagentur: defaultArbeitsagentur("lindau", "Lindau (Bodensee)") },
  { slug: "fuessen", name: "Füssen", bundesland: "Bayern", intro: bayernIntro("Füssen"), arbeitsagentur: defaultArbeitsagentur("fuessen", "Füssen") },
  { slug: "marktoberdorf", name: "Marktoberdorf", bundesland: "Bayern", intro: bayernIntro("Marktoberdorf"), arbeitsagentur: defaultArbeitsagentur("marktoberdorf", "Marktoberdorf") },
  { slug: "sonthofen", name: "Sonthofen", bundesland: "Bayern", intro: bayernIntro("Sonthofen"), arbeitsagentur: defaultArbeitsagentur("sonthofen", "Sonthofen") },
  { slug: "dillingen-donau", name: "Dillingen a.d. Donau", bundesland: "Bayern", intro: bayernIntro("Dillingen a.d. Donau"), arbeitsagentur: defaultArbeitsagentur("dillingen-donau", "Dillingen a.d. Donau") },
  { slug: "lauingen", name: "Lauingen (Donau)", bundesland: "Bayern", intro: bayernIntro("Lauingen"), arbeitsagentur: defaultArbeitsagentur("lauingen", "Lauingen (Donau)") },
  { slug: "kronach", name: "Kronach", bundesland: "Bayern", intro: bayernIntro("Kronach"), arbeitsagentur: defaultArbeitsagentur("kronach", "Kronach") },
  { slug: "lichtenfels", name: "Lichtenfels", bundesland: "Bayern", intro: bayernIntro("Lichtenfels"), arbeitsagentur: defaultArbeitsagentur("lichtenfels", "Lichtenfels") },
  { slug: "kulmbach", name: "Kulmbach", bundesland: "Bayern", intro: bayernIntro("Kulmbach"), arbeitsagentur: defaultArbeitsagentur("kulmbach", "Kulmbach") },
  { slug: "naila", name: "Naila", bundesland: "Bayern", intro: bayernIntro("Naila"), arbeitsagentur: defaultArbeitsagentur("naila", "Naila") },
  { slug: "forchheim", name: "Forchheim", bundesland: "Bayern", intro: bayernIntro("Forchheim"), arbeitsagentur: defaultArbeitsagentur("forchheim", "Forchheim") },
  { slug: "hersbruck", name: "Hersbruck", bundesland: "Bayern", intro: bayernIntro("Hersbruck"), arbeitsagentur: defaultArbeitsagentur("hersbruck", "Hersbruck") },

  // ─── Baden-Württemberg ─────────────────────────────────────────────────────
  { slug: "karlsruhe", name: "Karlsruhe", bundesland: "Baden-Württemberg", intro: bwIntro("Karlsruhe"), arbeitsagentur: defaultArbeitsagentur("karlsruhe", "Karlsruhe") },
  { slug: "mannheim", name: "Mannheim", bundesland: "Baden-Württemberg", intro: bwIntro("Mannheim"), arbeitsagentur: defaultArbeitsagentur("mannheim", "Mannheim") },
  { slug: "freiburg", name: "Freiburg im Breisgau", bundesland: "Baden-Württemberg", intro: bwIntro("Freiburg im Breisgau"), arbeitsagentur: defaultArbeitsagentur("freiburg", "Freiburg im Breisgau") },
  { slug: "heidelberg", name: "Heidelberg", bundesland: "Baden-Württemberg", intro: bwIntro("Heidelberg"), arbeitsagentur: defaultArbeitsagentur("heidelberg", "Heidelberg") },
  { slug: "heilbronn", name: "Heilbronn", bundesland: "Baden-Württemberg", intro: bwIntro("Heilbronn"), arbeitsagentur: defaultArbeitsagentur("heilbronn", "Heilbronn") },
  { slug: "ulm", name: "Ulm", bundesland: "Baden-Württemberg", intro: bwIntro("Ulm"), arbeitsagentur: defaultArbeitsagentur("ulm", "Ulm") },
  { slug: "pforzheim", name: "Pforzheim", bundesland: "Baden-Württemberg", intro: bwIntro("Pforzheim"), arbeitsagentur: defaultArbeitsagentur("pforzheim", "Pforzheim") },
  { slug: "reutlingen", name: "Reutlingen", bundesland: "Baden-Württemberg", intro: bwIntro("Reutlingen"), arbeitsagentur: defaultArbeitsagentur("reutlingen", "Reutlingen") },
  { slug: "tuebingen", name: "Tübingen", bundesland: "Baden-Württemberg", intro: bwIntro("Tübingen"), arbeitsagentur: defaultArbeitsagentur("tuebingen", "Tübingen") },
  { slug: "konstanz", name: "Konstanz", bundesland: "Baden-Württemberg", intro: bwIntro("Konstanz"), arbeitsagentur: defaultArbeitsagentur("konstanz", "Konstanz") },
  { slug: "ludwigsburg", name: "Ludwigsburg", bundesland: "Baden-Württemberg", intro: bwIntro("Ludwigsburg"), arbeitsagentur: defaultArbeitsagentur("ludwigsburg", "Ludwigsburg") },
  { slug: "goeppingen", name: "Göppingen", bundesland: "Baden-Württemberg", intro: bwIntro("Göppingen"), arbeitsagentur: defaultArbeitsagentur("goeppingen", "Göppingen") },
  { slug: "esslingen", name: "Esslingen am Neckar", bundesland: "Baden-Württemberg", intro: bwIntro("Esslingen am Neckar"), arbeitsagentur: defaultArbeitsagentur("esslingen", "Esslingen am Neckar") },
  { slug: "offenburg", name: "Offenburg", bundesland: "Baden-Württemberg", intro: bwIntro("Offenburg"), arbeitsagentur: defaultArbeitsagentur("offenburg", "Offenburg") },
  { slug: "villingen-schwenningen", name: "Villingen-Schwenningen", bundesland: "Baden-Württemberg", intro: bwIntro("Villingen-Schwenningen"), arbeitsagentur: defaultArbeitsagentur("villingen-schwenningen", "Villingen-Schwenningen") },
  { slug: "aalen", name: "Aalen", bundesland: "Baden-Württemberg", intro: bwIntro("Aalen"), arbeitsagentur: defaultArbeitsagentur("aalen", "Aalen") },
  { slug: "sindelfingen", name: "Sindelfingen", bundesland: "Baden-Württemberg", intro: bwIntro("Sindelfingen"), arbeitsagentur: defaultArbeitsagentur("sindelfingen", "Sindelfingen") },
  { slug: "boeblingen", name: "Böblingen", bundesland: "Baden-Württemberg", intro: bwIntro("Böblingen"), arbeitsagentur: defaultArbeitsagentur("boeblingen", "Böblingen") },
  { slug: "waiblingen", name: "Waiblingen", bundesland: "Baden-Württemberg", intro: bwIntro("Waiblingen"), arbeitsagentur: defaultArbeitsagentur("waiblingen", "Waiblingen") },
  { slug: "backnang", name: "Backnang", bundesland: "Baden-Württemberg", intro: bwIntro("Backnang"), arbeitsagentur: defaultArbeitsagentur("backnang", "Backnang") },
  { slug: "schwäbisch-gmünd", name: "Schwäbisch Gmünd", bundesland: "Baden-Württemberg", intro: bwIntro("Schwäbisch Gmünd"), arbeitsagentur: defaultArbeitsagentur("schwäbisch-gmünd", "Schwäbisch Gmünd") },
  { slug: "schwäbisch-hall", name: "Schwäbisch Hall", bundesland: "Baden-Württemberg", intro: bwIntro("Schwäbisch Hall"), arbeitsagentur: defaultArbeitsagentur("schwäbisch-hall", "Schwäbisch Hall") },
  { slug: "crailsheim", name: "Crailsheim", bundesland: "Baden-Württemberg", intro: bwIntro("Crailsheim"), arbeitsagentur: defaultArbeitsagentur("crailsheim", "Crailsheim") },
  { slug: "bad-mergentheim", name: "Bad Mergentheim", bundesland: "Baden-Württemberg", intro: bwIntro("Bad Mergentheim"), arbeitsagentur: defaultArbeitsagentur("bad-mergentheim", "Bad Mergentheim") },
  { slug: "rastatt", name: "Rastatt", bundesland: "Baden-Württemberg", intro: bwIntro("Rastatt"), arbeitsagentur: defaultArbeitsagentur("rastatt", "Rastatt") },
  { slug: "bruchsal", name: "Bruchsal", bundesland: "Baden-Württemberg", intro: bwIntro("Bruchsal"), arbeitsagentur: defaultArbeitsagentur("bruchsal", "Bruchsal") },
  { slug: "singen", name: "Singen (Hohentwiel)", bundesland: "Baden-Württemberg", intro: bwIntro("Singen"), arbeitsagentur: defaultArbeitsagentur("singen", "Singen (Hohentwiel)") },
  { slug: "loerrach", name: "Lörrach", bundesland: "Baden-Württemberg", intro: bwIntro("Lörrach"), arbeitsagentur: defaultArbeitsagentur("loerrach", "Lörrach") },
  { slug: "biberach", name: "Biberach an der Riß", bundesland: "Baden-Württemberg", intro: bwIntro("Biberach an der Riß"), arbeitsagentur: defaultArbeitsagentur("biberach", "Biberach an der Riß") },
  { slug: "ravensburg", name: "Ravensburg", bundesland: "Baden-Württemberg", intro: bwIntro("Ravensburg"), arbeitsagentur: defaultArbeitsagentur("ravensburg", "Ravensburg") },
  { slug: "friedrichshafen", name: "Friedrichshafen", bundesland: "Baden-Württemberg", intro: bwIntro("Friedrichshafen"), arbeitsagentur: defaultArbeitsagentur("friedrichshafen", "Friedrichshafen") },
  { slug: "ellwangen", name: "Ellwangen (Jagst)", bundesland: "Baden-Württemberg", intro: bwIntro("Ellwangen"), arbeitsagentur: defaultArbeitsagentur("ellwangen", "Ellwangen (Jagst)") },
  { slug: "lahr", name: "Lahr/Schwarzwald", bundesland: "Baden-Württemberg", intro: bwIntro("Lahr"), arbeitsagentur: defaultArbeitsagentur("lahr", "Lahr/Schwarzwald") },
  { slug: "emmendingen", name: "Emmendingen", bundesland: "Baden-Württemberg", intro: bwIntro("Emmendingen"), arbeitsagentur: defaultArbeitsagentur("emmendingen", "Emmendingen") },
  { slug: "mannheim-neckarau", name: "Neckarau", bundesland: "Baden-Württemberg", intro: bwIntro("Neckarau"), arbeitsagentur: defaultArbeitsagentur("mannheim-neckarau", "Neckarau") },
  { slug: "wertheim", name: "Wertheim", bundesland: "Baden-Württemberg", intro: bwIntro("Wertheim"), arbeitsagentur: defaultArbeitsagentur("wertheim", "Wertheim") },
  { slug: "buchen", name: "Buchen (Odenwald)", bundesland: "Baden-Württemberg", intro: bwIntro("Buchen"), arbeitsagentur: defaultArbeitsagentur("buchen", "Buchen (Odenwald)") },
  { slug: "mosbach", name: "Mosbach", bundesland: "Baden-Württemberg", intro: bwIntro("Mosbach"), arbeitsagentur: defaultArbeitsagentur("mosbach", "Mosbach") },
  { slug: "neckarsulm", name: "Neckarsulm", bundesland: "Baden-Württemberg", intro: bwIntro("Neckarsulm"), arbeitsagentur: defaultArbeitsagentur("neckarsulm", "Neckarsulm") },
  { slug: "weinheim", name: "Weinheim", bundesland: "Baden-Württemberg", intro: bwIntro("Weinheim"), arbeitsagentur: defaultArbeitsagentur("weinheim", "Weinheim") },
  { slug: "sinsheim", name: "Sinsheim", bundesland: "Baden-Württemberg", intro: bwIntro("Sinsheim"), arbeitsagentur: defaultArbeitsagentur("sinsheim", "Sinsheim") },
  { slug: "filderstadt", name: "Filderstadt", bundesland: "Baden-Württemberg", intro: bwIntro("Filderstadt"), arbeitsagentur: defaultArbeitsagentur("filderstadt", "Filderstadt") },
  { slug: "leinfelden-echterdingen", name: "Leinfelden-Echterdingen", bundesland: "Baden-Württemberg", intro: bwIntro("Leinfelden-Echterdingen"), arbeitsagentur: defaultArbeitsagentur("leinfelden-echterdingen", "Leinfelden-Echterdingen") },
  { slug: "noerdlingen", name: "Nördlingen", bundesland: "Baden-Württemberg", intro: bwIntro("Nördlingen"), arbeitsagentur: defaultArbeitsagentur("noerdlingen", "Nördlingen") },
  { slug: "heidenheim", name: "Heidenheim an der Brenz", bundesland: "Baden-Württemberg", intro: bwIntro("Heidenheim an der Brenz"), arbeitsagentur: defaultArbeitsagentur("heidenheim", "Heidenheim an der Brenz") },
  { slug: "bietigheim-bissingen", name: "Bietigheim-Bissingen", bundesland: "Baden-Württemberg", intro: bwIntro("Bietigheim-Bissingen"), arbeitsagentur: defaultArbeitsagentur("bietigheim-bissingen", "Bietigheim-Bissingen") },
  { slug: "kirchheim-teck", name: "Kirchheim unter Teck", bundesland: "Baden-Württemberg", intro: bwIntro("Kirchheim unter Teck"), arbeitsagentur: defaultArbeitsagentur("kirchheim-teck", "Kirchheim unter Teck") },
  { slug: "metzingen", name: "Metzingen", bundesland: "Baden-Württemberg", intro: bwIntro("Metzingen"), arbeitsagentur: defaultArbeitsagentur("metzingen", "Metzingen") },
  { slug: "nagold", name: "Nagold", bundesland: "Baden-Württemberg", intro: bwIntro("Nagold"), arbeitsagentur: defaultArbeitsagentur("nagold", "Nagold") },
  { slug: "horb", name: "Horb am Neckar", bundesland: "Baden-Württemberg", intro: bwIntro("Horb am Neckar"), arbeitsagentur: defaultArbeitsagentur("horb", "Horb am Neckar") },
  { slug: "freudenstadt", name: "Freudenstadt", bundesland: "Baden-Württemberg", intro: bwIntro("Freudenstadt"), arbeitsagentur: defaultArbeitsagentur("freudenstadt", "Freudenstadt") },
  { slug: "rottweil", name: "Rottweil", bundesland: "Baden-Württemberg", intro: bwIntro("Rottweil"), arbeitsagentur: defaultArbeitsagentur("rottweil", "Rottweil") },
  { slug: "balingen", name: "Balingen", bundesland: "Baden-Württemberg", intro: bwIntro("Balingen"), arbeitsagentur: defaultArbeitsagentur("balingen", "Balingen") },
  { slug: "albstadt", name: "Albstadt", bundesland: "Baden-Württemberg", intro: bwIntro("Albstadt"), arbeitsagentur: defaultArbeitsagentur("albstadt", "Albstadt") },
  { slug: "sigmaringen", name: "Sigmaringen", bundesland: "Baden-Württemberg", intro: bwIntro("Sigmaringen"), arbeitsagentur: defaultArbeitsagentur("sigmaringen", "Sigmaringen") },
  { slug: "überlingen", name: "Überlingen", bundesland: "Baden-Württemberg", intro: bwIntro("Überlingen"), arbeitsagentur: defaultArbeitsagentur("überlingen", "Überlingen") },
  { slug: "stockach", name: "Stockach", bundesland: "Baden-Württemberg", intro: bwIntro("Stockach"), arbeitsagentur: defaultArbeitsagentur("stockach", "Stockach") },
  { slug: "donaueschingen", name: "Donaueschingen", bundesland: "Baden-Württemberg", intro: bwIntro("Donaueschingen"), arbeitsagentur: defaultArbeitsagentur("donaueschingen", "Donaueschingen") },
  { slug: "rheinfelden", name: "Rheinfelden (Baden)", bundesland: "Baden-Württemberg", intro: bwIntro("Rheinfelden"), arbeitsagentur: defaultArbeitsagentur("rheinfelden", "Rheinfelden (Baden)") },
  { slug: "bad-saeckingen", name: "Bad Säckingen", bundesland: "Baden-Württemberg", intro: bwIntro("Bad Säckingen"), arbeitsagentur: defaultArbeitsagentur("bad-saeckingen", "Bad Säckingen") },
  { slug: "waldshut-tiengen", name: "Waldshut-Tiengen", bundesland: "Baden-Württemberg", intro: bwIntro("Waldshut-Tiengen"), arbeitsagentur: defaultArbeitsagentur("waldshut-tiengen", "Waldshut-Tiengen") },

  // ─── Nordrhein-Westfalen ───────────────────────────────────────────────────
  { slug: "aachen", name: "Aachen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Aachen"), arbeitsagentur: defaultArbeitsagentur("aachen", "Aachen") },
  { slug: "bielefeld", name: "Bielefeld", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Bielefeld"), arbeitsagentur: defaultArbeitsagentur("bielefeld", "Bielefeld") },
  { slug: "bochum", name: "Bochum", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Bochum"), arbeitsagentur: defaultArbeitsagentur("bochum", "Bochum") },
  { slug: "bonn", name: "Bonn", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Bonn"), arbeitsagentur: defaultArbeitsagentur("bonn", "Bonn") },
  { slug: "bottrop", name: "Bottrop", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Bottrop"), arbeitsagentur: defaultArbeitsagentur("bottrop", "Bottrop") },
  { slug: "gelsenkirchen", name: "Gelsenkirchen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Gelsenkirchen"), arbeitsagentur: defaultArbeitsagentur("gelsenkirchen", "Gelsenkirchen") },
  { slug: "hagen", name: "Hagen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Hagen"), arbeitsagentur: defaultArbeitsagentur("hagen", "Hagen") },
  { slug: "hamm", name: "Hamm", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Hamm"), arbeitsagentur: defaultArbeitsagentur("hamm", "Hamm") },
  { slug: "herne", name: "Herne", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Herne"), arbeitsagentur: defaultArbeitsagentur("herne", "Herne") },
  { slug: "krefeld", name: "Krefeld", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Krefeld"), arbeitsagentur: defaultArbeitsagentur("krefeld", "Krefeld") },
  { slug: "leverkusen", name: "Leverkusen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Leverkusen"), arbeitsagentur: defaultArbeitsagentur("leverkusen", "Leverkusen") },
  { slug: "moenchengladbach", name: "Mönchengladbach", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Mönchengladbach"), arbeitsagentur: defaultArbeitsagentur("moenchengladbach", "Mönchengladbach") },
  { slug: "muelheim", name: "Mülheim an der Ruhr", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Mülheim an der Ruhr"), arbeitsagentur: defaultArbeitsagentur("muelheim", "Mülheim an der Ruhr") },
  { slug: "muenster", name: "Münster", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Münster"), arbeitsagentur: defaultArbeitsagentur("muenster", "Münster") },
  { slug: "oberhausen", name: "Oberhausen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Oberhausen"), arbeitsagentur: defaultArbeitsagentur("oberhausen", "Oberhausen") },
  { slug: "paderborn", name: "Paderborn", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Paderborn"), arbeitsagentur: defaultArbeitsagentur("paderborn", "Paderborn") },
  { slug: "wuppertal", name: "Wuppertal", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Wuppertal"), arbeitsagentur: defaultArbeitsagentur("wuppertal", "Wuppertal") },
  { slug: "solingen", name: "Solingen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Solingen"), arbeitsagentur: defaultArbeitsagentur("solingen", "Solingen") },
  { slug: "remscheid", name: "Remscheid", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Remscheid"), arbeitsagentur: defaultArbeitsagentur("remscheid", "Remscheid") },
  { slug: "siegen", name: "Siegen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Siegen"), arbeitsagentur: defaultArbeitsagentur("siegen", "Siegen") },
  { slug: "witten", name: "Witten", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Witten"), arbeitsagentur: defaultArbeitsagentur("witten", "Witten") },
  { slug: "iserlohn", name: "Iserlohn", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Iserlohn"), arbeitsagentur: defaultArbeitsagentur("iserlohn", "Iserlohn") },
  { slug: "lüdenscheid", name: "Lüdenscheid", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Lüdenscheid"), arbeitsagentur: defaultArbeitsagentur("lüdenscheid", "Lüdenscheid") },
  { slug: "gütersloh", name: "Gütersloh", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Gütersloh"), arbeitsagentur: defaultArbeitsagentur("gütersloh", "Gütersloh") },
  { slug: "bielefeld-brackwede", name: "Brackwede", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Brackwede"), arbeitsagentur: defaultArbeitsagentur("bielefeld-brackwede", "Brackwede") },
  { slug: "herford", name: "Herford", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Herford"), arbeitsagentur: defaultArbeitsagentur("herford", "Herford") },
  { slug: "minden", name: "Minden", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Minden"), arbeitsagentur: defaultArbeitsagentur("minden", "Minden") },
  { slug: "detmold", name: "Detmold", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Detmold"), arbeitsagentur: defaultArbeitsagentur("detmold", "Detmold") },
  { slug: "lübbecke", name: "Lübbecke", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Lübbecke"), arbeitsagentur: defaultArbeitsagentur("lübbecke", "Lübbecke") },
  { slug: "recklinghausen", name: "Recklinghausen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Recklinghausen"), arbeitsagentur: defaultArbeitsagentur("recklinghausen", "Recklinghausen") },
  { slug: "geldern", name: "Geldern", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Geldern"), arbeitsagentur: defaultArbeitsagentur("geldern", "Geldern") },
  { slug: "kleve", name: "Kleve", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Kleve"), arbeitsagentur: defaultArbeitsagentur("kleve", "Kleve") },
  { slug: "wesel", name: "Wesel", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Wesel"), arbeitsagentur: defaultArbeitsagentur("wesel", "Wesel") },
  { slug: "moers", name: "Moers", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Moers"), arbeitsagentur: defaultArbeitsagentur("moers", "Moers") },
  { slug: "neuss", name: "Neuss", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Neuss"), arbeitsagentur: defaultArbeitsagentur("neuss", "Neuss") },
  { slug: "dormagen", name: "Dormagen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Dormagen"), arbeitsagentur: defaultArbeitsagentur("dormagen", "Dormagen") },
  { slug: "grevenbroich", name: "Grevenbroich", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Grevenbroich"), arbeitsagentur: defaultArbeitsagentur("grevenbroich", "Grevenbroich") },
  { slug: "viersen", name: "Viersen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Viersen"), arbeitsagentur: defaultArbeitsagentur("viersen", "Viersen") },
  { slug: "bergheim", name: "Bergheim", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Bergheim"), arbeitsagentur: defaultArbeitsagentur("bergheim", "Bergheim") },
  { slug: "jülich", name: "Jülich", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Jülich"), arbeitsagentur: defaultArbeitsagentur("jülich", "Jülich") },
  { slug: "dueren", name: "Düren", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Düren"), arbeitsagentur: defaultArbeitsagentur("dueren", "Düren") },
  { slug: "euskirchen", name: "Euskirchen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Euskirchen"), arbeitsagentur: defaultArbeitsagentur("euskirchen", "Euskirchen") },
  { slug: "bonn-beuel", name: "Beuel", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Beuel"), arbeitsagentur: defaultArbeitsagentur("bonn-beuel", "Beuel") },
  { slug: "meschede", name: "Meschede", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Meschede"), arbeitsagentur: defaultArbeitsagentur("meschede", "Meschede") },
  { slug: "arnsberg", name: "Arnsberg", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Arnsberg"), arbeitsagentur: defaultArbeitsagentur("arnsberg", "Arnsberg") },
  { slug: "olpe", name: "Olpe", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Olpe"), arbeitsagentur: defaultArbeitsagentur("olpe", "Olpe") },
  { slug: "attendorn", name: "Attendorn", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Attendorn"), arbeitsagentur: defaultArbeitsagentur("attendorn", "Attendorn") },
  { slug: "lippstadt", name: "Lippstadt", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Lippstadt"), arbeitsagentur: defaultArbeitsagentur("lippstadt", "Lippstadt") },
  { slug: "soest", name: "Soest", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Soest"), arbeitsagentur: defaultArbeitsagentur("soest", "Soest") },
  { slug: "unna", name: "Unna", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Unna"), arbeitsagentur: defaultArbeitsagentur("unna", "Unna") },
  { slug: "hagen-wehringhausen", name: "Wehringhausen", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Wehringhausen"), arbeitsagentur: defaultArbeitsagentur("hagen-wehringhausen", "Wehringhausen") },
  { slug: "winterberg", name: "Winterberg", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Winterberg"), arbeitsagentur: defaultArbeitsagentur("winterberg", "Winterberg") },
  { slug: "marsberg", name: "Marsberg", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Marsberg"), arbeitsagentur: defaultArbeitsagentur("marsberg", "Marsberg") },
  { slug: "gelsenkirchen-buer", name: "Buer", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Buer"), arbeitsagentur: defaultArbeitsagentur("gelsenkirchen-buer", "Buer") },
  { slug: "castrop-rauxel", name: "Castrop-Rauxel", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Castrop-Rauxel"), arbeitsagentur: defaultArbeitsagentur("castrop-rauxel", "Castrop-Rauxel") },
  { slug: "marl", name: "Marl", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Marl"), arbeitsagentur: defaultArbeitsagentur("marl", "Marl") },
  { slug: "gladbeck", name: "Gladbeck", bundesland: "Nordrhein-Westfalen", intro: nrwIntro("Gladbeck"), arbeitsagentur: defaultArbeitsagentur("gladbeck", "Gladbeck") },

  // ─── Niedersachsen ─────────────────────────────────────────────────────────
  { slug: "braunschweig", name: "Braunschweig", bundesland: "Niedersachsen", intro: niedersachsenIntro("Braunschweig"), arbeitsagentur: defaultArbeitsagentur("braunschweig", "Braunschweig") },
  { slug: "oldenburg", name: "Oldenburg", bundesland: "Niedersachsen", intro: niedersachsenIntro("Oldenburg"), arbeitsagentur: defaultArbeitsagentur("oldenburg", "Oldenburg") },
  { slug: "osnabrück", name: "Osnabrück", bundesland: "Niedersachsen", intro: niedersachsenIntro("Osnabrück"), arbeitsagentur: defaultArbeitsagentur("osnabrück", "Osnabrück") },
  { slug: "wolfsburg", name: "Wolfsburg", bundesland: "Niedersachsen", intro: niedersachsenIntro("Wolfsburg"), arbeitsagentur: defaultArbeitsagentur("wolfsburg", "Wolfsburg") },
  { slug: "göttingen", name: "Göttingen", bundesland: "Niedersachsen", intro: niedersachsenIntro("Göttingen"), arbeitsagentur: defaultArbeitsagentur("göttingen", "Göttingen") },
  { slug: "salzgitter", name: "Salzgitter", bundesland: "Niedersachsen", intro: niedersachsenIntro("Salzgitter"), arbeitsagentur: defaultArbeitsagentur("salzgitter", "Salzgitter") },
  { slug: "hildesheim", name: "Hildesheim", bundesland: "Niedersachsen", intro: niedersachsenIntro("Hildesheim"), arbeitsagentur: defaultArbeitsagentur("hildesheim", "Hildesheim") },
  { slug: "lüneburg", name: "Lüneburg", bundesland: "Niedersachsen", intro: niedersachsenIntro("Lüneburg"), arbeitsagentur: defaultArbeitsagentur("lüneburg", "Lüneburg") },
  { slug: "wilhelmshaven", name: "Wilhelmshaven", bundesland: "Niedersachsen", intro: niedersachsenIntro("Wilhelmshaven"), arbeitsagentur: defaultArbeitsagentur("wilhelmshaven", "Wilhelmshaven") },
  { slug: "delmenhorst", name: "Delmenhorst", bundesland: "Niedersachsen", intro: niedersachsenIntro("Delmenhorst"), arbeitsagentur: defaultArbeitsagentur("delmenhorst", "Delmenhorst") },
  { slug: "emden", name: "Emden", bundesland: "Niedersachsen", intro: niedersachsenIntro("Emden"), arbeitsagentur: defaultArbeitsagentur("emden", "Emden") },
  { slug: "peine", name: "Peine", bundesland: "Niedersachsen", intro: niedersachsenIntro("Peine"), arbeitsagentur: defaultArbeitsagentur("peine", "Peine") },
  { slug: "wolfenbüttel", name: "Wolfenbüttel", bundesland: "Niedersachsen", intro: niedersachsenIntro("Wolfenbüttel"), arbeitsagentur: defaultArbeitsagentur("wolfenbüttel", "Wolfenbüttel") },
  { slug: "hameln", name: "Hameln", bundesland: "Niedersachsen", intro: niedersachsenIntro("Hameln"), arbeitsagentur: defaultArbeitsagentur("hameln", "Hameln") },
  { slug: "celle", name: "Celle", bundesland: "Niedersachsen", intro: niedersachsenIntro("Celle"), arbeitsagentur: defaultArbeitsagentur("celle", "Celle") },
  { slug: "cuxhaven", name: "Cuxhaven", bundesland: "Niedersachsen", intro: niedersachsenIntro("Cuxhaven"), arbeitsagentur: defaultArbeitsagentur("cuxhaven", "Cuxhaven") },
  { slug: "stade", name: "Stade", bundesland: "Niedersachsen", intro: niedersachsenIntro("Stade"), arbeitsagentur: defaultArbeitsagentur("stade", "Stade") },
  { slug: "gifhorn", name: "Gifhorn", bundesland: "Niedersachsen", intro: niedersachsenIntro("Gifhorn"), arbeitsagentur: defaultArbeitsagentur("gifhorn", "Gifhorn") },
  { slug: "northeim", name: "Northeim", bundesland: "Niedersachsen", intro: niedersachsenIntro("Northeim"), arbeitsagentur: defaultArbeitsagentur("northeim", "Northeim") },
  { slug: "goslar", name: "Goslar", bundesland: "Niedersachsen", intro: niedersachsenIntro("Goslar"), arbeitsagentur: defaultArbeitsagentur("goslar", "Goslar") },
  { slug: "uelzen", name: "Uelzen", bundesland: "Niedersachsen", intro: niedersachsenIntro("Uelzen"), arbeitsagentur: defaultArbeitsagentur("uelzen", "Uelzen") },
  { slug: "bueckeburg", name: "Bückeburg", bundesland: "Niedersachsen", intro: niedersachsenIntro("Bückeburg"), arbeitsagentur: defaultArbeitsagentur("bueckeburg", "Bückeburg") },
  { slug: "bad-pyrmont", name: "Bad Pyrmont", bundesland: "Niedersachsen", intro: niedersachsenIntro("Bad Pyrmont"), arbeitsagentur: defaultArbeitsagentur("bad-pyrmont", "Bad Pyrmont") },
  { slug: "nienburg", name: "Nienburg (Weser)", bundesland: "Niedersachsen", intro: niedersachsenIntro("Nienburg"), arbeitsagentur: defaultArbeitsagentur("nienburg", "Nienburg (Weser)") },
  { slug: "diepholz", name: "Diepholz", bundesland: "Niedersachsen", intro: niedersachsenIntro("Diepholz"), arbeitsagentur: defaultArbeitsagentur("diepholz", "Diepholz") },
  { slug: "nordhorn", name: "Nordhorn", bundesland: "Niedersachsen", intro: niedersachsenIntro("Nordhorn"), arbeitsagentur: defaultArbeitsagentur("nordhorn", "Nordhorn") },
  { slug: "lingen", name: "Lingen (Ems)", bundesland: "Niedersachsen", intro: niedersachsenIntro("Lingen"), arbeitsagentur: defaultArbeitsagentur("lingen", "Lingen (Ems)") },
  { slug: "meppen", name: "Meppen", bundesland: "Niedersachsen", intro: niedersachsenIntro("Meppen"), arbeitsagentur: defaultArbeitsagentur("meppen", "Meppen") },
  { slug: "papenburg", name: "Papenburg", bundesland: "Niedersachsen", intro: niedersachsenIntro("Papenburg"), arbeitsagentur: defaultArbeitsagentur("papenburg", "Papenburg") },
  { slug: "bad-gandersheim", name: "Bad Gandersheim", bundesland: "Niedersachsen", intro: niedersachsenIntro("Bad Gandersheim"), arbeitsagentur: defaultArbeitsagentur("bad-gandersheim", "Bad Gandersheim") },
  { slug: "holzminden", name: "Holzminden", bundesland: "Niedersachsen", intro: niedersachsenIntro("Holzminden"), arbeitsagentur: defaultArbeitsagentur("holzminden", "Holzminden") },
  { slug: "duderstadt", name: "Duderstadt", bundesland: "Niedersachsen", intro: niedersachsenIntro("Duderstadt"), arbeitsagentur: defaultArbeitsagentur("duderstadt", "Duderstadt") },

  // ─── Hessen ────────────────────────────────────────────────────────────────
  { slug: "wiesbaden", name: "Wiesbaden", bundesland: "Hessen", intro: hessenIntro("Wiesbaden"), arbeitsagentur: defaultArbeitsagentur("wiesbaden", "Wiesbaden") },
  { slug: "kassel", name: "Kassel", bundesland: "Hessen", intro: hessenIntro("Kassel"), arbeitsagentur: defaultArbeitsagentur("kassel", "Kassel") },
  { slug: "darmstadt", name: "Darmstadt", bundesland: "Hessen", intro: hessenIntro("Darmstadt"), arbeitsagentur: defaultArbeitsagentur("darmstadt", "Darmstadt") },
  { slug: "offenbach", name: "Offenbach am Main", bundesland: "Hessen", intro: hessenIntro("Offenbach am Main"), arbeitsagentur: defaultArbeitsagentur("offenbach", "Offenbach am Main") },
  { slug: "giessen", name: "Gießen", bundesland: "Hessen", intro: hessenIntro("Gießen"), arbeitsagentur: defaultArbeitsagentur("giessen", "Gießen") },
  { slug: "fulda", name: "Fulda", bundesland: "Hessen", intro: hessenIntro("Fulda"), arbeitsagentur: defaultArbeitsagentur("fulda", "Fulda") },
  { slug: "marburg", name: "Marburg", bundesland: "Hessen", intro: hessenIntro("Marburg"), arbeitsagentur: defaultArbeitsagentur("marburg", "Marburg") },
  { slug: "hanau", name: "Hanau", bundesland: "Hessen", intro: hessenIntro("Hanau"), arbeitsagentur: defaultArbeitsagentur("hanau", "Hanau") },
  { slug: "rüsselsheim", name: "Rüsselsheim am Main", bundesland: "Hessen", intro: hessenIntro("Rüsselsheim am Main"), arbeitsagentur: defaultArbeitsagentur("rüsselsheim", "Rüsselsheim am Main") },
  { slug: "bad-homburg", name: "Bad Homburg vor der Höhe", bundesland: "Hessen", intro: hessenIntro("Bad Homburg vor der Höhe"), arbeitsagentur: defaultArbeitsagentur("bad-homburg", "Bad Homburg vor der Höhe") },
  { slug: "wetzlar", name: "Wetzlar", bundesland: "Hessen", intro: hessenIntro("Wetzlar"), arbeitsagentur: defaultArbeitsagentur("wetzlar", "Wetzlar") },
  { slug: "limburg", name: "Limburg an der Lahn", bundesland: "Hessen", intro: hessenIntro("Limburg an der Lahn"), arbeitsagentur: defaultArbeitsagentur("limburg", "Limburg an der Lahn") },
  { slug: "bensheim", name: "Bensheim", bundesland: "Hessen", intro: hessenIntro("Bensheim"), arbeitsagentur: defaultArbeitsagentur("bensheim", "Bensheim") },
  { slug: "viernheim", name: "Viernheim", bundesland: "Hessen", intro: hessenIntro("Viernheim"), arbeitsagentur: defaultArbeitsagentur("viernheim", "Viernheim") },
  { slug: "bad-nauheim", name: "Bad Nauheim", bundesland: "Hessen", intro: hessenIntro("Bad Nauheim"), arbeitsagentur: defaultArbeitsagentur("bad-nauheim", "Bad Nauheim") },
  { slug: "friedberg-hessen", name: "Friedberg (Hessen)", bundesland: "Hessen", intro: hessenIntro("Friedberg"), arbeitsagentur: defaultArbeitsagentur("friedberg-hessen", "Friedberg (Hessen)") },
  { slug: "bad-vilbel", name: "Bad Vilbel", bundesland: "Hessen", intro: hessenIntro("Bad Vilbel"), arbeitsagentur: defaultArbeitsagentur("bad-vilbel", "Bad Vilbel") },
  { slug: "langen", name: "Langen (Hessen)", bundesland: "Hessen", intro: hessenIntro("Langen"), arbeitsagentur: defaultArbeitsagentur("langen", "Langen (Hessen)") },
  { slug: "dreieich", name: "Dreieich", bundesland: "Hessen", intro: hessenIntro("Dreieich"), arbeitsagentur: defaultArbeitsagentur("dreieich", "Dreieich") },
  { slug: "dietzenbach", name: "Dietzenbach", bundesland: "Hessen", intro: hessenIntro("Dietzenbach"), arbeitsagentur: defaultArbeitsagentur("dietzenbach", "Dietzenbach") },
  { slug: "erbach-odenwald", name: "Erbach (Odenwald)", bundesland: "Hessen", intro: hessenIntro("Erbach"), arbeitsagentur: defaultArbeitsagentur("erbach-odenwald", "Erbach (Odenwald)") },
  { slug: "hersfeld", name: "Bad Hersfeld", bundesland: "Hessen", intro: hessenIntro("Bad Hersfeld"), arbeitsagentur: defaultArbeitsagentur("hersfeld", "Bad Hersfeld") },
  { slug: "eschwege", name: "Eschwege", bundesland: "Hessen", intro: hessenIntro("Eschwege"), arbeitsagentur: defaultArbeitsagentur("eschwege", "Eschwege") },
  { slug: "korbach", name: "Korbach", bundesland: "Hessen", intro: hessenIntro("Korbach"), arbeitsagentur: defaultArbeitsagentur("korbach", "Korbach") },
  { slug: "hofgeismar", name: "Hofgeismar", bundesland: "Hessen", intro: hessenIntro("Hofgeismar"), arbeitsagentur: defaultArbeitsagentur("hofgeismar", "Hofgeismar") },
  { slug: "fritzlar", name: "Fritzlar", bundesland: "Hessen", intro: hessenIntro("Fritzlar"), arbeitsagentur: defaultArbeitsagentur("fritzlar", "Fritzlar") },
  { slug: "büdingen", name: "Büdingen", bundesland: "Hessen", intro: hessenIntro("Büdingen"), arbeitsagentur: defaultArbeitsagentur("büdingen", "Büdingen") },
  { slug: "schlüchtern", name: "Schlüchtern", bundesland: "Hessen", intro: hessenIntro("Schlüchtern"), arbeitsagentur: defaultArbeitsagentur("schlüchtern", "Schlüchtern") },
  { slug: "herborn", name: "Herborn", bundesland: "Hessen", intro: hessenIntro("Herborn"), arbeitsagentur: defaultArbeitsagentur("herborn", "Herborn") },
  { slug: "dillenburg", name: "Dillenburg", bundesland: "Hessen", intro: hessenIntro("Dillenburg"), arbeitsagentur: defaultArbeitsagentur("dillenburg", "Dillenburg") },

  // ─── Sachsen ───────────────────────────────────────────────────────────────
  { slug: "chemnitz", name: "Chemnitz", bundesland: "Sachsen", intro: sachsenIntro("Chemnitz"), arbeitsagentur: defaultArbeitsagentur("chemnitz", "Chemnitz") },
  { slug: "zwickau", name: "Zwickau", bundesland: "Sachsen", intro: sachsenIntro("Zwickau"), arbeitsagentur: defaultArbeitsagentur("zwickau", "Zwickau") },
  { slug: "plauen", name: "Plauen", bundesland: "Sachsen", intro: sachsenIntro("Plauen"), arbeitsagentur: defaultArbeitsagentur("plauen", "Plauen") },
  { slug: "goerlitz", name: "Görlitz", bundesland: "Sachsen", intro: sachsenIntro("Görlitz"), arbeitsagentur: defaultArbeitsagentur("goerlitz", "Görlitz") },
  { slug: "hoyerswerda", name: "Hoyerswerda", bundesland: "Sachsen", intro: sachsenIntro("Hoyerswerda"), arbeitsagentur: defaultArbeitsagentur("hoyerswerda", "Hoyerswerda") },
  { slug: "bautzen", name: "Bautzen", bundesland: "Sachsen", intro: sachsenIntro("Bautzen"), arbeitsagentur: defaultArbeitsagentur("bautzen", "Bautzen") },
  { slug: "pirna", name: "Pirna", bundesland: "Sachsen", intro: sachsenIntro("Pirna"), arbeitsagentur: defaultArbeitsagentur("pirna", "Pirna") },
  { slug: "radebeul", name: "Radebeul", bundesland: "Sachsen", intro: sachsenIntro("Radebeul"), arbeitsagentur: defaultArbeitsagentur("radebeul", "Radebeul") },
  { slug: "freital", name: "Freital", bundesland: "Sachsen", intro: sachsenIntro("Freital"), arbeitsagentur: defaultArbeitsagentur("freital", "Freital") },
  { slug: "meissen", name: "Meißen", bundesland: "Sachsen", intro: sachsenIntro("Meißen"), arbeitsagentur: defaultArbeitsagentur("meissen", "Meißen") },
  { slug: "riesa", name: "Riesa", bundesland: "Sachsen", intro: sachsenIntro("Riesa"), arbeitsagentur: defaultArbeitsagentur("riesa", "Riesa") },
  { slug: "torgau", name: "Torgau", bundesland: "Sachsen", intro: sachsenIntro("Torgau"), arbeitsagentur: defaultArbeitsagentur("torgau", "Torgau") },
  { slug: "delitzsch", name: "Delitzsch", bundesland: "Sachsen", intro: sachsenIntro("Delitzsch"), arbeitsagentur: defaultArbeitsagentur("delitzsch", "Delitzsch") },
  { slug: "grimma", name: "Grimma", bundesland: "Sachsen", intro: sachsenIntro("Grimma"), arbeitsagentur: defaultArbeitsagentur("grimma", "Grimma") },
  { slug: "auerbach-vogtland", name: "Auerbach/Vogtl.", bundesland: "Sachsen", intro: sachsenIntro("Auerbach/Vogtl."), arbeitsagentur: defaultArbeitsagentur("auerbach-vogtland", "Auerbach/Vogtl.") },
  { slug: "annaberg-buchholz", name: "Annaberg-Buchholz", bundesland: "Sachsen", intro: sachsenIntro("Annaberg-Buchholz"), arbeitsagentur: defaultArbeitsagentur("annaberg-buchholz", "Annaberg-Buchholz") },
  { slug: "stollberg", name: "Stollberg/Erzgeb.", bundesland: "Sachsen", intro: sachsenIntro("Stollberg"), arbeitsagentur: defaultArbeitsagentur("stollberg", "Stollberg/Erzgeb.") },
  { slug: "freiberg", name: "Freiberg", bundesland: "Sachsen", intro: sachsenIntro("Freiberg"), arbeitsagentur: defaultArbeitsagentur("freiberg", "Freiberg") },
  { slug: "mittweida", name: "Mittweida", bundesland: "Sachsen", intro: sachsenIntro("Mittweida"), arbeitsagentur: defaultArbeitsagentur("mittweida", "Mittweida") },
  { slug: "döbeln", name: "Döbeln", bundesland: "Sachsen", intro: sachsenIntro("Döbeln"), arbeitsagentur: defaultArbeitsagentur("döbeln", "Döbeln") },

  // ─── Brandenburg ──────────────────────────────────────────────────────────
  { slug: "potsdam", name: "Potsdam", bundesland: "Brandenburg", intro: brandenburgIntro("Potsdam"), arbeitsagentur: defaultArbeitsagentur("potsdam", "Potsdam") },
  { slug: "cottbus", name: "Cottbus", bundesland: "Brandenburg", intro: brandenburgIntro("Cottbus"), arbeitsagentur: defaultArbeitsagentur("cottbus", "Cottbus") },
  { slug: "frankfurt-oder", name: "Frankfurt (Oder)", bundesland: "Brandenburg", intro: brandenburgIntro("Frankfurt (Oder)"), arbeitsagentur: defaultArbeitsagentur("frankfurt-oder", "Frankfurt (Oder)") },
  { slug: "oranienburg", name: "Oranienburg", bundesland: "Brandenburg", intro: brandenburgIntro("Oranienburg"), arbeitsagentur: defaultArbeitsagentur("oranienburg", "Oranienburg") },
  { slug: "eberswalde", name: "Eberswalde", bundesland: "Brandenburg", intro: brandenburgIntro("Eberswalde"), arbeitsagentur: defaultArbeitsagentur("eberswalde", "Eberswalde") },
  { slug: "neuruppin", name: "Neuruppin", bundesland: "Brandenburg", intro: brandenburgIntro("Neuruppin"), arbeitsagentur: defaultArbeitsagentur("neuruppin", "Neuruppin") },
  { slug: "prenzlau", name: "Prenzlau", bundesland: "Brandenburg", intro: brandenburgIntro("Prenzlau"), arbeitsagentur: defaultArbeitsagentur("prenzlau", "Prenzlau") },
  { slug: "rathenow", name: "Rathenow", bundesland: "Brandenburg", intro: brandenburgIntro("Rathenow"), arbeitsagentur: defaultArbeitsagentur("rathenow", "Rathenow") },
  { slug: "senftenberg", name: "Senftenberg", bundesland: "Brandenburg", intro: brandenburgIntro("Senftenberg"), arbeitsagentur: defaultArbeitsagentur("senftenberg", "Senftenberg") },
  { slug: "guben", name: "Guben", bundesland: "Brandenburg", intro: brandenburgIntro("Guben"), arbeitsagentur: defaultArbeitsagentur("guben", "Guben") },
  { slug: "spremberg", name: "Spremberg", bundesland: "Brandenburg", intro: brandenburgIntro("Spremberg"), arbeitsagentur: defaultArbeitsagentur("spremberg", "Spremberg") },
  { slug: "luckenwalde", name: "Luckenwalde", bundesland: "Brandenburg", intro: brandenburgIntro("Luckenwalde"), arbeitsagentur: defaultArbeitsagentur("luckenwalde", "Luckenwalde") },
  { slug: "werder-havel", name: "Werder (Havel)", bundesland: "Brandenburg", intro: brandenburgIntro("Werder (Havel)"), arbeitsagentur: defaultArbeitsagentur("werder-havel", "Werder (Havel)") },
  { slug: "bernau-berlin", name: "Bernau bei Berlin", bundesland: "Brandenburg", intro: brandenburgIntro("Bernau bei Berlin"), arbeitsagentur: defaultArbeitsagentur("bernau-berlin", "Bernau bei Berlin") },
  { slug: "strausberg", name: "Strausberg", bundesland: "Brandenburg", intro: brandenburgIntro("Strausberg"), arbeitsagentur: defaultArbeitsagentur("strausberg", "Strausberg") },

  // ─── Thüringen ─────────────────────────────────────────────────────────────
  { slug: "erfurt", name: "Erfurt", bundesland: "Thüringen", intro: thueringenIntro("Erfurt"), arbeitsagentur: defaultArbeitsagentur("erfurt", "Erfurt") },
  { slug: "jena", name: "Jena", bundesland: "Thüringen", intro: thueringenIntro("Jena"), arbeitsagentur: defaultArbeitsagentur("jena", "Jena") },
  { slug: "gera", name: "Gera", bundesland: "Thüringen", intro: thueringenIntro("Gera"), arbeitsagentur: defaultArbeitsagentur("gera", "Gera") },
  { slug: "weimar", name: "Weimar", bundesland: "Thüringen", intro: thueringenIntro("Weimar"), arbeitsagentur: defaultArbeitsagentur("weimar", "Weimar") },
  { slug: "eisenach", name: "Eisenach", bundesland: "Thüringen", intro: thueringenIntro("Eisenach"), arbeitsagentur: defaultArbeitsagentur("eisenach", "Eisenach") },
  { slug: "gotha", name: "Gotha", bundesland: "Thüringen", intro: thueringenIntro("Gotha"), arbeitsagentur: defaultArbeitsagentur("gotha", "Gotha") },
  { slug: "nordhausen", name: "Nordhausen", bundesland: "Thüringen", intro: thueringenIntro("Nordhausen"), arbeitsagentur: defaultArbeitsagentur("nordhausen", "Nordhausen") },
  { slug: "mühlhausen", name: "Mühlhausen/Thür.", bundesland: "Thüringen", intro: thueringenIntro("Mühlhausen"), arbeitsagentur: defaultArbeitsagentur("mühlhausen", "Mühlhausen/Thür.") },
  { slug: "suhl", name: "Suhl", bundesland: "Thüringen", intro: thueringenIntro("Suhl"), arbeitsagentur: defaultArbeitsagentur("suhl", "Suhl") },
  { slug: "altenburg", name: "Altenburg", bundesland: "Thüringen", intro: thueringenIntro("Altenburg"), arbeitsagentur: defaultArbeitsagentur("altenburg", "Altenburg") },
  { slug: "saalfeld", name: "Saalfeld/Saale", bundesland: "Thüringen", intro: thueringenIntro("Saalfeld"), arbeitsagentur: defaultArbeitsagentur("saalfeld", "Saalfeld/Saale") },
  { slug: "sonneberg", name: "Sonneberg", bundesland: "Thüringen", intro: thueringenIntro("Sonneberg"), arbeitsagentur: defaultArbeitsagentur("sonneberg", "Sonneberg") },
  { slug: "ilmenau", name: "Ilmenau", bundesland: "Thüringen", intro: thueringenIntro("Ilmenau"), arbeitsagentur: defaultArbeitsagentur("ilmenau", "Ilmenau") },
  { slug: "arnstadt", name: "Arnstadt", bundesland: "Thüringen", intro: thueringenIntro("Arnstadt"), arbeitsagentur: defaultArbeitsagentur("arnstadt", "Arnstadt") },
  { slug: "apolda", name: "Apolda", bundesland: "Thüringen", intro: thueringenIntro("Apolda"), arbeitsagentur: defaultArbeitsagentur("apolda", "Apolda") },
  { slug: "bad-salzungen", name: "Bad Salzungen", bundesland: "Thüringen", intro: thueringenIntro("Bad Salzungen"), arbeitsagentur: defaultArbeitsagentur("bad-salzungen", "Bad Salzungen") },
  { slug: "meiningen", name: "Meiningen", bundesland: "Thüringen", intro: thueringenIntro("Meiningen"), arbeitsagentur: defaultArbeitsagentur("meiningen", "Meiningen") },
  { slug: "hildburghausen", name: "Hildburghausen", bundesland: "Thüringen", intro: thueringenIntro("Hildburghausen"), arbeitsagentur: defaultArbeitsagentur("hildburghausen", "Hildburghausen") },
  { slug: "schmalkalden", name: "Schmalkalden", bundesland: "Thüringen", intro: thueringenIntro("Schmalkalden"), arbeitsagentur: defaultArbeitsagentur("schmalkalden", "Schmalkalden") },
  { slug: "greiz", name: "Greiz", bundesland: "Thüringen", intro: thueringenIntro("Greiz"), arbeitsagentur: defaultArbeitsagentur("greiz", "Greiz") },

  // ─── Sachsen-Anhalt ────────────────────────────────────────────────────────
  { slug: "halle-saale", name: "Halle (Saale)", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Halle (Saale)"), arbeitsagentur: defaultArbeitsagentur("halle-saale", "Halle (Saale)") },
  { slug: "magdeburg", name: "Magdeburg", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Magdeburg"), arbeitsagentur: defaultArbeitsagentur("magdeburg", "Magdeburg") },
  { slug: "dessau-rosslau", name: "Dessau-Roßlau", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Dessau-Roßlau"), arbeitsagentur: defaultArbeitsagentur("dessau-rosslau", "Dessau-Roßlau") },
  { slug: "lutherstadt-wittenberg", name: "Lutherstadt Wittenberg", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Lutherstadt Wittenberg"), arbeitsagentur: defaultArbeitsagentur("lutherstadt-wittenberg", "Lutherstadt Wittenberg") },
  { slug: "halberstadt", name: "Halberstadt", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Halberstadt"), arbeitsagentur: defaultArbeitsagentur("halberstadt", "Halberstadt") },
  { slug: "stendal", name: "Stendal", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Stendal"), arbeitsagentur: defaultArbeitsagentur("stendal", "Stendal") },
  { slug: "merseburg", name: "Merseburg", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Merseburg"), arbeitsagentur: defaultArbeitsagentur("merseburg", "Merseburg") },
  { slug: "bitterfeld-wolfen", name: "Bitterfeld-Wolfen", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Bitterfeld-Wolfen"), arbeitsagentur: defaultArbeitsagentur("bitterfeld-wolfen", "Bitterfeld-Wolfen") },
  { slug: "zeitz", name: "Zeitz", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Zeitz"), arbeitsagentur: defaultArbeitsagentur("zeitz", "Zeitz") },
  { slug: "wernigerode", name: "Wernigerode", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Wernigerode"), arbeitsagentur: defaultArbeitsagentur("wernigerode", "Wernigerode") },
  { slug: "quedlinburg", name: "Quedlinburg", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Quedlinburg"), arbeitsagentur: defaultArbeitsagentur("quedlinburg", "Quedlinburg") },
  { slug: "naumburg-saale", name: "Naumburg (Saale)", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Naumburg"), arbeitsagentur: defaultArbeitsagentur("naumburg-saale", "Naumburg (Saale)") },
  { slug: "sangerhausen", name: "Sangerhausen", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Sangerhausen"), arbeitsagentur: defaultArbeitsagentur("sangerhausen", "Sangerhausen") },
  { slug: "bernburg", name: "Bernburg (Saale)", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Bernburg"), arbeitsagentur: defaultArbeitsagentur("bernburg", "Bernburg (Saale)") },
  { slug: "koethen", name: "Köthen (Anhalt)", bundesland: "Sachsen-Anhalt", intro: sachsenAnhaltIntro("Köthen"), arbeitsagentur: defaultArbeitsagentur("koethen", "Köthen (Anhalt)") },

  // ─── Schleswig-Holstein ────────────────────────────────────────────────────
  { slug: "kiel", name: "Kiel", bundesland: "Schleswig-Holstein", intro: shIntro("Kiel"), arbeitsagentur: defaultArbeitsagentur("kiel", "Kiel") },
  { slug: "luebeck", name: "Lübeck", bundesland: "Schleswig-Holstein", intro: shIntro("Lübeck"), arbeitsagentur: defaultArbeitsagentur("luebeck", "Lübeck") },
  { slug: "flensburg", name: "Flensburg", bundesland: "Schleswig-Holstein", intro: shIntro("Flensburg"), arbeitsagentur: defaultArbeitsagentur("flensburg", "Flensburg") },
  { slug: "neumünster", name: "Neumünster", bundesland: "Schleswig-Holstein", intro: shIntro("Neumünster"), arbeitsagentur: defaultArbeitsagentur("neumünster", "Neumünster") },
  { slug: "norderstedt", name: "Norderstedt", bundesland: "Schleswig-Holstein", intro: shIntro("Norderstedt"), arbeitsagentur: defaultArbeitsagentur("norderstedt", "Norderstedt") },
  { slug: "elmshorn", name: "Elmshorn", bundesland: "Schleswig-Holstein", intro: shIntro("Elmshorn"), arbeitsagentur: defaultArbeitsagentur("elmshorn", "Elmshorn") },
  { slug: "pinneberg", name: "Pinneberg", bundesland: "Schleswig-Holstein", intro: shIntro("Pinneberg"), arbeitsagentur: defaultArbeitsagentur("pinneberg", "Pinneberg") },
  { slug: "itzehoe", name: "Itzehoe", bundesland: "Schleswig-Holstein", intro: shIntro("Itzehoe"), arbeitsagentur: defaultArbeitsagentur("itzehoe", "Itzehoe") },
  { slug: "heide", name: "Heide", bundesland: "Schleswig-Holstein", intro: shIntro("Heide"), arbeitsagentur: defaultArbeitsagentur("heide", "Heide") },
  { slug: "rendsburg", name: "Rendsburg", bundesland: "Schleswig-Holstein", intro: shIntro("Rendsburg"), arbeitsagentur: defaultArbeitsagentur("rendsburg", "Rendsburg") },
  { slug: "schleswig", name: "Schleswig", bundesland: "Schleswig-Holstein", intro: shIntro("Schleswig"), arbeitsagentur: defaultArbeitsagentur("schleswig", "Schleswig") },
  { slug: "husum", name: "Husum", bundesland: "Schleswig-Holstein", intro: shIntro("Husum"), arbeitsagentur: defaultArbeitsagentur("husum", "Husum") },
  { slug: "bad-segeberg", name: "Bad Segeberg", bundesland: "Schleswig-Holstein", intro: shIntro("Bad Segeberg"), arbeitsagentur: defaultArbeitsagentur("bad-segeberg", "Bad Segeberg") },
  { slug: "ahrensburg", name: "Ahrensburg", bundesland: "Schleswig-Holstein", intro: shIntro("Ahrensburg"), arbeitsagentur: defaultArbeitsagentur("ahrensburg", "Ahrensburg") },
  { slug: "wedel", name: "Wedel", bundesland: "Schleswig-Holstein", intro: shIntro("Wedel"), arbeitsagentur: defaultArbeitsagentur("wedel", "Wedel") },

  // ─── Rheinland-Pfalz ───────────────────────────────────────────────────────
  { slug: "mainz", name: "Mainz", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Mainz"), arbeitsagentur: defaultArbeitsagentur("mainz", "Mainz") },
  { slug: "ludwigshafen", name: "Ludwigshafen am Rhein", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Ludwigshafen am Rhein"), arbeitsagentur: defaultArbeitsagentur("ludwigshafen", "Ludwigshafen am Rhein") },
  { slug: "koblenz", name: "Koblenz", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Koblenz"), arbeitsagentur: defaultArbeitsagentur("koblenz", "Koblenz") },
  { slug: "trier", name: "Trier", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Trier"), arbeitsagentur: defaultArbeitsagentur("trier", "Trier") },
  { slug: "kaiserslautern", name: "Kaiserslautern", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Kaiserslautern"), arbeitsagentur: defaultArbeitsagentur("kaiserslautern", "Kaiserslautern") },
  { slug: "worms", name: "Worms", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Worms"), arbeitsagentur: defaultArbeitsagentur("worms", "Worms") },
  { slug: "neustadt-weinstrasse", name: "Neustadt an der Weinstraße", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Neustadt an der Weinstraße"), arbeitsagentur: defaultArbeitsagentur("neustadt-weinstrasse", "Neustadt an der Weinstraße") },
  { slug: "speyer", name: "Speyer", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Speyer"), arbeitsagentur: defaultArbeitsagentur("speyer", "Speyer") },
  { slug: "landau", name: "Landau in der Pfalz", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Landau in der Pfalz"), arbeitsagentur: defaultArbeitsagentur("landau", "Landau in der Pfalz") },
  { slug: "frankenthal", name: "Frankenthal (Pfalz)", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Frankenthal"), arbeitsagentur: defaultArbeitsagentur("frankenthal", "Frankenthal (Pfalz)") },
  { slug: "pirmasens", name: "Pirmasens", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Pirmasens"), arbeitsagentur: defaultArbeitsagentur("pirmasens", "Pirmasens") },
  { slug: "zweibrücken", name: "Zweibrücken", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Zweibrücken"), arbeitsagentur: defaultArbeitsagentur("zweibrücken", "Zweibrücken") },
  { slug: "bad-kreuznach", name: "Bad Kreuznach", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Bad Kreuznach"), arbeitsagentur: defaultArbeitsagentur("bad-kreuznach", "Bad Kreuznach") },
  { slug: "neuwied", name: "Neuwied", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Neuwied"), arbeitsagentur: defaultArbeitsagentur("neuwied", "Neuwied") },
  { slug: "andernach", name: "Andernach", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Andernach"), arbeitsagentur: defaultArbeitsagentur("andernach", "Andernach") },
  { slug: "bingen", name: "Bingen am Rhein", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Bingen am Rhein"), arbeitsagentur: defaultArbeitsagentur("bingen", "Bingen am Rhein") },
  { slug: "ingelheim", name: "Ingelheim am Rhein", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Ingelheim am Rhein"), arbeitsagentur: defaultArbeitsagentur("ingelheim", "Ingelheim am Rhein") },
  { slug: "bad-ems", name: "Bad Ems", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Bad Ems"), arbeitsagentur: defaultArbeitsagentur("bad-ems", "Bad Ems") },
  { slug: "mayen", name: "Mayen", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Mayen"), arbeitsagentur: defaultArbeitsagentur("mayen", "Mayen") },
  { slug: "idar-oberstein", name: "Idar-Oberstein", bundesland: "Rheinland-Pfalz", intro: rlpIntro("Idar-Oberstein"), arbeitsagentur: defaultArbeitsagentur("idar-oberstein", "Idar-Oberstein") },

  // ─── Mecklenburg-Vorpommern ────────────────────────────────────────────────
  { slug: "rostock", name: "Rostock", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Rostock"), arbeitsagentur: defaultArbeitsagentur("rostock", "Rostock") },
  { slug: "schwerin", name: "Schwerin", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Schwerin"), arbeitsagentur: defaultArbeitsagentur("schwerin", "Schwerin") },
  { slug: "neubrandenburg", name: "Neubrandenburg", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Neubrandenburg"), arbeitsagentur: defaultArbeitsagentur("neubrandenburg", "Neubrandenburg") },
  { slug: "stralsund", name: "Stralsund", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Stralsund"), arbeitsagentur: defaultArbeitsagentur("stralsund", "Stralsund") },
  { slug: "greifswald", name: "Greifswald", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Greifswald"), arbeitsagentur: defaultArbeitsagentur("greifswald", "Greifswald") },
  { slug: "wismar", name: "Wismar", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Wismar"), arbeitsagentur: defaultArbeitsagentur("wismar", "Wismar") },
  { slug: "güstrow", name: "Güstrow", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Güstrow"), arbeitsagentur: defaultArbeitsagentur("güstrow", "Güstrow") },
  { slug: "waren-mueritz", name: "Waren (Müritz)", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Waren (Müritz)"), arbeitsagentur: defaultArbeitsagentur("waren-mueritz", "Waren (Müritz)") },
  { slug: "parchim", name: "Parchim", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Parchim"), arbeitsagentur: defaultArbeitsagentur("parchim", "Parchim") },
  { slug: "wolgast", name: "Wolgast", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Wolgast"), arbeitsagentur: defaultArbeitsagentur("wolgast", "Wolgast") },
  { slug: "pasewalk", name: "Pasewalk", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Pasewalk"), arbeitsagentur: defaultArbeitsagentur("pasewalk", "Pasewalk") },
  { slug: "ueckermünde", name: "Ueckermünde", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Ueckermünde"), arbeitsagentur: defaultArbeitsagentur("ueckermünde", "Ueckermünde") },
  { slug: "neustrelitz", name: "Neustrelitz", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Neustrelitz"), arbeitsagentur: defaultArbeitsagentur("neustrelitz", "Neustrelitz") },
  { slug: "ribnitz-damgarten", name: "Ribnitz-Damgarten", bundesland: "Mecklenburg-Vorpommern", intro: mvIntro("Ribnitz-Damgarten"), arbeitsagentur: defaultArbeitsagentur("ribnitz-damgarten", "Ribnitz-Damgarten") },

  // ─── Saarland ──────────────────────────────────────────────────────────────
  { slug: "saarbrücken", name: "Saarbrücken", bundesland: "Saarland", intro: saarlandIntro("Saarbrücken"), arbeitsagentur: defaultArbeitsagentur("saarbrücken", "Saarbrücken") },
  { slug: "neunkirchen-saar", name: "Neunkirchen (Saar)", bundesland: "Saarland", intro: saarlandIntro("Neunkirchen"), arbeitsagentur: defaultArbeitsagentur("neunkirchen-saar", "Neunkirchen (Saar)") },
  { slug: "homburg-saar", name: "Homburg", bundesland: "Saarland", intro: saarlandIntro("Homburg"), arbeitsagentur: defaultArbeitsagentur("homburg-saar", "Homburg") },
  { slug: "saarlouis", name: "Saarlouis", bundesland: "Saarland", intro: saarlandIntro("Saarlouis"), arbeitsagentur: defaultArbeitsagentur("saarlouis", "Saarlouis") },
  { slug: "völklingen", name: "Völklingen", bundesland: "Saarland", intro: saarlandIntro("Völklingen"), arbeitsagentur: defaultArbeitsagentur("völklingen", "Völklingen") },
  { slug: "merzig", name: "Merzig", bundesland: "Saarland", intro: saarlandIntro("Merzig"), arbeitsagentur: defaultArbeitsagentur("merzig", "Merzig") },
  { slug: "st-wendel", name: "Sankt Wendel", bundesland: "Saarland", intro: saarlandIntro("Sankt Wendel"), arbeitsagentur: defaultArbeitsagentur("st-wendel", "Sankt Wendel") },

  // ─── Berlin (weitere Bezirke als eigenständige Seiten) ─────────────────────
  { slug: "berlin-mitte", name: "Berlin Mitte", bundesland: "Berlin", intro: berlinIntro("Berlin Mitte"), arbeitsagentur: defaultArbeitsagentur("berlin-mitte", "Berlin Mitte") },
  { slug: "berlin-charlottenburg", name: "Berlin Charlottenburg", bundesland: "Berlin", intro: berlinIntro("Berlin Charlottenburg"), arbeitsagentur: defaultArbeitsagentur("berlin-charlottenburg", "Berlin Charlottenburg") },
  { slug: "berlin-friedrichshain", name: "Berlin Friedrichshain", bundesland: "Berlin", intro: berlinIntro("Berlin Friedrichshain"), arbeitsagentur: defaultArbeitsagentur("berlin-friedrichshain", "Berlin Friedrichshain") },
  { slug: "berlin-spandau", name: "Berlin Spandau", bundesland: "Berlin", intro: berlinIntro("Berlin Spandau"), arbeitsagentur: defaultArbeitsagentur("berlin-spandau", "Berlin Spandau") },
  { slug: "berlin-tempelhof", name: "Berlin Tempelhof", bundesland: "Berlin", intro: berlinIntro("Berlin Tempelhof"), arbeitsagentur: defaultArbeitsagentur("berlin-tempelhof", "Berlin Tempelhof") },

  // ─── Hamburg (weitere Stadtteile) ─────────────────────────────────────────
  { slug: "hamburg-harburg", name: "Hamburg-Harburg", bundesland: "Hamburg", intro: hamburgIntro("Hamburg-Harburg"), arbeitsagentur: defaultArbeitsagentur("hamburg-harburg", "Hamburg-Harburg") },
  { slug: "hamburg-altona", name: "Hamburg-Altona", bundesland: "Hamburg", intro: hamburgIntro("Hamburg-Altona"), arbeitsagentur: defaultArbeitsagentur("hamburg-altona", "Hamburg-Altona") },

  // ─── Bremerhaven ──────────────────────────────────────────────────────────
  { slug: "bremerhaven", name: "Bremerhaven", bundesland: "Bremen", intro: bremenIntro("Bremerhaven"), arbeitsagentur: defaultArbeitsagentur("bremerhaven", "Bremerhaven") },
];

/** Nur diese Standorte werden in Navigation, Übersicht und Sektion angezeigt. Alle anderen haben weiterhin eigene Seiten unter /standorte/[stadt] für SEO. */
export const featuredStandorte = FEATURED_STANDORTE_SLUGS.map((slug) =>
  standorte.find((s) => s.slug === slug)!
).filter(Boolean);
