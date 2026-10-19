# PyWeg – Python Schritt für Schritt lernen

Ein kostenloser, deutschsprachiger Lernpfad mit 28 Tageslektionen für den Einstieg in Python. Die App funktioniert ohne Build-Schritt und kann als statische Website oder installierbare PWA genutzt werden.

## Lokal starten

Öffne `index.html` im Browser. Lektionen, Übungen und Quiz funktionieren direkt. Für Installation und Offline-Modus braucht der Browser HTTPS oder `localhost`, da Service Worker nicht bei `file://` ausgeführt werden.

## Ausführliche Tageslektionen

Tag 1 ist als etwa einstündige Lerneinheit aufgebaut: 10 Minuten Lernen in drei Abschnitten, 35 Minuten für acht schrittweise Übungen und 15 Minuten für fünf Wiederholungsfragen. Die Tage 2 bis 28 folgen demselben geführten Ablauf mit ausführlichen Lernabschnitten, mehreren zunehmend anspruchsvollen Übungen und Wiederholungsfragen. Jede Aufgabe bietet eine eigene Auswertung mit Erklärung, Denkanstoß und Musterlösung. Bei offenen Programmieraufgaben vergleichst du deinen eigenen Lösungsweg selbst mit dem Beispiel; kurze Code- und Ausgabeaufgaben werden automatisch geprüft. Die Website führt Python-Code nicht selbst aus – für praktische Versuche kannst du die Beispiele zusätzlich in einem lokalen Python-Interpreter starten.

## Auf GitHub Pages veröffentlichen

1. Lade dieses Projekt in ein öffentliches GitHub-Repository hoch.
2. Öffne **Settings → Pages**.
3. Wähle als Quelle **Deploy from a branch**, den Branch `main` und den Ordner `/ (root)`.
4. Öffne die von GitHub angezeigte Pages-URL.

Die App-Dateien liegen direkt im Projektverzeichnis; ein Build-Schritt ist nicht erforderlich.

## Als App installieren und offline nutzen

Öffne die veröffentlichte HTTPS-Adresse in einem unterstützten Browser. Nutze dessen Menü **Zum Startbildschirm hinzufügen** oder **App installieren**. Die PWA speichert die App-Dateien für einen späteren Offline-Start zwischen. Die Google Fonts benötigen weiterhin eine Internetverbindung.

## Demo-Profile und Datenschutz

Die Profile **Darian** und **Nello** sind eine lokale Demo: Jedes Profil speichert den Lernstand getrennt im `localStorage` des aktuellen Browsers. Die Daten verlassen das Gerät nicht und werden **nicht** mit GitHub Pages oder anderen Geräten synchronisiert. Beide Profile lassen sich auf demselben Gerät umschalten.

Es gibt derzeit weder echte Benutzerkonten noch eine Zugriffskontrolle. Wer Browserzugriff hat, kann zwischen den Demo-Profilen wechseln. Für gemeinsame Fortschritte auf mehreren Geräten braucht das Projekt einen Backend-Dienst mit Datenbank. Werden Profile ohne Anmeldung öffentlich les- und schreibbar gemacht, kann jede Person mit der Website die Einträge lesen oder verändern. Verwende dafür keine vertraulichen Daten.

## Projektstruktur

- `index.html` – Seitenstruktur und App-Einstieg
- `style.css` – responsives Design
- `script.js` – Lernpfad, Übungen, Quiz und lokale Fortschritte
- `day-one.js` – ausführlicher interaktiver Lern-, Übungs- und Wiederholungsblock für Tag 1
- `course-content.js` – ausführliche Inhalte für die Tage 2 bis 28
- `manifest.webmanifest` – Installationsinformationen für die PWA
- `service-worker.js` – Offline-Caching
- `icon.svg` – App-Symbol
