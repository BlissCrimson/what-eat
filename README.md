# What eat?

Eine kleine Progressive Web App, die dir spontan vorschlägt, was du essen sollst – ausgewählt aus deiner eigenen, selbst gepflegten Liste von Gerichten.

## Features

- Zufälligen Essensvorschlag per Knopfdruck generieren
- Eigene Gerichteliste verwalten (hinzufügen/löschen)
- Speicherung lokal im Browser (localStorage) – kein Server nötig
- Installierbar als PWA (Icons für Web, Android und iOS, Offline-Fähigkeit via Service Worker)

## Tech-Stack

- Vanilla HTML, CSS und JavaScript (kein Framework, kein Build-Schritt)
- [`http-server`](https://www.npmjs.com/package/http-server) für die lokale Entwicklung
- [`pnpm`](https://pnpm.io/) als Paketmanager
- `eslint` und `prettier` für Code-Qualität

## Lokales Setup

```bash
pnpm install
pnpm dev
```

Anschließend die App im Browser unter der ausgegebenen URL öffnen (in der Regel `http://localhost:8080`).

## Projektstruktur

- `index.html` – Startseite mit dem "WHAT EAT?"-Button
- `pages/` – Unterseiten (Gerichte verwalten, Impressum, Datenschutzerklärung)
- `js/` – Anwendungslogik (Gerichteverwaltung, localStorage, UI)
- `css/` – Styles
- `manifest.json` – PWA-Manifest

## Lizenz

ISC

---

# What eat?

A small Progressive Web App that spontaneously suggests what to eat – picked from your own, self-maintained list of dishes.

## Features

- Generate a random meal suggestion at the click of a button
- Manage your own list of dishes (add/delete)
- Stored locally in the browser (localStorage) – no server required
- Installable as a PWA (icons for web, Android and iOS, offline support via service worker)

## Tech Stack

- Vanilla HTML, CSS and JavaScript (no framework, no build step)
- [`http-server`](https://www.npmjs.com/package/http-server) for local development
- [`pnpm`](https://pnpm.io/) as package manager
- `eslint` and `prettier` for code quality

## Local Setup

```bash
pnpm install
pnpm dev
```

Then open the app in your browser at the printed URL (usually `http://localhost:8080`).

## Project Structure

- `index.html` – home page with the "WHAT EAT?" button
- `pages/` – sub-pages (manage dishes, imprint, privacy policy)
- `js/` – application logic (dish management, localStorage, UI)
- `css/` – styles
- `manifest.json` – PWA manifest

## License

ISC
