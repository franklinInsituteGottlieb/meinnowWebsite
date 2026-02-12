# Google Apps Script – Erweiterung für Website-Logs (internes Logging)

## Übersicht: Welches Logging in welches Sheet?

| Quelle | Sheet | Inhalt |
|--------|--------|--------|
| Nur wenn Nutzer **von außen** mit UTM Meinnow kommt | **page_logs** | brand, received_at, ts, session_id, course_id, meinnow_course_type, meinnow_course_duration |
| **Internes** Website-Logging (immer) | **website_logs** | received_at, session_id, type (page_view / search / click), pathname, search_query, search_result_slug, search_result_course_id, click_href, click_text |

---

In deinem bestehenden Google Apps Script (Webhook doPost) folgende Änderungen vornehmen.

---

## 1. In `doPost(e)` einen neuen Zweig einbauen

Direkt nach dem bestehenden `if (data && data.action === 'visibility_metrics')` Block (oder an passender Stelle) **einfügen**:

```javascript
if (data && data.action === 'website_log') {
  try {
    addWebsiteLog_(data);
    return createResponse('success', 'Website-Log gespeichert');
  } catch (err) {
    Logger.log('addWebsiteLog_ error: ' + err.toString());
    return createResponse('error', 'website_log: ' + err.toString());
  }
}
```

---

## 2. Neue Hilfsfunktionen ans Ende der Datei (vor dem letzten Abschnitt) einfügen

```javascript
// ============================================================
// Website-Logs (internes Logging: Klicks, Suchen, Seitenaufrufe)
// Sheet "website_logs": received_at | session_id | type | pathname | search_query | search_result_slug | search_result_course_id | click_href | click_text
// ============================================================

function addWebsiteLog_(data) {
  var ss = getSS_();
  var sh = ss.getSheetByName('website_logs');
  if (!sh) {
    sh = ss.insertSheet('website_logs');
    sh.appendRow([
      'received_at',
      'session_id',
      'type',
      'pathname',
      'search_query',
      'search_result_slug',
      'search_result_course_id',
      'click_href',
      'click_text'
    ]);
    sh.getRange(1, 1, 1, 9).setFontWeight('bold');
  }
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sh.appendRow([
      data.received_at || new Date(),
      data.session_id || '',
      data.type || '',
      data.pathname || '',
      data.search_query || '',
      data.search_result_slug || '',
      data.search_result_course_id || '',
      data.click_href || '',
      (data.click_text || '').toString().slice(0, 500)
    ]);
  } finally {
    lock.releaseLock();
  }
}
```

---

## 3. Sheet in der Tabelle anlegen (optional)

Falls das Script das Sheet automatisch anlegt, musst du nichts tun. Sonst in der Google-Tabelle ein neues Tabellenblatt mit dem Namen **genau** `website_logs` anlegen. Die erste Zeile als Header setzen:

| received_at | session_id | type | pathname | search_query | search_result_slug | search_result_course_id | click_href | click_text |

---

## 4. Bereitstellung aktualisieren

Nach dem Einfügen des Codes: **Bereitstellen** → **Bereitstellungsverwaltung** → Stift bei der Web-App → **Version: Neu** → **Bereitstellen**.  
Die Webhook-URL bleibt gleich; die Website nutzt weiterhin `PAGE_LOGS_WEBHOOK_URL` und sendet zusätzlich `action: "website_log"` für das interne Logging.
