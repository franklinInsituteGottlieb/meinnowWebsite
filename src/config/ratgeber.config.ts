export interface RatgeberArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

export const ratgeberCategories = [
  { slug: "bildungsgutschein", label: "Bildungsgutschein" },
  { slug: "karriere", label: "Karriere & Berufswechsel" },
  { slug: "weiterbildung", label: "Weiterbildung" },
  { slug: "foerderung", label: "Förderung" },
] as const;

export const ratgeberArticles: RatgeberArticle[] = [
  {
    slug: "was-ist-ein-bildungsgutschein",
    title: "Was ist ein Bildungsgutschein?",
    description:
      "Alles Wichtige zum Bildungsgutschein: Wer ihn bekommt, wie Du ihn beantragst und welche Weiterbildungen damit gefördert werden.",
    category: "bildungsgutschein",
    content: `## Was ist ein Bildungsgutschein?

Ein Bildungsgutschein ist eine Zusicherung der Agentur für Arbeit oder des Jobcenters, die Kosten einer beruflichen Weiterbildung vollständig zu übernehmen. Er richtet sich an Arbeitssuchende, von Arbeitslosigkeit bedrohte Personen und Beschäftigte, die sich beruflich weiterentwickeln möchten.

## Wer hat Anspruch auf einen Bildungsgutschein?

- **Arbeitssuchende**, die bei der Agentur für Arbeit oder dem Jobcenter gemeldet sind
- **Von Arbeitslosigkeit bedrohte** Arbeitnehmer:innen
- **Beschäftigte**, die sich im Rahmen des Qualifizierungschancengesetzes weiterbilden möchten
- Voraussetzung: Eine individuelle Beratung durch die Agentur für Arbeit

## Wie beantragst Du den Bildungsgutschein?

1. **Beratungsgespräch** bei Deiner Agentur für Arbeit oder Deinem Jobcenter vereinbaren
2. **Weiterbildungsziel besprechen** – welchen Kurs möchtest Du machen?
3. **Bildungsgutschein erhalten** – nach positivem Bescheid erhältst Du den Gutschein
4. **AZAV-zertifizierten Anbieter wählen** – der Bildungsträger muss zertifiziert sein
5. **Weiterbildung starten** – die Kosten übernimmt die Agentur für Arbeit

## Was wird gefördert?

Der Bildungsgutschein deckt in der Regel ab:
- Kursgebühren zu 100 %
- Fahrtkosten
- Kinderbetreuungskosten (in bestimmten Fällen)
- Auswärtige Unterbringung (falls nötig)

## Warum Forward Education?

Unsere Kurse in Künstlicher Intelligenz, Sales und Projektmanagement sind AZAV-zertifiziert und werden vom Bildungsgutschein vollständig abgedeckt. Wir beraten Dich kostenlos und unverbindlich zu Deinen Fördermöglichkeiten.`,
  },
  {
    slug: "bildungsgutschein-beantragen-schritt-fuer-schritt",
    title: "Bildungsgutschein beantragen – Schritt für Schritt",
    description:
      "Detaillierte Anleitung: So beantragst Du den Bildungsgutschein bei der Agentur für Arbeit oder dem Jobcenter.",
    category: "bildungsgutschein",
    content: `## Bildungsgutschein beantragen: So gehst Du vor

Der Bildungsgutschein ist Dein Schlüssel zur geförderten Weiterbildung. Damit Du ihn bekommst, musst Du einige Schritte beachten.

## Schritt 1: Termin bei der Agentur für Arbeit vereinbaren

Rufe bei Deiner lokalen Agentur für Arbeit an oder nutze das Online-Terminbuchungssystem. Du wirst zu einem Beratungsgespräch eingeladen.

## Schritt 2: Weiterbildungsbedarf begründen

Im Gespräch erklärst Du, warum die Weiterbildung Deine Chancen auf dem Arbeitsmarkt verbessert. Bereite Dich vor:
- Welcher Bereich interessiert Dich? (z. B. KI, Sales, Projektmanagement)
- Welche Qualifikation fehlt Dir für Deinen Wunschjob?
- Ist der Kurs AZAV-zertifiziert?

## Schritt 3: Bildungsangebot vorlegen

Zeige dem/der Berater:in ein konkretes Kursangebot eines zertifizierten Trägers. Bei Forward Education erhältst Du alle nötigen Unterlagen für die Agentur.

## Schritt 4: Bescheid abwarten

Die Agentur prüft Deinen Antrag. Bei positiver Entscheidung erhältst Du den Bildungsgutschein – in der Regel innerhalb weniger Wochen.

## Schritt 5: Kurs buchen und starten

Löse den Bildungsgutschein beim Bildungsträger ein und starte Deine Weiterbildung. Die Kosten werden direkt von der Agentur übernommen.

## Tipps für die Beantragung

- **Frühzeitig anfragen** – der Prozess kann einige Wochen dauern
- **Konkret werden** – nenne einen bestimmten Kurs und Anbieter
- **AZAV-Zertifizierung prüfen** – nur zertifizierte Kurse werden gefördert
- **Kostenlose Beratung nutzen** – Forward Education hilft Dir bei der Vorbereitung`,
  },
  {
    slug: "quereinsteiger-it-so-gelingt-der-einstieg",
    title: "Quereinsteiger IT – So gelingt der Einstieg",
    description:
      "Du willst in die IT-Branche wechseln? Erfahre, welche Wege es gibt, welche Skills gefragt sind und wie eine Weiterbildung den Einstieg erleichtert.",
    category: "karriere",
    content: `## Quereinsteiger in der IT: Deine Chancen

Die IT-Branche sucht dringend Fachkräfte – und das nicht nur mit Informatik-Studium. Quereinsteiger:innen sind in vielen Bereichen willkommen, besonders in:
- Künstliche Intelligenz & Machine Learning
- IT-Vertrieb (Sales)
- Projektmanagement (agil & klassisch)

## Welche Skills brauchst Du?

### Für KI & Machine Learning
- Grundlegendes Verständnis von Daten und Algorithmen
- Interesse an neuen Technologien
- Analytisches Denken

### Für IT-Sales
- Kommunikationsstärke
- Grundverständnis für IT-Produkte
- Verkaufs- und Beratungstalent

### Für Projektmanagement
- Organisationstalent
- Teamfähigkeit und Führungskompetenz
- Methodenkenntnisse (Scrum, Kanban)

## So gelingt der Quereinstieg

1. **Weiterbildung wählen** – Eine zertifizierte Weiterbildung gibt Dir das nötige Wissen und einen anerkannten Nachweis
2. **Förderung nutzen** – Mit dem Bildungsgutschein wird die Weiterbildung bis zu 100 % gefördert
3. **Praxis sammeln** – Unsere Kurse arbeiten mit realen Projekten und Case Studies
4. **Netzwerk aufbauen** – Im Kurs lernst Du Gleichgesinnte und Branchenkontakte kennen
5. **Bewerbung vorbereiten** – Karriereberatung und Bewerbungscoaching sind bei uns inklusive

## Warum gerade jetzt?

Der Fachkräftemangel in der IT ist so groß wie nie. Unternehmen sind bereit, in motivierte Quereinsteiger:innen zu investieren. Eine gezielte Weiterbildung ist der schnellste Weg in den neuen Job.`,
  },
  {
    slug: "karriere-mit-kuenstlicher-intelligenz",
    title: "Karriere mit Künstlicher Intelligenz – Berufsbilder und Chancen",
    description:
      "Welche Berufe entstehen durch KI? Erfahre, welche Karrierewege es gibt und wie Du Dich mit einer KI-Weiterbildung positionierst.",
    category: "karriere",
    content: `## KI-Berufe: Diese Jobs sind gefragt

Künstliche Intelligenz verändert die Arbeitswelt grundlegend. Neue Berufsbilder entstehen, bestehende wandeln sich. Hier die wichtigsten KI-Karrierewege:

### KI-Anwendungsspezialist:in
Du setzt KI-Tools im Unternehmen ein – von Chatbots über Dokumentenanalyse bis hin zu Prozessautomatisierung. Kein Programmierstudium nötig.

### Prompt Engineer
Du entwickelst optimale Eingaben (Prompts) für KI-Modelle wie ChatGPT oder Claude. Ein kreatives Berufsbild mit wachsender Nachfrage.

### Data Analyst mit KI-Fokus
Du nutzt Machine Learning und KI-Tools für Datenanalyse, Reporting und Business Intelligence.

### KI-Projektmanager:in
Du leitest Projekte zur Einführung von KI-Lösungen – von der Planung bis zum Rollout.

## Was verdienst Du mit KI-Kompetenz?

- **Einstiegsgehalt:** 40.000–55.000 € brutto/Jahr
- **Mit Erfahrung:** 60.000–90.000 € brutto/Jahr
- **Spezialist:innen:** 80.000–120.000 € brutto/Jahr

## Dein Weg in die KI-Karriere

Eine praxisnahe Weiterbildung vermittelt Dir die Grundlagen von Machine Learning, Prompt Engineering und KI-Anwendung im Geschäftsalltag – auch ohne IT-Vorkenntnisse. Mit dem Bildungsgutschein ist die Weiterbildung bis zu 100 % gefördert.`,
  },
  {
    slug: "azav-zertifizierung-was-bedeutet-das",
    title: "AZAV-Zertifizierung – Was bedeutet das?",
    description:
      "Was steckt hinter der AZAV-Zertifizierung? Warum sie für Deine Weiterbildung wichtig ist und wie Du davon profitierst.",
    category: "foerderung",
    content: `## Was ist die AZAV-Zertifizierung?

AZAV steht für „Akkreditierungs- und Zulassungsverordnung Arbeitsförderung". Sie regelt, welche Bildungsträger und Maßnahmen von der Agentur für Arbeit gefördert werden dürfen.

## Warum ist AZAV wichtig?

Nur AZAV-zertifizierte Kurse können über den Bildungsgutschein finanziert werden. Die Zertifizierung garantiert:
- **Qualitätsstandards** – Regelmäßige Prüfung der Lehrinhalte und Dozent:innen
- **Anerkannte Abschlüsse** – Zertifikate werden von Arbeitgebern akzeptiert
- **Förderungsfähigkeit** – 100 % Kostenübernahme durch die Agentur für Arbeit möglich

## Was wird geprüft?

- Qualifikation der Lehrenden
- Aktualität und Praxisrelevanz der Inhalte
- Infrastruktur und Lernumgebung
- Erfolgsquoten und Teilnehmerzufriedenheit

## Forward Education ist AZAV-zertifiziert

Alle unsere Weiterbildungen in Künstlicher Intelligenz, Sales und Projektmanagement tragen das AZAV-Zertifikat. Das bedeutet: Du kannst den Bildungsgutschein bei uns einlösen und ohne eigene Kosten an einer hochwertigen Weiterbildung teilnehmen.`,
  },
  {
    slug: "weiterbildung-waehrend-arbeitslosigkeit",
    title: "Weiterbildung während Arbeitslosigkeit – Rechte und Möglichkeiten",
    description:
      "Du bist arbeitssuchend und möchtest Dich weiterbilden? Erfahre, welche Förderungen es gibt und wie Du die Zeit sinnvoll nutzt.",
    category: "foerderung",
    content: `## Weiterbildung als Chance in der Arbeitslosigkeit

Eine Phase der Arbeitslosigkeit muss kein Stillstand sein. Mit einer geförderten Weiterbildung kannst Du die Zeit nutzen, um Dich für den nächsten Karriereschritt zu qualifizieren.

## Welche Förderungen gibt es?

### Bildungsgutschein
Die wichtigste Förderung: Die Agentur für Arbeit oder das Jobcenter übernimmt die Kosten einer AZAV-zertifizierten Weiterbildung zu 100 %.

### Weiterbildungsprämie
Bei bestandener Zwischen- oder Abschlussprüfung erhältst Du eine Prämie von bis zu 1.500 €.

### Arbeitslosengeld während der Weiterbildung
Während einer geförderten Weiterbildung läuft Dein ALG I weiter – Du hast also kein finanzielles Risiko.

## Deine Rechte

- Du hast ein Recht auf Beratung durch die Agentur für Arbeit
- Einen Rechtsanspruch auf den Bildungsgutschein gibt es nicht, aber die Agentur muss Deinen Antrag wohlwollend prüfen
- Du darfst den Bildungsträger frei wählen (sofern AZAV-zertifiziert)

## So startest Du

1. Informiere Dich über passende Weiterbildungen (z. B. KI, Sales, Projektmanagement)
2. Vereinbare ein Beratungsgespräch bei der Agentur für Arbeit
3. Lege ein konkretes Kursangebot vor (wir stellen Dir alle Unterlagen bereit)
4. Starte Deine Weiterbildung und nutze die Zeit aktiv

## Tipp

Kontaktiere uns für eine kostenlose Beratung – wir helfen Dir, das richtige Angebot zu finden und bereiten Dich auf das Gespräch mit der Agentur für Arbeit vor.`,
  },
  {
    slug: "gehalt-it-vertrieb",
    title: "Gehalt im IT-Vertrieb – Was verdienst Du als IT-Sales-Manager?",
    description:
      "Überblick über Gehälter im IT-Vertrieb: Einstiegsgehalt, Erfahrungsstufen und was Du tun kannst, um mehr zu verdienen.",
    category: "karriere",
    content: `## Gehalt im IT-Vertrieb: Ein Überblick

Der IT-Vertrieb gehört zu den bestbezahlten Einstiegsbereichen – auch für Quereinsteiger:innen. Dein Gehalt hängt von Erfahrung, Region und Unternehmensgröße ab.

## Gehaltsübersicht

| Erfahrung | Fixgehalt (brutto/Jahr) | Variable (OTE) |
|-----------|------------------------|----------------|
| Einstieg (0–2 Jahre) | 35.000–45.000 € | + 10.000–20.000 € |
| Fortgeschritten (2–5 Jahre) | 45.000–65.000 € | + 20.000–40.000 € |
| Senior (5+ Jahre) | 65.000–90.000 € | + 30.000–60.000 € |
| Team Lead / Manager | 80.000–120.000 € | + 40.000–80.000 € |

OTE = On Target Earnings (Fixgehalt + erreichbare Provision)

## Was beeinflusst Dein Gehalt?

- **Unternehmensgröße** – Konzerne zahlen oft mehr als Startups (dafür weniger Provision)
- **Produkt** – Enterprise-Software-Vertrieb zahlt mehr als SMB-Produkte
- **Region** – München, Frankfurt und Berlin zahlen die höchsten Gehälter
- **Verhandlung** – Provisionsmodelle bieten hohe Verdienstmöglichkeiten

## IT-Sales als Quereinsteiger

Mit einer Weiterbildung im IT-Vertrieb kannst Du auch ohne IT-Studium in diese lukrative Branche einsteigen. Wichtig sind Kommunikationsstärke, Beratungskompetenz und Grundverständnis für IT-Produkte – genau das vermitteln wir in unserem Sales-Kurs.`,
  },
  {
    slug: "was-ist-machine-learning",
    title: "Was ist Machine Learning? – Einfach erklärt",
    description:
      "Machine Learning verständlich erklärt: Was es ist, wie es funktioniert und warum es für Deine Karriere relevant ist.",
    category: "weiterbildung",
    content: `## Machine Learning einfach erklärt

Machine Learning (maschinelles Lernen) ist ein Teilbereich der Künstlichen Intelligenz. Anstatt einem Computer genaue Anweisungen zu geben, lernt er aus Daten und verbessert sich selbst.

## Wie funktioniert Machine Learning?

1. **Daten sammeln** – Der Algorithmus braucht Trainingsdaten (z. B. E-Mails, die als Spam markiert sind)
2. **Muster erkennen** – Das Modell findet Muster in den Daten
3. **Vorhersagen treffen** – Bei neuen Daten kann es Vorhersagen machen (z. B. „Diese E-Mail ist Spam")
4. **Sich verbessern** – Mit mehr Daten und Feedback wird das Modell genauer

## Arten von Machine Learning

- **Überwachtes Lernen** – Lernt aus Beispielen mit bekannten Ergebnissen
- **Unüberwachtes Lernen** – Findet selbständig Muster in Daten
- **Bestärkendes Lernen** – Lernt durch Ausprobieren und Belohnung

## Wo wird Machine Learning eingesetzt?

- Sprachassistenten (Siri, Alexa)
- Empfehlungssysteme (Netflix, Spotify)
- Betrugserkennung bei Banken
- Automatisierte Textgenerierung (ChatGPT)
- Bilderkennung und -verarbeitung
- Predictive Maintenance in der Industrie

## Machine Learning lernen

In unserer KI-Weiterbildung lernst Du die Grundlagen von Machine Learning praxisnah – von der Theorie bis zur Anwendung mit echten Daten. Vorkenntnisse in Programmierung sind nicht nötig.`,
  },
  {
    slug: "scrum-erklaert-agiles-projektmanagement",
    title: "Scrum erklärt – Agiles Projektmanagement für Einsteiger",
    description:
      "Was ist Scrum? Rollen, Events und Artefakte einfach erklärt. Der perfekte Einstieg in agiles Projektmanagement.",
    category: "weiterbildung",
    content: `## Was ist Scrum?

Scrum ist ein Framework für agiles Projektmanagement. Es wurde ursprünglich für Softwareentwicklung entwickelt, wird heute aber in vielen Bereichen eingesetzt – von Marketing bis Produktentwicklung.

## Die drei Scrum-Rollen

### Product Owner
Verantwortlich für das „Was": Priorisiert Aufgaben und vertritt die Interessen der Stakeholder.

### Scrum Master
Verantwortlich für das „Wie": Sorgt dafür, dass das Team effizient arbeitet und Hindernisse beseitigt werden.

### Development Team
Das Team, das die Arbeit umsetzt. Typischerweise 3–9 Personen, selbstorganisiert.

## Die Scrum-Events

| Event | Dauer | Zweck |
|-------|-------|-------|
| Sprint Planning | 2–4 Std. | Sprint-Ziele und Aufgaben festlegen |
| Daily Scrum | 15 Min. | Täglicher Statusaustausch |
| Sprint Review | 1–2 Std. | Ergebnisse präsentieren |
| Sprint Retrospective | 1–1,5 Std. | Zusammenarbeit verbessern |

## Der Sprint

Ein Sprint ist ein fester Zeitraum (meist 2 Wochen), in dem ein fertiges Inkrement geliefert wird. Am Ende jedes Sprints steht ein nutzbares Ergebnis.

## Scrum lernen

In unserer Projektmanagement-Weiterbildung lernst Du Scrum von Grund auf – inklusive Praxis mit echten Projekten und Vorbereitung auf die Scrum-Zertifizierung.`,
  },
  {
    slug: "qualifizierungschancengesetz",
    title: "Qualifizierungschancengesetz – Weiterbildung für Beschäftigte",
    description:
      "Das Qualifizierungschancengesetz ermöglicht Weiterbildung für Berufstätige. Erfahre, wer profitiert und wie Du die Förderung beantragst.",
    category: "foerderung",
    content: `## Was ist das Qualifizierungschancengesetz?

Seit 2019 ermöglicht das Qualifizierungschancengesetz auch Beschäftigten Zugang zu geförderter Weiterbildung – nicht nur Arbeitssuchenden. Ziel ist es, Arbeitnehmer:innen fit für den digitalen Wandel zu machen.

## Wer profitiert?

- **Beschäftigte**, deren Tätigkeiten durch Digitalisierung oder Strukturwandel bedroht sind
- **Arbeitnehmer:innen in KMUs** (kleine und mittlere Unternehmen)
- **Geringqualifizierte**, die eine Berufsausbildung nachholen möchten
- **Ältere Beschäftigte** (ab 45 Jahren)

## Wie hoch ist die Förderung?

| Unternehmensgröße | Lehrgangskosten | Arbeitsentgelt |
|-------------------|----------------|----------------|
| Unter 10 Mitarbeiter | bis 100 % | bis 75 % |
| 10–249 Mitarbeiter | bis 50 % | bis 50 % |
| 250–2.499 Mitarbeiter | bis 25 % | bis 25 % |
| Ab 2.500 Mitarbeiter | bis 15 % | bis 20 % |

## So funktioniert es

1. **Arbeitgeber und Arbeitnehmer:in** identifizieren gemeinsam den Weiterbildungsbedarf
2. **Beratung** bei der Agentur für Arbeit (Arbeitgeber-Service)
3. **Antrag stellen** – Arbeitgeber stellt den Förderantrag
4. **Weiterbildung durchführen** – bei einem AZAV-zertifizierten Träger wie Forward Education

## Tipp für Beschäftigte

Sprich deinen Arbeitgeber auf das Qualifizierungschancengesetz an. Viele Unternehmen wissen nicht, dass sie Fördermittel für die Weiterbildung ihrer Mitarbeiter:innen erhalten können.`,
  },
];
