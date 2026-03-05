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
- Voraussetzung: Eine individuelle Beratung durch die Agentur für Arbeit

## Wie beantragst Du den Bildungsgutschein?

1. **Beratungsgespräch** bei Deiner Agentur für Arbeit oder Deinem Jobcenter vereinbaren
2. **Weiterbildungsziel besprechen** – welchen Kurs möchtest Du machen?
3. **Bildungsgutschein erhalten** – nach positivem Bescheid erhältst Du den Gutschein
4. **AZAV-zertifizierten Anbieter wählen** – der Bildungsträger muss zertifiziert sein
5. **Weiterbildung starten** – die Kosten übernimmt die Agentur für Arbeit

## Was wird gefördert?

Der Bildungsgutschein deckt in der Regel ab:
- Lehrgangsgebühren (bis zu 100 %)
- Fahrtkosten
- Kinderbetreuungskosten
- Auswärtige Unterbringung und Verpflegung (falls nötig)
- Lernmittel und Prüfungsgebühren

Welche Kosten in Deinem Fall übernommen werden, klärst Du im Beratungsgespräch mit der Agentur für Arbeit.

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
- **Förderungsfähigkeit** – bis zu 100 % Kostenübernahme durch die Agentur für Arbeit möglich

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
Die wichtigste Förderung: Die Agentur für Arbeit kann mit dem Bildungsgutschein bis zu 100 % der Kosten einer AZAV-zertifizierten Weiterbildung übernehmen.

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
    slug: "bildungsgutschein-tipps-beratungsgespraech",
    title: "Bildungsgutschein: Tipps für das Beratungsgespräch",
    description:
      "So überzeugst Du im Beratungsgespräch bei der Agentur für Arbeit. Tipps für die Vorbereitung und häufige Fehler.",
    category: "foerderung",
    content: `## Beratungsgespräch bei der Agentur für Arbeit: So bereitest Du Dich vor

Das Beratungsgespräch bei der Agentur für Arbeit ist der entscheidende Schritt zum Bildungsgutschein. Eine gute Vorbereitung erhöht Deine Chancen deutlich.

## Was Du mitbringen solltest

- **Konkretes Kursangebot** eines AZAV-zertifizierten Bildungsträgers (z. B. von Forward Education)
- **Begründung**, warum die Weiterbildung Deine Jobchancen verbessert
- **Lebenslauf** – zeigt Deinen bisherigen Werdegang und die Lücke, die Du schließen willst
- **Stellenanzeigen** – zeige, dass es Jobs gibt, für die Du Dich mit der Weiterbildung qualifizierst

## Häufige Fehler vermeiden

### Zu vage sein
Sage nicht „Ich möchte mich weiterbilden". Sage stattdessen: „Ich möchte eine AZAV-zertifizierte Weiterbildung in Künstlicher Intelligenz bei Forward Education machen, um als KI-Anwendungsspezialist:in zu arbeiten."

### Kein konkretes Angebot
Ohne ein Kursangebot kann die Agentur nicht prüfen, ob die Weiterbildung förderfähig ist. Wir stellen Dir alle Unterlagen bereit.

### Arbeitsmarktbedarf nicht belegen
Zeige, dass es Nachfrage gibt: Stellenanzeigen, Branchenberichte oder Gehaltsvergleiche untermauern Dein Argument.

## So hilft Forward Education

1. Wir erstellen Dir eine vollständige Maßnahmenübersicht mit AZAV-Nachweis
2. Wir bereiten Dich auf das Gespräch vor
3. Wir beantworten Rückfragen der Agentur für Arbeit
4. Wir begleiten Dich vom Antrag bis zum Kursstart

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung – wir helfen Dir, das Beratungsgespräch optimal vorzubereiten.`,
  },

  // ─── Neue Artikel ─────────────────────────────────────────────────────────

  {
    slug: "bildungsgutschein-abgelehnt",
    title: "Bildungsgutschein abgelehnt – Was tun?",
    description:
      "Dein Bildungsgutschein wurde abgelehnt? Erfahre die häufigsten Gründe und welche Schritte Du jetzt unternehmen kannst.",
    category: "bildungsgutschein",
    content: `## Bildungsgutschein abgelehnt: Das kannst Du tun

Eine Ablehnung ist ärgerlich, aber kein Grund aufzugeben. In vielen Fällen lässt sich die Entscheidung ändern.

## Häufige Gründe für eine Ablehnung

- **Fehlende Begründung** – Du konntest nicht überzeugend darlegen, warum die Weiterbildung Deine Jobchancen verbessert
- **Kein konkretes Angebot** – Die Agentur braucht ein konkretes Kursangebot eines AZAV-zertifizierten Trägers
- **Alternative Maßnahmen** – Die Agentur sieht andere Wege als geeigneter an (z. B. Vermittlung statt Weiterbildung)
- **Formale Fehler** – Fehlende Unterlagen oder Fristen nicht eingehalten

## Was Du jetzt tun kannst

### 1. Widerspruch einlegen
Du hast einen Monat Zeit, schriftlich Widerspruch gegen den Bescheid einzulegen. Begründe, warum die Weiterbildung für Deinen beruflichen Wiedereinstieg notwendig ist.

### 2. Erneutes Beratungsgespräch
Bitte um ein neues Gespräch mit einem/einer anderen Berater:in. Bereite Dich besser vor und bringe alle Unterlagen mit.

### 3. Professionelle Unterstützung
Wir helfen Dir kostenlos bei der Vorbereitung: Welche Argumente funktionieren, welche Unterlagen Du brauchst und wie Du den Bedarf überzeugend darstellst.

## Tipp

Lass Dich nicht entmutigen. Viele Teilnehmer:innen bei uns haben den Bildungsgutschein beim zweiten Anlauf erhalten – mit besserer Vorbereitung und den richtigen Argumenten.`,
  },
  {
    slug: "bildungsgutschein-voraussetzungen",
    title: "Bildungsgutschein Voraussetzungen – Wer hat Anspruch?",
    description:
      "Alle Voraussetzungen für den Bildungsgutschein: Wer Anspruch hat, welche Bedingungen gelten und wie Du Dich vorbereitest.",
    category: "bildungsgutschein",
    content: `## Wer bekommt einen Bildungsgutschein?

Der Bildungsgutschein wird von der Agentur für Arbeit oder dem Jobcenter ausgestellt. Es gibt keinen Rechtsanspruch, aber klare Voraussetzungen, die Deine Chancen erhöhen.

## Die wichtigsten Voraussetzungen

### 1. Beschäftigungsstatus
- Du bist arbeitslos und bei der Agentur für Arbeit gemeldet
- Du bist arbeitssuchend (z. B. befristeter Vertrag läuft aus)
- Du bist von Arbeitslosigkeit bedroht (Kündigung angekündigt oder wahrscheinlich)
- Du brauchst die Weiterbildung, um eine Arbeitslosigkeit zu beenden oder zu vermeiden

### 2. Beratungsgespräch
Du musst ein Beratungsgespräch bei Deiner Agentur für Arbeit geführt haben. Dort besprichst Du Deinen Weiterbildungsbedarf.

### 3. Notwendigkeit der Weiterbildung
Die Weiterbildung muss Deine Chancen auf dem Arbeitsmarkt verbessern – entweder um eine Arbeitslosigkeit zu beenden oder zu vermeiden.

### 4. AZAV-Zertifizierung
Der Kurs muss bei einem AZAV-zertifizierten Bildungsträger stattfinden. Alle Kurse von Forward Education sind AZAV-zertifiziert.

## Was spricht für eine Bewilligung?

- Hohe Nachfrage in der Zielbranche (z. B. KI, IT-Sales, Projektmanagement)
- Klarer Zusammenhang zwischen Kurs und beruflichem Ziel
- Fehlende Qualifikation für den Wunschberuf
- Bereitschaft, die Weiterbildung konsequent durchzuziehen

## Was wird übernommen?

| Kostenart | Übernahme |
|-----------|-----------|
| Lehrgangsgebühren | Bis zu 100 % |
| Fahrtkosten | Ja |
| Kinderbetreuung | Ja (auf Antrag) |
| Unterbringung | Ja (falls nötig) |

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung. Wir prüfen Deine Voraussetzungen und bereiten Dich auf das Gespräch mit der Agentur für Arbeit vor.`,
  },
  {
    slug: "bildungsgutschein-gueltigkeitsdauer",
    title: "Bildungsgutschein Gültigkeitsdauer – Was Du wissen musst",
    description:
      "Wie lange ist ein Bildungsgutschein gültig? Was passiert, wenn er abläuft? Alles zur Gültigkeitsdauer und Fristen.",
    category: "bildungsgutschein",
    content: `## Wie lange ist ein Bildungsgutschein gültig?

Ein Bildungsgutschein ist in der Regel zeitlich befristet, regional begrenzt und auf ein bestimmtes Bildungsziel beschränkt. Die genaue Gültigkeitsdauer legt Deine Agentur für Arbeit im Beratungsgespräch fest.

## Was steht im Bildungsgutschein?

- **Bildungsziel** – Welche Art von Weiterbildung Du machen darfst (z. B. KI, Sales, Projektmanagement)
- **Gültigkeitsdauer** – Bis wann Du die Weiterbildung beginnen musst
- **Regionale Begrenzung** – In welcher Region die Weiterbildung stattfinden darf
- **Dauer der Maßnahme** – Wie lange die Weiterbildung maximal dauern darf

## Was passiert, wenn der Gutschein abläuft?

Wenn Du den Bildungsgutschein nicht innerhalb der Gültigkeitsdauer einlöst, verfällt er. Du kannst aber erneut einen Termin bei der Agentur für Arbeit vereinbaren und einen neuen Gutschein beantragen.

## Tipps zur Planung

1. **Schnell handeln** – Informiere Dich frühzeitig über passende Kurse
2. **Starttermine prüfen** – Stimme die Gültigkeitsdauer mit dem nächsten Kursstart ab
3. **Rücksprache halten** – Bei Verzögerungen mit der Agentur sprechen, ggf. Verlängerung beantragen

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung. Wir helfen Dir, den passenden Kurs innerhalb Deiner Gültigkeitsdauer zu finden und alle Unterlagen rechtzeitig einzureichen.`,
  },
  {
    slug: "umschulung-mit-40",
    title: "Umschulung mit 40 – Tipps für den Neustart",
    description:
      "Berufliche Neuorientierung mit 40+? Erfahre, warum es nie zu spät ist und wie Du den Umstieg erfolgreich meisterst.",
    category: "karriere",
    content: `## Umschulung mit 40: Warum es sich lohnt

Mit 40+ hast Du noch mindestens 25 Berufsjahre vor Dir. Eine Umschulung kann der Start in eine erfüllende zweite Karrierehälfte sein – und in vielen Branchen bist Du mit Deiner Lebenserfahrung sogar besonders gefragt.

## Vorteile einer Umschulung mit 40+

- **Lebenserfahrung** – Soft Skills wie Verantwortungsbewusstsein und Stressresilienz sind im Berufsalltag Gold wert
- **Klarheit** – Du weißt besser als mit 20, was Du willst und was nicht
- **Netzwerk** – Du hast bereits berufliche Kontakte, die Dir beim Wiedereinstieg helfen
- **Förderung** – Mit dem Bildungsgutschein kostet Dich die Umschulung keinen Cent

## Gefragte Bereiche für Quereinsteiger:innen 40+

### Projektmanagement
Organisationstalent und Erfahrung in der Zusammenarbeit mit Teams sind hier Dein größter Vorteil. Scrum Master und Projektmanager:innen werden branchenübergreifend gesucht.

### IT-Vertrieb (Sales)
Beratungskompetenz und Kundenorientierung zählen mehr als technisches Wissen. Quereinsteiger:innen mit Berufserfahrung sind im IT-Sales sehr erfolgreich.

### Künstliche Intelligenz
KI-Anwendungsspezialist:innen müssen nicht programmieren können. Der Fokus liegt auf der Nutzung von KI-Tools im Geschäftsalltag – ein Bereich, in dem Praxiserfahrung zählt.

## So startest Du Deine Umschulung

1. Informiere Dich über passende Weiterbildungen
2. Lass Dich bei der Agentur für Arbeit beraten
3. Beantrage den Bildungsgutschein (wir helfen Dir bei der Vorbereitung)
4. Starte Deine Weiterbildung – in 3–6 Monaten bist Du bereit

## Häufige Bedenken – und warum sie unbegründet sind

- **„Ich bin zu alt"** – Falsch. Unternehmen suchen Leute mit Erfahrung und Zuverlässigkeit.
- **„Ich kann mir das nicht leisten"** – Mit dem Bildungsgutschein können bis zu 100 % der Kosten übernommen werden.
- **„Technologie überfordert mich"** – Unsere Kurse starten bei null und sind für Quereinsteiger:innen konzipiert.`,
  },
  {
    slug: "quereinsteiger-projektmanagement",
    title: "Quereinsteiger Projektmanagement – Chancen und Wege",
    description:
      "Projektmanagement als Quereinsteiger:in? Erfahre, welche Wege es gibt und wie Du ohne Vorerfahrung einsteigst.",
    category: "karriere",
    content: `## Projektmanagement: Der perfekte Quereinstieg

Projektmanagement ist einer der besten Bereiche für Quereinsteiger:innen. Warum? Organisationstalent, Kommunikation und Problemlösungsfähigkeit zählen mehr als ein bestimmtes Studium.

## Warum Projektmanagement?

- **Branchenübergreifend gefragt** – Jedes Unternehmen braucht Projektmanager:innen
- **Gute Gehälter** – Einstiegsgehalt 40.000–50.000 €, mit Erfahrung 60.000–80.000 €
- **Kein Fachstudium nötig** – Zertifizierungen (z. B. Scrum, PMP) sind oft wichtiger als der Studienabschluss
- **Vielfältige Rollen** – Vom Scrum Master über Product Owner bis zum klassischen Projektleiter

## Welche Skills brauchst Du?

### Methodenkenntnisse
- Agile Methoden: Scrum, Kanban
- Klassisches Projektmanagement: Wasserfall, PRINCE2
- Hybride Ansätze

### Soft Skills
- Kommunikation und Moderation
- Priorisierung und Zeitmanagement
- Konfliktmanagement
- Stakeholder-Management

### Tools
- Jira, Asana, Trello, MS Project
- Confluence, Miro
- Slack, Teams

## Dein Weg zum Projektmanager

1. **Weiterbildung** – Unser Kurs vermittelt Dir alle Methoden, Tools und Soft Skills in 3–6 Monaten
2. **Zertifizierung** – Scrum Master, Product Owner oder PMP – der Nachweis für Arbeitgeber
3. **Praxis** – Projekte im Kurs und anschließend im Unternehmen
4. **Karriereberatung** – Bewerbungscoaching und Jobvermittlung sind bei uns inklusive

## Förderung

Die Weiterbildung ist mit dem Bildungsgutschein bis zu 100 % förderbar. Wir beraten Dich kostenlos.`,
  },
  {
    slug: "quereinsteiger-sales",
    title: "Quereinsteiger im Vertrieb – So gelingt der Einstieg",
    description:
      "Sales als Quereinsteiger:in? Warum der IT-Vertrieb einer der besten Einstiege ist und wie Du ohne Erfahrung startest.",
    category: "karriere",
    content: `## Vertrieb als Quereinstieg: Warum gerade Sales?

Der Vertrieb – insbesondere IT-Sales – ist einer der zugänglichsten und bestbezahlten Bereiche für Quereinsteiger:innen. Unternehmen suchen Persönlichkeiten, nicht Abschlüsse.

## Warum IT-Sales?

- **Hohe Gehälter** – Fixgehalt plus Provision, oft 50.000–80.000 € im ersten Jahr
- **Keine Vorkenntnisse nötig** – Beratungskompetenz und Lernbereitschaft zählen
- **Schneller Einstieg** – Nach 3–6 Monaten Weiterbildung bist Du einsatzbereit
- **Karriereweg klar** – SDR → Account Executive → Team Lead → VP Sales

## Typischer Karriereverlauf

### 1. Sales Development Representative (SDR)
Du identifizierst und qualifizierst potenzielle Kunden. Dein Werkzeug: Telefon, E-Mail und LinkedIn.

### 2. Account Executive (AE)
Du führst Verkaufsgespräche und schließt Deals ab. Hier steigt die variable Vergütung deutlich.

### 3. Team Lead / Sales Manager
Du führst ein Team und verantwortest Umsatzziele.

## Was lernst Du in der Weiterbildung?

- Sales-Methoden: SPIN Selling, Challenger Sale, MEDDIC
- CRM-Systeme: Salesforce, HubSpot
- Kommunikation und Verhandlung
- Produkt- und Marktverständnis
- Bewerbungstraining und Rollenspiele

## Für wen ist Sales geeignet?

- Du bist kommunikativ und magst den Kontakt mit Menschen
- Du bist zielorientiert und lässt Dich von Rückschlägen nicht entmutigen
- Du möchtest ein gutes Gehalt mit variablem Anteil
- Du suchst einen klaren Karrierepfad mit schnellen Aufstiegsmöglichkeiten

## Förderung

Die Sales-Weiterbildung ist mit dem Bildungsgutschein bis zu 100 % förderbar. Kontaktiere uns für eine kostenlose Beratung.`,
  },
  {
    slug: "berufe-mit-zukunft",
    title: "Berufe mit Zukunft – Die gefragtesten Jobs",
    description:
      "Welche Berufe haben Zukunft? Die gefragtesten Karrierewege in KI, IT-Sales und Projektmanagement im Überblick.",
    category: "karriere",
    content: `## Berufe mit Zukunft: Diese Jobs sind gefragt

Der Arbeitsmarkt verändert sich rasant. Digitalisierung, KI und neue Arbeitsmodelle schaffen Berufe, die es vor wenigen Jahren noch nicht gab. Wer sich jetzt positioniert, hat die besten Chancen.

## Die drei gefragtesten Bereiche

### 1. Künstliche Intelligenz
KI durchdringt alle Branchen. Gefragt sind nicht nur Entwickler:innen, sondern vor allem Anwendungsspezialist:innen, Prompt Engineers und KI-Projektmanager:innen.

- **Einstiegsgehalt:** 45.000–55.000 €
- **Perspektive:** Wachstumsmarkt mit jährlich steigendem Bedarf
- **Besonderheit:** Auch für Quereinsteiger:innen ohne IT-Hintergrund geeignet

### 2. IT-Sales
Jedes Tech-Unternehmen braucht Vertrieb. IT-Sales ist einer der bestbezahlten Einstiegsbereiche – mit klarem Karrierepfad und hoher variabler Vergütung.

- **Einstiegsgehalt:** 40.000–50.000 € + Provision
- **Perspektive:** Fachkräftemangel im tech-nahen Vertrieb
- **Besonderheit:** Kommunikation zählt mehr als Technikwissen

### 3. Projektmanagement
Agiles Arbeiten ist Standard. Scrum Master, Product Owner und Projektmanager:innen werden in jedem Unternehmen gebraucht.

- **Einstiegsgehalt:** 42.000–52.000 €
- **Perspektive:** Branchenübergreifend nachgefragt
- **Besonderheit:** Soft Skills und Methodenkompetenz stehen im Vordergrund

## Was diese Berufe gemeinsam haben

- Hohe Nachfrage auf dem Arbeitsmarkt
- Gute Gehälter bereits beim Einstieg
- Kein Fachstudium erforderlich
- Einstieg über eine Weiterbildung in 3–6 Monaten möglich
- Bis zu 100 % förderbar mit Bildungsgutschein

## Dein nächster Schritt

Informiere Dich über unsere AZAV-zertifizierten Weiterbildungen und lass Dich kostenlos beraten. Wir helfen Dir, den richtigen Karriereweg zu finden.`,
  },
  {
    slug: "gehaltsvergleich-vor-nach-weiterbildung",
    title: "Gehalt vor und nach der Weiterbildung – Lohnt es sich?",
    description:
      "Was verdienst Du nach einer Weiterbildung? Konkrete Gehaltsvergleiche in KI, Sales und Projektmanagement.",
    category: "karriere",
    content: `## Lohnt sich eine Weiterbildung finanziell?

Kurze Antwort: Ja. Eine gezielte Weiterbildung kann Dein Gehalt um 30–100 % steigern – besonders beim Branchenwechsel.

## Gehaltsvergleich: Vorher vs. Nachher

### Künstliche Intelligenz

| Situation | Gehalt (brutto/Jahr) |
|-----------|---------------------|
| Ohne KI-Kompetenz | 25.000–35.000 € |
| Nach KI-Weiterbildung (Einstieg) | 45.000–55.000 € |
| Mit 2–3 Jahren KI-Erfahrung | 60.000–80.000 € |

### IT-Sales

| Situation | Gehalt (brutto/Jahr) |
|-----------|---------------------|
| Ohne Sales-Erfahrung | 25.000–35.000 € |
| Nach Sales-Weiterbildung (SDR) | 40.000–55.000 € (+ Provision) |
| Account Executive (2–3 Jahre) | 65.000–100.000 € (inkl. Provision) |

### Projektmanagement

| Situation | Gehalt (brutto/Jahr) |
|-----------|---------------------|
| Ohne PM-Qualifikation | 28.000–38.000 € |
| Nach PM-Weiterbildung (Einstieg) | 42.000–52.000 € |
| Senior PM / Scrum Master (3+ Jahre) | 60.000–80.000 € |

## Was beeinflusst den Gehaltssprung?

- **Branche** – Tech und Beratung zahlen am besten
- **Region** – Großstädte wie München, Frankfurt und Berlin liegen vorn
- **Zertifizierung** – Anerkannte Zertifikate (Scrum, Google, etc.) steigern den Marktwert
- **Verhandlung** – Wer gut verhandelt, verdient mehr

## Die Rechnung: Investition vs. Ertrag

- **Kosten der Weiterbildung:** 0 € (mit Bildungsgutschein)
- **Dauer:** 3–6 Monate
- **Gehaltsplus:** Durchschnittlich 15.000–30.000 € pro Jahr
- **Amortisation:** Sofort, da Du nichts investiert hast

## Fazit

Eine Weiterbildung mit Bildungsgutschein ist eine der sichersten Investitionen in Deine Karriere: kein finanzielles Risiko, hoher potenzieller Ertrag.`,
  },
  {
    slug: "online-weiterbildung-vorteile",
    title: "Online-Weiterbildung: Vorteile und Tipps",
    description:
      "Online lernen oder vor Ort? Die Vorteile einer Online-Weiterbildung und Tipps, wie Du das Beste daraus machst.",
    category: "weiterbildung",
    content: `## Warum Online-Weiterbildung?

Online-Weiterbildung ist längst kein Kompromiss mehr – sie bietet echte Vorteile gegenüber dem Präsenzunterricht. Gerade für Berufswechsler:innen und Menschen in Umbruchsituationen ist Flexibilität entscheidend.

## Die Vorteile im Überblick

### Flexibilität
- Lerne von zu Hause aus – kein Pendeln, keine Anfahrtskosten
- Teilnahme von überall in Deutschland möglich
- Auch aus kleineren Städten Zugang zu Top-Weiterbildungen

### Qualität
- Live-Unterricht mit echten Dozent:innen (kein reines Selbststudium)
- Kleine Gruppen (max. 15 Teilnehmer:innen)
- Direktes Feedback und individuelle Betreuung

### Kosteneffizienz
- Kein Umzug nötig
- Keine Unterbringungskosten
- Mit Bildungsgutschein komplett kostenlos

### Technik
- Modernes virtuelles Klassenzimmer
- Bei Forward Education: MacBook inklusive
- Professionelle Tools und Plattformen

## Tipps für erfolgreiches Online-Lernen

1. **Fester Arbeitsplatz** – Richte Dir einen ruhigen Platz ein, an dem Du konzentriert lernen kannst
2. **Tagesstruktur** – Behandle die Weiterbildung wie einen normalen Job mit festen Zeiten
3. **Aktiv teilnehmen** – Fragen stellen, Kamera an, mitmachen
4. **Pausen einplanen** – Bildschirmzeit braucht Pausen
5. **Austausch suchen** – Nutze Slack, Teams oder Lerngruppen für den Kontakt mit Mitlernenden

## Für wen eignet sich Online-Weiterbildung?

- Eltern, die zeitlich flexibel sein müssen
- Personen in ländlichen Regionen ohne lokale Bildungsangebote
- Menschen, die während der Weiterbildung zu Hause bleiben möchten
- Alle, die eine moderne Lernumgebung bevorzugen

## Online lernen bei Forward Education

Unsere Kurse in KI, Sales und Projektmanagement finden komplett online statt – im Live-Unterricht mit persönlicher Betreuung. Bis zu 100 % förderbar mit Bildungsgutschein.`,
  },
  {
    slug: "weiterbildung-lebenslauf",
    title: "Weiterbildung im Lebenslauf – So präsentierst Du sie richtig",
    description:
      "Wie stellst Du eine Weiterbildung im Lebenslauf dar? Tipps für eine überzeugende Bewerbung nach der Weiterbildung.",
    category: "weiterbildung",
    content: `## Weiterbildung im Lebenslauf: Der richtige Platz

Eine abgeschlossene Weiterbildung gehört prominent in Deinen Lebenslauf. Sie zeigt Engagement, Lernbereitschaft und aktuelle Qualifikation.

## Wo im Lebenslauf?

### Option 1: Eigener Abschnitt „Weiterbildung"
Am besten direkt nach „Berufserfahrung". Das signalisiert: Du hast Dich aktiv weiterentwickelt.

### Option 2: Im Abschnitt „Bildung"
Wenn Du noch wenig Berufserfahrung hast, kann die Weiterbildung als letzter Bildungsabschnitt stehen.

## So formulierst Du es

**Gut:**
- Weiterbildung Projektmanagement (AZAV-zertifiziert), Forward Education, 01/2026–06/2026
- Schwerpunkte: Agile Methoden (Scrum, Kanban), Stakeholder-Management, Praxisprojekte

**Schlecht:**
- Kurs gemacht bei Forward Education

## Was gehört dazu?

- Name der Weiterbildung
- Zeitraum (Monat/Jahr – Monat/Jahr)
- Bildungsträger
- Zertifizierung (AZAV, Scrum Master, etc.)
- 2–3 konkrete Schwerpunkte oder Kompetenzen

## Tipps für das Anschreiben

- Erkläre kurz, warum Du Dich für die Weiterbildung entschieden hast
- Stelle den Bezug zum angestrebten Job her
- Betone praktische Projekte und konkrete Skills

## Lücke im Lebenslauf? Kein Problem

Eine Weiterbildung schließt Lücken im Lebenslauf. Statt einer unerklärten Pause zwischen zwei Jobs zeigst Du, dass Du die Zeit aktiv genutzt hast.

## Tipp

Bei Forward Education bekommst Du nicht nur die Weiterbildung, sondern auch Bewerbungscoaching und Karriereberatung – damit Dein Lebenslauf und Deine Bewerbung überzeugen.`,
  },
  {
    slug: "ki-tools-im-beruf",
    title: "KI-Tools im Beruf – Diese solltest Du kennen",
    description:
      "Die wichtigsten KI-Tools für den Berufsalltag: Von ChatGPT über Midjourney bis hin zu Automatisierungstools.",
    category: "weiterbildung",
    content: `## KI-Tools, die Deinen Berufsalltag verändern

Künstliche Intelligenz ist nicht mehr nur etwas für Tech-Unternehmen. KI-Tools helfen in fast jedem Beruf – von Textgenerierung über Datenanalyse bis zur Automatisierung.

## Die wichtigsten KI-Tools im Überblick

### Textgenerierung & Kommunikation
- **ChatGPT / Claude** – Texte schreiben, E-Mails formulieren, Brainstorming
- **Jasper** – Marketing-Texte und Content erstellen
- **DeepL** – Professionelle Übersetzungen

### Bildgenerierung & Design
- **Midjourney / DALL-E** – Bilder aus Textbeschreibungen generieren
- **Canva AI** – Design-Vorschläge und automatische Layoutanpassung
- **Remove.bg** – Hintergründe automatisch entfernen

### Datenanalyse
- **Julius AI** – Datenanalyse im Chat-Format
- **ChatGPT Code Interpreter** – Datenvisualisierung und Statistik
- **Tableau mit KI** – Business Intelligence mit KI-Unterstützung

### Automatisierung
- **Zapier AI** – Workflows zwischen Apps automatisieren
- **Make (Integromat)** – Komplexe Automatisierungen erstellen
- **Microsoft Copilot** – KI in Word, Excel, PowerPoint, Outlook

### Produktivität
- **Notion AI** – Notizen zusammenfassen, Aufgaben organisieren
- **Otter.ai** – Meetings transkribieren und zusammenfassen
- **Grammarly** – Texte korrigieren und verbessern

## Welche KI-Kompetenz braucht der Arbeitsmarkt?

Unternehmen suchen Mitarbeiter:innen, die:
- KI-Tools sicher anwenden können
- Wissen, welches Tool für welche Aufgabe passt
- Ergebnisse kritisch bewerten können
- Workflows mit KI-Unterstützung optimieren

## KI-Kompetenz aufbauen

In unserer KI-Weiterbildung lernst Du den professionellen Umgang mit KI-Tools, Prompt Engineering und die strategische Nutzung von KI im Unternehmen. AZAV-zertifiziert und bis zu 100 % förderbar.`,
  },
  {
    slug: "prompt-engineering-lernen",
    title: "Prompt Engineering lernen – Grundlagen und Praxis",
    description:
      "Was ist Prompt Engineering? Lerne die Grundlagen und wie Du KI-Modelle mit den richtigen Prompts steuerst.",
    category: "weiterbildung",
    content: `## Was ist Prompt Engineering?

Prompt Engineering ist die Kunst, KI-Modelle wie ChatGPT, Claude oder Gemini mit gezielten Eingaben (Prompts) zu den besten Ergebnissen zu führen. Es ist eine der gefragtesten neuen Kompetenzen auf dem Arbeitsmarkt.

## Warum ist Prompt Engineering wichtig?

Ein guter Prompt kann den Unterschied machen zwischen einer mittelmäßigen und einer hervorragenden KI-Antwort. Unternehmen brauchen Mitarbeiter:innen, die KI-Tools effizient einsetzen können.

## Grundlagen: So schreibst Du bessere Prompts

### 1. Sei spezifisch
- **Schlecht:** „Schreib mir einen Text über Marketing"
- **Gut:** „Schreib einen 300-Wort-Blogbeitrag über Social-Media-Marketing für B2B-Startups. Zielgruppe: Marketing-Manager:innen. Ton: professionell, aber zugänglich."

### 2. Gib Kontext
Erkläre der KI, wer Du bist, was Du brauchst und für wen das Ergebnis bestimmt ist.

### 3. Nutze Rollen
„Du bist ein erfahrener Projektmanager. Erstelle einen Sprint-Plan für…"

### 4. Iteriere
Der erste Prompt ist selten perfekt. Verfeinere ihn Schritt für Schritt.

### 5. Nutze Beispiele (Few-Shot-Prompting)
Zeige der KI ein Beispiel für das gewünschte Ergebnis, bevor Du die eigentliche Aufgabe gibst.

## Fortgeschrittene Techniken

- **Chain-of-Thought** – Die KI Schritt für Schritt denken lassen
- **System-Prompts** – Grundlegende Anweisungen, die das Verhalten steuern
- **Output-Formatierung** – JSON, Tabellen, Markdown anfordern
- **Retrieval-Augmented Generation (RAG)** – KI mit eigenen Daten erweitern

## Berufsbild Prompt Engineer

| Aspekt | Details |
|--------|---------|
| Einstiegsgehalt | 45.000–55.000 € |
| Erfahrung (3+ Jahre) | 65.000–90.000 € |
| Branchen | Tech, Beratung, Marketing, Medien |
| Voraussetzung | KI-Verständnis, analytisches Denken |

## Prompt Engineering lernen bei Forward Education

In unserer KI-Weiterbildung ist Prompt Engineering ein zentrales Modul. Du lernst von den Grundlagen bis zu fortgeschrittenen Techniken – mit Praxis an echten Use Cases.`,
  },
  {
    slug: "agiles-arbeiten-kanban-scrum",
    title: "Agiles Arbeiten: Kanban vs. Scrum im Vergleich",
    description:
      "Kanban oder Scrum – was ist besser? Ein Vergleich der beiden beliebtesten agilen Methoden für Einsteiger.",
    category: "weiterbildung",
    content: `## Scrum vs. Kanban: Zwei Wege zum agilen Arbeiten

Scrum und Kanban sind die beliebtesten agilen Methoden. Beide verbessern die Zusammenarbeit und Effizienz – aber auf unterschiedliche Weise.

## Scrum im Überblick

- **Feste Sprints** – Zeitboxen von 1–4 Wochen
- **Definierte Rollen** – Product Owner, Scrum Master, Development Team
- **Regelmäßige Events** – Planning, Daily, Review, Retrospective
- **Lieferung am Sprint-Ende** – Fertiges Inkrement nach jedem Sprint

### Wann Scrum?
- Produktentwicklung mit planbaren Releases
- Teams, die Struktur und klare Rollen brauchen
- Projekte mit fester Deadline und Scope

## Kanban im Überblick

- **Kontinuierlicher Fluss** – Keine festen Sprints, Aufgaben fließen durch das System
- **Work-in-Progress-Limits (WIP)** – Begrenzung gleichzeitiger Aufgaben
- **Visuelles Board** – Spalten wie „To Do", „In Progress", „Done"
- **Keine festen Rollen** – Flexibler als Scrum

### Wann Kanban?
- Support-Teams und Wartung
- Aufgaben, die nicht in Sprints passen
- Teams, die einen sanften Einstieg in Agilität suchen

## Direkter Vergleich

| Merkmal | Scrum | Kanban |
|---------|-------|--------|
| Zeitrahmen | Feste Sprints | Kontinuierlicher Fluss |
| Rollen | Product Owner, Scrum Master, Team | Keine festen Rollen |
| Planung | Sprint Planning | Auf Basis des Boards |
| Änderungen | Am besten zwischen Sprints | Jederzeit möglich |
| Metriken | Velocity, Burndown | Lead Time, Cycle Time |
| Ideal für | Produktentwicklung | Support, Wartung, Ops |

## Hybrid: Scrumban

Viele Teams kombinieren Scrum und Kanban – „Scrumban". Zum Beispiel:
- Sprint-Zyklen von Scrum mit WIP-Limits von Kanban
- Kanban-Board mit regelmäßigen Retrospektiven

## Agile Methoden lernen

In unserer Projektmanagement-Weiterbildung lernst Du beide Methoden in der Praxis – inklusive Zertifizierungsvorbereitung für Scrum Master. AZAV-zertifiziert und bis zu 100 % förderbar.`,
  },
  {
    slug: "foerderung-weiterbildung-uebersicht",
    title: "Förderung Weiterbildung – So funktioniert der Bildungsgutschein",
    description:
      "Alles zur Förderung Deiner Weiterbildung über den Bildungsgutschein der Agentur für Arbeit: Voraussetzungen, Leistungen und Ablauf.",
    category: "foerderung",
    content: `## Weiterbildung gefördert: Der Bildungsgutschein

Der Bildungsgutschein der Agentur für Arbeit ist die zentrale Förderung für berufliche Weiterbildung in Deutschland. Damit können bis zu 100 % der Weiterbildungskosten übernommen werden.

## Was kann der Bildungsgutschein abdecken?

Laut Agentur für Arbeit können mit dem Bildungsgutschein folgende Kosten übernommen werden:
- **Lehrgangsgebühren** inkl. Lernmittel und Prüfungsgebühren
- **Fahrtkosten** zur Bildungsstätte
- **Kinderbetreuungskosten** während der Weiterbildung
- **Auswärtige Unterbringung und Verpflegung** (falls tägliches Pendeln nicht zumutbar ist)

Welche Kosten in Deinem Fall übernommen werden, klärst Du im persönlichen Beratungsgespräch mit der Agentur für Arbeit.

## Voraussetzungen

Du kannst einen Bildungsgutschein erhalten, wenn:
- Du arbeitslos, arbeitssuchend oder von Arbeitslosigkeit bedroht bist
- Die Weiterbildung notwendig ist, um Deine Arbeitsmarktchancen zu verbessern
- Der Bildungsträger und die Maßnahme AZAV-zertifiziert sind
- Du ein persönliches Beratungsgespräch bei der Agentur für Arbeit geführt hast

## So beantragst Du den Bildungsgutschein

1. **Termin vereinbaren** – Kontaktiere Deine Agentur für Arbeit
2. **Beratungsgespräch** – Besprich Deinen Weiterbildungswunsch
3. **Gutschein erhalten** – Bei positiver Entscheidung bekommst Du den Bildungsgutschein
4. **Kurs wählen** – Wähle einen AZAV-zertifizierten Anbieter
5. **Weiterbildung starten** – Die Kosten werden direkt an den Bildungsträger gezahlt

## Nächster Schritt

Kontaktiere uns für eine kostenlose Beratung. Wir helfen Dir bei der Vorbereitung auf das Gespräch mit der Agentur für Arbeit und stellen Dir alle nötigen Unterlagen bereit.`,
  },

  // ─── mein NOW (Nationales Portal für berufliche Weiterbildung) ─────────────

  {
    slug: "was-ist-mein-now",
    title: "Was ist mein NOW? – Das Portal für berufliche Weiterbildung",
    description:
      "mein NOW ist das nationale Onlineportal der Bundesagentur für Arbeit für Weiterbildung. Erfahre, was es bietet und wie Du es nutzt.",
    category: "weiterbildung",
    content: `## Was ist mein NOW?

**mein NOW** (Schreibweise: „mein NOW") ist das **Nationale Onlineportal für berufliche Weiterbildung** in Deutschland. Es wurde von der Bundesagentur für Arbeit im Rahmen der Nationalen Weiterbildungsstrategie entwickelt und ist seit dem 1. Januar 2024 online. Das Portal bündelt Beratung, Förderungen, Kurse und Tests an einem Ort – für alle, die sich weiterbilden möchten.

## Für wen ist mein NOW?

- **Privatpersonen**, die eine Weiterbildung, Umschulung oder Teilqualifizierung suchen
- **Arbeitgeber**, die sich über Qualifizierung ihrer Mitarbeiter:innen informieren wollen
- **Weiterbildungsanbieter**, die ihr Angebot sichtbar machen

Du findest dort einen niedrigschwelligen Einstieg: Kein Vorwissen nötig, alles von Beratung bis Kursbuchung an einem Ort.

## Die fünf Bereiche von mein NOW

### 1. Beratung
Übersicht von Beratungsstellen zu Weiterbildung, Umschulung und Teilqualifizierung – in Deiner Nähe oder online.

### 2. Förderungen
Navigator für finanzielle Unterstützung: Bildungsgutschein, Bildungsurlaub, Aufstiegs-BAFöG und weitere Fördermöglichkeiten. Du siehst schnell, was auf Dich zutreffen könnte.

### 3. Weiterbildungen
Große Datenbank mit bundesweiten Weiterbildungsangeboten – Voll- oder Teilzeit, vor Ort oder online. Du kannst nach Thema, Ort und Format filtern.

### 4. Online-Tests
Tests zur Orientierung: Welche Weiterbildung passt zu Dir? Wie stehen Deine digitalen Kompetenzen? Die Ergebnisse helfen Dir bei der Entscheidung.

### 5. Perspektiven
Informationen zu Berufen, Branchen, Verdienst und Weiterbildungsmöglichkeiten. So siehst Du, wohin eine Qualifizierung führen kann.

## mein NOW und Forward Education

Unsere Kurse in Künstlicher Intelligenz, Sales und Projektmanagement sind AZAV-zertifiziert und mit dem Bildungsgutschein förderbar – genau die Art von Angeboten, die Du auch über mein NOW findest. Wenn Du über mein NOW auf uns kommst oder Dich parallel dort informierst: Wir beraten Dich kostenlos zu Deinem passenden Kurs und zu Fördermöglichkeiten.`,
  },
  {
    slug: "weiterbildung-finden-mein-now",
    title: "Weiterbildung finden mit mein NOW – So nutzt Du das Portal",
    description:
      "Schritt für Schritt: So findest Du mit mein NOW die passende Weiterbildung, prüfst Förderungen und startest Deine Qualifizierung.",
    category: "weiterbildung",
    content: `## Weiterbildung finden mit mein NOW: So gehst Du vor

mein NOW bringt Beratung, Förderung und Kurssuche an einen Ort. So nutzt Du das Portal effektiv.

## Schritt 1: Perspektiven und Tests (optional)

Bevor Du Kurse filterst, kannst Du Dich orientieren:
- **Perspektiven** – Welche Berufe und Branchen passen zu Dir? Welche Weiterbildungen führen dorthin?
- **Online-Tests** – Welche Weiterbildung passt zu Deinen Zielen? Wie ausgeprägt sind Deine digitalen Kompetenzen?

Das hilft Dir, klarer zu formulieren, was Du suchst.

## Schritt 2: Förderung prüfen

Unter **Förderungen** findest Du den Überblick: Bildungsgutschein, Bildungsurlaub, Aufstiegs-BAFöG und mehr. Du siehst, welche Unterstützung für Dich infrage kommt. Der Bildungsgutschein der Agentur für Arbeit ist die häufigste Förderung für Arbeitssuchende und von Arbeitslosigkeit Bedrohte – bis zu 100 % der Kosten einer AZAV-zertifizierten Weiterbildung.

## Schritt 3: Kurse suchen

Unter **Weiterbildungen** suchst Du nach Thema, Ort, Voll- oder Teilzeit und ob online oder vor Ort. Die Suche zeigt Dir zugelassene Anbieter und Kurse. Wichtig: Nur **AZAV-zertifizierte** Angebote sind mit dem Bildungsgutschein förderbar. Das steht bei den Kursen in der Regel dabei.

## Schritt 4: Beratung nutzen

Wenn Du unsicher bist oder Förderung beantragen willst, führt an der **Beratung** kein Weg vorbei. Das Portal verweist auf Beratungsstellen in Deiner Nähe – oft Agentur für Arbeit oder Jobcenter. Dort besprichst Du Deinen Wunsch und beantragst bei Bedarf den Bildungsgutschein.

## Tipp für die Praxis

Nutze mein NOW als Einstieg, und hole Dir danach eine **konkrete Beratung** bei einem Bildungsträger. Wir bei Forward Education beraten Dich kostenlos: Welcher Kurs passt zu Dir, welche Förderung kommt infrage und wie Du das Gespräch mit der Agentur für Arbeit vorbereitest.`,
  },
  {
    slug: "mein-now-bildungsgutschein-foerderung",
    title: "mein NOW und Bildungsgutschein – Förderung finden und nutzen",
    description:
      "So findest Du mit mein NOW die richtige Förderung für Deine Weiterbildung und was Du beim Bildungsgutschein beachten solltest.",
    category: "foerderung",
    content: `## mein NOW und Bildungsgutschein: So hängt es zusammen

mein NOW ist das nationale Portal der Bundesagentur für Arbeit für berufliche Weiterbildung. Dort findest Du nicht nur Kurse, sondern auch einen **Förder-Navigator**: Du siehst, welche finanziellen Hilfen es gibt – unter anderem den Bildungsgutschein.

## Förderungen auf mein NOW finden

Im Bereich **Förderungen** siehst Du auf einen Blick:
- **Bildungsgutschein** – Kostenübernahme durch die Agentur für Arbeit für AZAV-zertifizierte Weiterbildungen (bis zu 100 %)
- **Bildungsurlaub** – bezahlte Freistellung für Weiterbildung (landesrechtlich geregelt)
- **Aufstiegs-BAFöG** – Förderung für Fortbildungen z. B. zum/zur Meister:in oder Fachwirt:in
- Weitere Programme je nach Bundesland und Zielgruppe

Du filterst nach Deiner Situation (z. B. arbeitslos, beschäftigt) und bekommst Hinweise, was für Dich infrage kommt.

## Bildungsgutschein: Das Wichtigste

Der Bildungsgutschein ist die zentrale Förderung für viele unserer Teilnehmer:innen. Wichtig zu wissen:
- **Kein Rechtsanspruch** – die Agentur für Arbeit entscheidet nach Beratung
- **Beratungsgespräch nötig** – nur danach wird ein Gutschein ausgestellt
- **Nur AZAV-zertifizierte Kurse** – der Anbieter und die Maßnahme müssen zertifiziert sein
- **Kosten** – Lehrgangsgebühren, Fahrt, Kinderbetreuung und ggf. Unterkunft können übernommen werden

mein NOW hilft Dir, diese Förderung zu finden. Den Antrag stellst Du dann im Gespräch mit Deiner Agentur für Arbeit oder Deinem Jobcenter.

## Nach der Förder-Suche: Konkret werden

Wenn Du über mein NOW siehst, dass der Bildungsgutschein für Dich infrage kommt, solltest Du:
1. **Beratung buchen** – über mein NOW oder direkt bei der Agentur für Arbeit
2. **Konkretes Kursangebot besorgen** – z. B. von einem AZAV-zertifizierten Anbieter wie Forward Education
3. **Unterlagen für die Agentur vorbereiten** – wir stellen Dir alle nötigen Nachweise und Infos für das Beratungsgespräch bereit

So verbindest Du das Portal mit dem nächsten Schritt: Beratung und Antrag.`,
  },
];
