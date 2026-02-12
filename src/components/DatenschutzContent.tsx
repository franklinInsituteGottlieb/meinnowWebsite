const legalIntro = `
Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Forward Education GmbH. Eine Nutzung der Internetseiten der Forward Education GmbH ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.

Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für die Forward Education GmbH geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.

Die Forward Education GmbH hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.
`.trim();

export default function DatenschutzContent() {
  return (
    <div className="prose prose-slate max-w-none text-foreground space-y-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3">
      {legalIntro.split("\n\n").map((p, i) => (
        <p key={i} className="text-foreground-light leading-relaxed">
          {p}
        </p>
      ))}
      <h2>1. Begriffsbestimmungen</h2>
      <p className="text-foreground-light leading-relaxed">
        Die Datenschutzerklärung der Forward Education GmbH beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
      </p>
      <p className="text-foreground-light leading-relaxed">
        Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>a) personenbezogene Daten</strong><br />
        Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>b) betroffene Person</strong><br />
        Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>c) Verarbeitung</strong><br />
        Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>d) Einschränkung der Verarbeitung</strong><br />
        Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>e) Profiling</strong><br />
        Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>f) Pseudonymisierung</strong><br />
        Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>g) Verantwortlicher oder für die Verarbeitung Verantwortlicher</strong><br />
        Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>h) Auftragsverarbeiter</strong><br />
        Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>i) Empfänger</strong><br />
        Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>j) Dritter</strong><br />
        Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.
      </p>
      <p className="text-foreground-light leading-relaxed">
        <strong>k) Einwilligung</strong><br />
        Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
      </p>
      <h2>2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
      <p className="text-foreground-light leading-relaxed">
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:
      </p>
      <p className="text-foreground-light leading-relaxed whitespace-pre-line">
        {`Forward Education GmbH
Stefan-George-Ring 2
81929 München
Deutschland
Tel.: +498962826149
E-Mail: lorenz.franz@forward-education.de
Website: forward-education.de`}
      </p>
      <h2>3. Cookies</h2>
      <p className="text-foreground-light leading-relaxed">
        Die Internetseiten der Forward Education GmbH verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.
      </p>
      <p className="text-foreground-light leading-relaxed">
        Durch den Einsatz von Cookies kann die Forward Education GmbH den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären. Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite im Sinne des Benutzers optimiert werden. Cookies ermöglichen uns, die Benutzer unserer Internetseite wiederzuerkennen. Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.
      </p>
      <h2>4. Erfassung von allgemeinen Daten und Informationen</h2>
      <p className="text-foreground-light leading-relaxed">
        Die Internetseite der Forward Education GmbH erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen. Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Forward Education GmbH keine Rückschlüsse auf die betroffene Person. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
      </p>
      <h2>5. Abonnement unseres Newsletters</h2>
      <p className="text-foreground-light leading-relaxed">
        Auf der Internetseite der Forward Education GmbH wird den Benutzern die Möglichkeit eingeräumt, den Newsletter unseres Unternehmens zu abonnieren. Die Forward Education GmbH informiert ihre Kunden und Geschäftspartner in regelmäßigen Abständen im Wege eines Newsletters über Angebote des Unternehmens. An die von einer betroffenen Person erstmalig für den Newsletterversand eingetragene E-Mail-Adresse wird aus rechtlichen Gründen eine Bestätigungsmail im Double-Opt-In-Verfahren versendet. Bei der Anmeldung zum Newsletter speichern wir ferner die vom Internet-Service-Provider (ISP) vergebene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung. Die im Rahmen einer Anmeldung zum Newsletter erhobenen personenbezogenen Daten werden ausschließlich zum Versand unseres Newsletters verwendet. Es erfolgt keine Weitergabe an Dritte. Das Abonnement kann jederzeit gekündigt werden; die Einwilligung kann jederzeit widerrufen werden.
      </p>
      <h2>6. Newsletter-Tracking</h2>
      <p className="text-foreground-light leading-relaxed">
        Die Newsletter der Forward Education GmbH enthalten sogenannte Zählpixel. Solche über die in den Newslettern enthaltenen Zählpixel erhobenen personenbezogenen Daten werden von dem für die Verarbeitung Verantwortlichen gespeichert und ausgewertet, um den Newsletterversand zu optimieren. Diese personenbezogenen Daten werden nicht an Dritte weitergegeben. Betroffene Personen sind jederzeit berechtigt, die diesbezügliche Einwilligungserklärung zu widerrufen.
      </p>
      <h2>7. Kontaktmöglichkeit über die Internetseite</h2>
      <p className="text-foreground-light leading-relaxed">
        Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.
      </p>
      <h2>8. Abonnement von Kommentaren im Blog</h2>
      <p className="text-foreground-light leading-relaxed">
        Die im Blog der Forward Education GmbH abgegebenen Kommentare können grundsätzlich von Dritten abonniert werden. Sofern sich eine betroffene Person für die Option entscheidet, Kommentare zu abonnieren, versendet der für die Verarbeitung Verantwortliche eine automatische Bestätigungsmail im Double-Opt-In-Verfahren. Die Option zum Abonnement von Kommentaren kann jederzeit beendet werden.
      </p>
      <h2>9. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
      <p className="text-foreground-light leading-relaxed">
        Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber vorgesehen wurde. Entfällt der Speicherungszweck oder läuft eine vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig gesperrt oder gelöscht.
      </p>
      <h2>10. Rechte der betroffenen Person</h2>
      <p className="text-foreground-light leading-relaxed">
        Jede betroffene Person hat u. a. das Recht auf Bestätigung, Auskunft, Berichtigung, Löschung (Recht auf Vergessen werden), Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie das Recht auf Widerruf einer datenschutzrechtlichen Einwilligung. Zur Geltendmachung dieser Rechte kann sich die betroffene Person jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Ausführliche Erläuterungen zu den einzelnen Rechten finden sich in den Art. 15 bis 22 DS-GVO.
      </p>
      <h2>11. Datenschutz bei Bewerbungen und im Bewerbungsverfahren</h2>
      <p className="text-foreground-light leading-relaxed">
        Der für die Verarbeitung Verantwortliche erhebt und verarbeitet die personenbezogenen Daten von Bewerbern zum Zwecke der Abwicklung des Bewerbungsverfahrens. Schließt der für die Verarbeitung Verantwortliche einen Anstellungsvertrag mit einem Bewerber, werden die übermittelten Daten unter Beachtung der gesetzlichen Vorschriften gespeichert. Wird kein Anstellungsvertrag geschlossen, werden die Bewerbungsunterlagen zwei Monate nach Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern einer Löschung keine sonstigen berechtigten Interessen entgegenstehen.
      </p>
      <h2>12. Rechtsgrundlage der Verarbeitung</h2>
      <p className="text-foreground-light leading-relaxed">
        Art. 6 I lit. a DS-GVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung einholen. Art. 6 I lit. b DS-GVO gilt für die Erfüllung eines Vertrags bzw. vorvertraglicher Maßnahmen. Art. 6 I lit. c DS-GVO für rechtliche Verpflichtungen. Art. 6 I lit. d DS-GVO für lebenswichtige Interessen. Art. 6 I lit. f DS-GVO für berechtigte Interessen.
      </p>
      <h2>13. Berechtigte Interessen an der Verarbeitung</h2>
      <p className="text-foreground-light leading-relaxed">
        Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.
      </p>
      <h2>14. Dauer der Speicherung</h2>
      <p className="text-foreground-light leading-relaxed">
        Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
      </p>
      <h2>15. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten</h2>
      <p className="text-foreground-light leading-relaxed">
        Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist oder sich aus vertraglichen Regelungen ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt. Eine Nichtbereitstellung hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte. Vor einer Bereitstellung muss sich der Betroffene an einen unserer Mitarbeiter wenden.
      </p>
      <h2>16. Bestehen einer automatisierten Entscheidungsfindung</h2>
      <p className="text-foreground-light leading-relaxed">
        Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.
      </p>
      <p className="text-foreground-light text-sm mt-10 pt-6 border-t border-slate-200">
        Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für Datenschutz GmbH, die als Externer Datenschutzbeauftragter Nürnberg tätig ist, in Kooperation mit dem Anwalt für IT- und Datenschutzrecht Christian Solmecke erstellt.
      </p>
    </div>
  );
}
