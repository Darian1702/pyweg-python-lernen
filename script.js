const weeks = [
  {
    title: "Deine ersten Schritte",
    lessons: [
      {
        title: "Hallo, Python!",
        subtitle: "Was Python ist und wie dein erstes Programm aussieht.",
        explanation:
          "Python ist eine Programmiersprache: Du schreibst klare Anweisungen, die der Computer der Reihe nach ausführt. Mit print() gibst du Text oder Werte auf dem Bildschirm aus. Text steht in Anführungszeichen.",
        code: 'print("Hallo, Welt!")\nprint("Ich lerne Python.")',
        task: "Schreibe zwei print()-Zeilen: eine mit deinem Namen, eine mit deinem Lernziel.",
        solution: 'print("Ich bin Alex.")\nprint("Ich möchte Python lernen.")',
        question: "Was macht die Funktion print()?",
        options: [
          "Sie zeigt einen Wert oder Text an.",
          "Sie speichert eine Datei.",
          "Sie wiederholt das Programm.",
        ],
        answer: 0,
        why: "print() gibt etwas in der Konsole aus.",
        takeaway: "Python führt deine Anweisungen von oben nach unten aus.",
      },
      {
        title: "Variablen & Werte",
        subtitle: "Speichere Informationen unter einem Namen.",
        explanation:
          "Eine Variable ist ein benannter Platz für einen Wert. Mit = weist du ihr einen Wert zu. Namen beschreiben am besten den Inhalt und werden in Python üblicherweise klein_mit_unterstrichen geschrieben.",
        code: 'name = "Mina"\npunkte = 12\nprint(name)\nprint(punkte)',
        task: "Lege Variablen für deinen Namen und deine Lieblingszahl an. Gib beide aus.",
        solution: 'name = "Alex"\nlieblingszahl = 7\nprint(name)\nprint(lieblingszahl)',
        question: "Wie weist du einer Variable einen Wert zu?",
        options: ["Mit ==, zum Beispiel x == 3", "Mit =, zum Beispiel x = 3", "Mit dem Wort set"],
        answer: 1,
        why: "Ein einzelnes = weist einer Variablen den Wert auf der rechten Seite zu.",
        takeaway: "Gib Variablen klare Namen und nutze = zum Zuweisen.",
      },
      {
        title: "Zahlen & Text",
        subtitle: "Lerne die wichtigsten Datentypen kennen.",
        explanation:
          "Python unterscheidet verschiedene Arten von Werten. int steht für ganze Zahlen, float für Kommazahlen, str für Text und bool für wahr oder falsch. Der Typ beeinflusst, was du mit einem Wert machen kannst.",
        code: 'alter = 25          # int\npreis = 3.50        # float\nstadt = "Berlin"    # str\nist_online = True   # bool',
        task: "Erstelle je eine Variable für eine ganze Zahl, eine Kommazahl, einen Text und einen Wahrheitswert.",
        solution: 'anzahl = 4\npreis = 2.99\nfarbe = "blau"\nist_fertig = False',
        question: 'Welchen Typ hat der Wert "42" mit Anführungszeichen?',
        options: ["Eine Zahl (int)", "Text (str)", "Ein Wahrheitswert (bool)"],
        answer: 1,
        why: "Anführungszeichen machen den Inhalt zu Text, auch wenn er wie eine Zahl aussieht.",
        takeaway: "Anführungszeichen machen einen Wert zum Text; 3.14 ist eine Kommazahl.",
      },
      {
        title: "Eingaben vom Nutzer",
        subtitle: "Lass dein Programm mit Menschen sprechen.",
        explanation:
          "input() hält das Programm an und wartet auf eine Eingabe. Wichtig: input() liefert immer Text zurück. Wenn du mit einer Zahl rechnen willst, wandle die Eingabe zum Beispiel mit int() in eine ganze Zahl um.",
        code: 'name = input("Wie heißt du? ")\nprint("Hallo,", name)\n\nalter = int(input("Wie alt bist du? "))',
        task: "Frage nach dem Lieblingsessen und gib eine freundliche Antwort aus.",
        solution: 'essen = input("Was isst du gern? ")\nprint("Das klingt lecker:", essen)',
        question: "Welchen Typ gibt input() immer zurück?",
        options: ["Ganze Zahl", "Wahrheitswert", "Text"],
        answer: 2,
        why: "Auch wenn jemand 25 eintippt, ist das Ergebnis von input() zunächst der Text '25'.",
        takeaway: "Wandle Eingaben mit int() oder float() um, wenn du damit rechnen willst.",
      },
      {
        title: "Rechnen mit Python",
        subtitle: "Nutze Python als kleinen Taschenrechner.",
        explanation:
          "Python kann rechnen: + addiert, - subtrahiert, * multipliziert und / dividiert. Mit ** potenzierst du. Klammern funktionieren wie in der Mathematik und machen die Reihenfolge deutlich.",
        code: "preis = 12\nanzahl = 3\ngesamt = preis * anzahl\nprint(gesamt)  # 36\nprint(10 / 4)  # 2.5",
        task: "Berechne den Gesamtpreis von 3 Notizbüchern zu je 4 Euro und gib ihn aus.",
        solution: "preis = 4\nanzahl = 3\ngesamt = preis * anzahl\nprint(gesamt)",
        question: "Welches Zeichen steht für Multiplikation?",
        options: ["x", "*", "%"],
        answer: 1,
        why: "In Python ist * der Multiplikationsoperator.",
        takeaway: "Rechenzeichen in Python: +, -, *, / und ** für Potenzen.",
      },
      {
        title: "Entscheidungen mit if",
        subtitle: "Lass dein Programm auf Bedingungen reagieren.",
        explanation:
          "Mit if führst du Code nur dann aus, wenn eine Bedingung wahr ist. Ein Doppelpunkt beginnt den eingerückten Codeblock. else beschreibt den anderen Fall. Einrückungen gehören in Python zur Syntax.",
        code: 'temperatur = 18\nif temperatur > 20:\n    print("Warm!")\nelse:\n    print("Nimm eine Jacke mit.")',
        task: "Prüfe, ob eine Zahl größer oder gleich 18 ist. Gib passend 'Volljährig' oder 'Noch nicht' aus.",
        solution: 'alter = 16\nif alter >= 18:\n    print("Volljährig")\nelse:\n    print("Noch nicht")',
        question: "Woran erkennst du den Code, der zu einem if gehört?",
        options: ["An einer Einrückung", "An geschweiften Klammern", "An einem Semikolon"],
        answer: 0,
        why: "Python verwendet Einrückungen, normalerweise vier Leerzeichen, um Codeblöcke zu kennzeichnen.",
        takeaway: "Nach if und else stehen ein Doppelpunkt und ein eingerückter Codeblock.",
      },
      {
        title: "Mini-Projekt: Quiz",
        subtitle: "Verbinde Eingabe, Variablen und Entscheidungen.",
        explanation:
          "Ein kleines Quiz fasst deine ersten Bausteine zusammen: Stelle eine Frage, speichere die Antwort und vergleiche sie mit der richtigen Lösung. Mit .strip() entfernst du versehentliche Leerzeichen am Rand.",
        code: 'antwort = input("Was ist 6 * 7? ").strip()\nif antwort == "42":\n    print("Richtig! 🎉")\nelse:\n    print("Guter Versuch!")',
        task: "Baue eine eigene Quizfrage mit genau einer richtigen Antwort und einer passenden Rückmeldung.",
        solution: 'antwort = input("Wie heißt die Hauptstadt von Frankreich? ")\nif antwort.lower() == "paris":\n    print("Richtig!")\nelse:\n    print("Die Antwort ist Paris.")',
        question: "Was vergleicht == in einer Bedingung?",
        options: ["Es weist einen Wert zu.", "Es prüft, ob zwei Werte gleich sind.", "Es rundet eine Zahl."],
        answer: 1,
        why: "== vergleicht zwei Werte. Ein einzelnes = wird dagegen zum Zuweisen verwendet.",
        takeaway: "Mit == vergleichst du Werte; mit = weist du sie einer Variablen zu.",
      },
    ],
  },
  {
    title: "Schleifen & Funktionen",
    lessons: [
      {
        title: "Mehrere Fälle mit elif",
        subtitle: "Triff Entscheidungen zwischen mehreren Möglichkeiten.",
        explanation:
          "Mit elif (kurz für 'else if') prüfst du weitere Bedingungen, wenn die vorherigen nicht zutreffen. Python arbeitet die Zweige von oben nach unten ab und führt nur den ersten passenden aus.",
        code: 'punkte = 82\nif punkte >= 90:\n    note = "Sehr gut"\nelif punkte >= 75:\n    note = "Gut"\nelse:\n    note = "Weiter üben"\nprint(note)',
        task: "Gib bei einer Zahl aus, ob sie positiv, negativ oder genau null ist.",
        solution: 'zahl = -3\nif zahl > 0:\n    print("positiv")\nelif zahl < 0:\n    print("negativ")\nelse:\n    print("null")',
        question: "Wann wird ein elif-Zweig geprüft?",
        options: ["Immer vor if", "Wenn die vorherigen Bedingungen falsch waren", "Nur nach einem else"],
        answer: 1,
        why: "elif wird der Reihe nach geprüft, wenn das if und frühere elif-Bedingungen nicht zutrafen.",
        takeaway: "Mit elif kannst du mehrere Fälle der Reihe nach abfragen.",
      },
      {
        title: "Wahr oder falsch?",
        subtitle: "Kombiniere Bedingungen mit logischen Operatoren.",
        explanation:
          "Vergleiche wie alter >= 18 ergeben True oder False. Mit and müssen beide Bedingungen stimmen, mit or reicht eine. not kehrt einen Wahrheitswert um. So lassen sich Entscheidungen gut lesbar formulieren.",
        code: 'alter = 20\nhat_ticket = True\nif alter >= 18 and hat_ticket:\n    print("Eintritt erlaubt")',
        task: "Prüfe, ob jemand mindestens 16 Jahre alt ist oder eine erwachsene Begleitung hat.",
        solution: 'alter = 14\nbegleitung = True\nif alter >= 16 or begleitung:\n    print("Darf mit")\nelse:\n    print("Darf nicht mit")',
        question: "Wann ist die Bedingung A and B wahr?",
        options: ["Wenn A oder B wahr ist", "Nur wenn A und B wahr sind", "Immer"],
        answer: 1,
        why: "and ist nur wahr, wenn beide verbundenen Bedingungen wahr sind.",
        takeaway: "and verlangt alle Bedingungen, or mindestens eine.",
      },
      {
        title: "Die while-Schleife",
        subtitle: "Wiederhole Code, solange eine Bedingung stimmt.",
        explanation:
          "Eine while-Schleife wiederholt ihren eingerückten Block, solange ihre Bedingung True ist. Verändere im Block etwas an der Bedingung – sonst kann die Schleife endlos laufen.",
        code: "stand = 1\nwhile stand <= 3:\n    print(\"Runde\", stand)\n    stand = stand + 1",
        task: "Gib mit einer while-Schleife die Zahlen 1 bis 5 aus.",
        solution: "zahl = 1\nwhile zahl <= 5:\n    print(zahl)\n    zahl += 1",
        question: "Was kann passieren, wenn die Bedingung einer while-Schleife nie falsch wird?",
        options: ["Die Schleife endet sofort.", "Die Schleife läuft endlos.", "Python überspringt den Block."],
        answer: 1,
        why: "Solange die Bedingung wahr bleibt, beginnt die while-Schleife immer wieder von vorn.",
        takeaway: "Stelle sicher, dass sich die Schleifenbedingung irgendwann ändert.",
      },
      {
        title: "Die for-Schleife",
        subtitle: "Gehe Schritt für Schritt durch eine Folge.",
        explanation:
          "Mit for gehst du die Elemente einer Folge nacheinander durch. range(5) erzeugt die Zahlen 0 bis 4 – die Endzahl ist nicht enthalten. Du kannst auch Start und Schrittweite angeben.",
        code: "for zahl in range(1, 6):\n    print(zahl)\n\nfor buchstabe in \"Python\":\n    print(buchstabe)",
        task: "Gib mit einer for-Schleife das 7er-Einmaleins von 1 × 7 bis 5 × 7 aus.",
        solution: "for faktor in range(1, 6):\n    print(faktor, \"x 7 =\", faktor * 7)",
        question: "Welche Zahlen liefert range(1, 4)?",
        options: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3"],
        answer: 0,
        why: "range startet hier bei 1 und stoppt vor der Endzahl 4.",
        takeaway: "Die Endzahl von range() ist immer ausgeschlossen.",
      },
      {
        title: "Schleifen steuern",
        subtitle: "Überspringe oder beende einen Schleifendurchlauf.",
        explanation:
          "break beendet eine Schleife sofort. continue überspringt den Rest des aktuellen Durchlaufs und macht mit dem nächsten weiter. Nutze beide gezielt – oft ist eine klare Bedingung einfacher zu verstehen.",
        code: "for zahl in range(1, 6):\n    if zahl == 3:\n        continue\n    print(zahl)",
        task: "Gehe die Zahlen 1 bis 10 durch und gib nur gerade Zahlen aus.",
        solution: "for zahl in range(1, 11):\n    if zahl % 2 == 0:\n        print(zahl)",
        question: "Was bewirkt break?",
        options: ["Es beendet die Schleife.", "Es überspringt nur diesen Durchlauf.", "Es startet das Programm neu."],
        answer: 0,
        why: "break springt direkt aus der aktuellen Schleife heraus.",
        takeaway: "break beendet die Schleife, continue überspringt einen Durchlauf.",
      },
      {
        title: "Eigene Funktionen",
        subtitle: "Bündele wiederverwendbare Anweisungen.",
        explanation:
          "Mit def definierst du eine Funktion und gibst ihr einen Namen. Der eingerückte Block wird erst ausgeführt, wenn du die Funktion aufrufst. Funktionen helfen dir, Programme in übersichtliche Teile aufzuteilen.",
        code: 'def begruessung():\n    print("Schön, dass du da bist!")\n\nbegruessung()',
        task: "Schreibe eine Funktion namens zeige_tipp(), die einen Lerntipp ausgibt, und rufe sie auf.",
        solution: 'def zeige_tipp():\n    print("Übe jeden Tag ein bisschen.")\n\nzeige_tipp()',
        question: "Mit welchem Schlüsselwort definierst du eine Funktion?",
        options: ["func", "def", "make"],
        answer: 1,
        why: "Eine Funktionsdefinition in Python beginnt mit def.",
        takeaway: "def definiert eine Funktion; ihr eingerückter Code läuft beim Aufruf.",
      },
      {
        title: "Parameter & Rückgaben",
        subtitle: "Gib Funktionen Eingaben und Ergebnisse.",
        explanation:
          "Parameter sind Eingaben, die eine Funktion entgegennimmt. Mit return gibst du ein Ergebnis zurück, damit der aufrufende Code es weiterverwenden kann. print() zeigt etwas an, ersetzt aber kein return.",
        code: "def verdopple(zahl):\n    return zahl * 2\n\nergebnis = verdopple(6)\nprint(ergebnis)  # 12",
        task: "Schreibe eine funktion quadrat(zahl), die die Zahl mit sich selbst multipliziert und das Ergebnis zurückgibt.",
        solution: "def quadrat(zahl):\n    return zahl * zahl\n\nprint(quadrat(5))",
        question: "Wofür nutzt du return?",
        options: ["Um ein Ergebnis an den Aufrufer zurückzugeben", "Um eine Schleife zu starten", "Um Text auszugeben"],
        answer: 0,
        why: "return liefert einen Wert zurück, den der restliche Code speichern oder weiterverarbeiten kann.",
        takeaway: "Parameter bringen Werte hinein, return gibt ein Ergebnis zurück.",
      },
    ],
  },
  {
    title: "Daten & Projekte",
    lessons: [
      {
        title: "Listen erstellen",
        subtitle: "Speichere mehrere Werte in einer Sammlung.",
        explanation:
          "Eine Liste speichert mehrere Werte in einer festen Reihenfolge. Du schreibst sie in eckige Klammern. Der Zugriff beginnt bei Index 0: Das erste Element hat den Index 0, das letzte den Index -1.",
        code: 'farben = ["grün", "blau", "rot"]\nprint(farben[0])   # grün\nprint(farben[-1])  # rot',
        task: "Lege eine Liste deiner drei Lieblingsgerichte an und gib das zweite Gericht aus.",
        solution: 'gerichte = ["Pasta", "Curry", "Pizza"]\nprint(gerichte[1])',
        question: "Welchen Index hat das erste Element einer Liste?",
        options: ["0", "1", "-1"],
        answer: 0,
        why: "Python beginnt bei Listen mit dem Index 0.",
        takeaway: "Listen sind geordnet und zählen ab Index 0.",
      },
      {
        title: "Listen verändern",
        subtitle: "Füge Einträge hinzu, ändere sie und zähle nach.",
        explanation:
          "Listen sind veränderbar. append() fügt ein Element am Ende an, remove() entfernt einen passenden Wert und len() zählt die Elemente. Mit einer for-Schleife kannst du die ganze Liste durchgehen.",
        code: 'aufgaben = ["lesen", "üben"]\naufgaben.append("wiederholen")\nprint(len(aufgaben))\nfor aufgabe in aufgaben:\n    print(aufgabe)',
        task: "Erstelle eine Einkaufsliste mit zwei Dingen und hänge mit append() ein drittes an.",
        solution: 'einkauf = ["Brot", "Äpfel"]\neinkauf.append("Milch")\nprint(einkauf)',
        question: "Was macht liste.append(wert)?",
        options: ["Fügt wert am Listenende an", "Zählt die Werte", "Sortiert die Liste alphabetisch"],
        answer: 0,
        why: "append() hängt genau ein Element an das Ende der Liste.",
        takeaway: "append() ergänzt eine Liste, len() zählt ihre Elemente.",
      },
      {
        title: "Wörterbücher",
        subtitle: "Ordne Werte passenden Schlüsseln zu.",
        explanation:
          "Ein Wörterbuch (dict) speichert Schlüssel-Wert-Paare. Damit kannst du Informationen über einen Namen statt über eine Position abrufen. Schlüssel stehen meist als Text in Anführungszeichen.",
        code: 'person = {"name": "Mina", "alter": 25}\nprint(person["name"])\nperson["stadt"] = "Hamburg"\nprint(person)',
        task: "Erstelle ein Wörterbuch für ein Buch mit den Schlüsseln titel und autor. Gib den Titel aus.",
        solution: 'buch = {"titel": "Python lernen", "autor": "Sam"}\nprint(buch["titel"])',
        question: "Wie greifst du auf den Wert zum Schlüssel 'name' zu?",
        options: ['person.name', 'person["name"]', "person(0)"],
        answer: 1,
        why: "Wörterbuchwerte rufst du über eckige Klammern und ihren Schlüssel ab.",
        takeaway: "dict ordnet Werte Schlüsseln zu: daten[\"schluessel\"].",
      },
      {
        title: "Tupel & Mengen",
        subtitle: "Lerne zwei weitere praktische Sammlungen kennen.",
        explanation:
          "Ein Tupel ähnelt einer Liste, ist aber unveränderbar und wird meist mit runden Klammern geschrieben. Eine Menge (set) enthält jedes Element höchstens einmal – praktisch, um doppelte Werte zu entfernen.",
        code: 'koordinaten = (52.5, 13.4)\nfarben = {"rot", "blau", "rot"}\nprint(koordinaten[0])\nprint(farben)  # rot nur einmal',
        task: "Wandle eine Liste mit doppelten Zahlen mit set() in eine Menge um.",
        solution: "zahlen = [1, 2, 2, 3, 3]\neindeutig = set(zahlen)\nprint(eindeutig)",
        question: "Was passiert mit doppelten Werten in einer Menge?",
        options: ["Sie werden automatisch entfernt.", "Sie bleiben immer erhalten.", "Python meldet einen Fehler."],
        answer: 0,
        why: "Mengen speichern jeden Wert höchstens einmal.",
        takeaway: "Tupel sind unveränderbar; Mengen enthalten eindeutige Werte.",
      },
      {
        title: "Fehler verstehen",
        subtitle: "Lies Fehlermeldungen und fange Ausnahmen ab.",
        explanation:
          "Fehlermeldungen zeigen meist die betroffene Zeile und eine Ursache. try/except fängt erwartbare Fehler ab, etwa eine ungültige Zahleneingabe. Fange möglichst konkrete Fehler wie ValueError statt alle Fehler pauschal ab.",
        code: 'eingabe = input("Dein Alter: ")\ntry:\n    alter = int(eingabe)\n    print("Nächstes Jahr:", alter + 1)\nexcept ValueError:\n    print("Bitte gib eine ganze Zahl ein.")',
        task: "Wandle eine Nutzereingabe mit int() um und gib eine hilfreiche Meldung aus, falls sie ungültig ist.",
        solution: 'try:\n    zahl = int(input("Zahl: "))\n    print(zahl * 2)\nexcept ValueError:\n    print("Das war keine ganze Zahl.")',
        question: "Welchen Fehler fängt int('hallo') typischerweise aus?",
        options: ["ValueError", "KeyError", "IndexError"],
        answer: 0,
        why: "ValueError bedeutet hier: Der Wert passt nicht zum erwarteten Format einer ganzen Zahl.",
        takeaway: "Lies die Fehlermeldung und fange nur Fehler ab, mit denen du rechnest.",
      },
      {
        title: "Dateien lesen & schreiben",
        subtitle: "Bewahre Daten über einen Programmstart hinaus auf.",
        explanation:
          "Mit open() öffnest du eine Datei. Der with-Block schließt sie anschließend zuverlässig. Der Modus 'w' schreibt neu, 'a' hängt an und 'r' liest. UTF-8 unterstützt Umlaute.",
        code: 'with open("notiz.txt", "w", encoding="utf-8") as datei:\n    datei.write("Heute Python geübt!")\n\nwith open("notiz.txt", encoding="utf-8") as datei:\n    text = datei.read()\nprint(text)',
        task: "Schreibe einen kurzen Text in eine Datei namens tagebuch.txt.",
        solution: 'with open("tagebuch.txt", "w", encoding="utf-8") as datei:\n    datei.write("Mein erster Dateieintrag.")',
        question: "Warum ist with open(...) praktisch?",
        options: ["Es schließt die Datei zuverlässig.", "Es verschlüsselt die Datei.", "Es löscht die Datei automatisch."],
        answer: 0,
        why: "Nach dem with-Block wird die Datei automatisch geschlossen.",
        takeaway: "Nutze with open() und gib bei Textdateien encoding=\"utf-8\" an.",
      },
      {
        title: "Module verwenden",
        subtitle: "Nutze hilfreiche Funktionen aus der Python-Bibliothek.",
        explanation:
          "Ein Modul ist eine Datei mit wiederverwendbarem Python-Code. Mit import holst du Module wie math oder random in dein Programm. So musst du nützliche Funktionen nicht selbst neu schreiben.",
        code: "import random\n\ngeheimzahl = random.randint(1, 10)\nprint(geheimzahl)\n\nimport math\nprint(math.sqrt(81))  # 9.0",
        task: "Importiere das Modul math und berechne die Quadratwurzel von 144.",
        solution: "import math\nwurzel = math.sqrt(144)\nprint(wurzel)",
        question: "Mit welchem Schlüsselwort bindest du ein Modul ein?",
        options: ["include", "import", "module"],
        answer: 1,
        why: "Mit import machst du ein Modul in deinem Programm verfügbar.",
        takeaway: "Mit import nutzt du Standardmodule wie math, random und json.",
      },
    ],
  },
  {
    title: "Selbstständig werden",
    lessons: [
      {
        title: "Klassen & Objekte",
        subtitle: "Bündele zusammengehörige Daten und Verhalten.",
        explanation:
          "Eine Klasse ist ein Bauplan für Objekte. Jedes Objekt kann eigene Daten besitzen. Die Methode __init__ wird beim Erstellen aufgerufen; self steht für das jeweilige Objekt selbst.",
        code: 'class Hund:\n    def __init__(self, name):\n        self.name = name\n\nmein_hund = Hund("Bello")\nprint(mein_hund.name)',
        task: "Erstelle eine Klasse Buch, die beim Erstellen einen titel erhält.",
        solution: 'class Buch:\n    def __init__(self, titel):\n        self.titel = titel\n\nbuch = Buch("Python leicht gemacht")\nprint(buch.titel)',
        question: "Was beschreibt eine Klasse?",
        options: ["Einen Bauplan für Objekte", "Eine Zahlenschleife", "Eine Textdatei"],
        answer: 0,
        why: "Aus einer Klasse erzeugst du einzelne Objekte, die ihre eigenen Daten haben.",
        takeaway: "Eine Klasse beschreibt, Objekte enthalten konkrete Werte.",
      },
      {
        title: "Methoden schreiben",
        subtitle: "Gib deinen Objekten eigene Fähigkeiten.",
        explanation:
          "Eine Methode ist eine Funktion innerhalb einer Klasse. Ihr erster Parameter ist üblicherweise self. Über self greift die Methode auf die Daten ihres Objekts zu.",
        code: 'class Hund:\n    def __init__(self, name):\n        self.name = name\n\n    def bellen(self):\n        print(self.name, "sagt Wuff!")\n\nHund("Bello").bellen()',
        task: "Ergänze die Klasse Buch um eine Methode zeige_titel(), die den Titel ausgibt.",
        solution: 'class Buch:\n    def __init__(self, titel):\n        self.titel = titel\n\n    def zeige_titel(self):\n        print(self.titel)',
        question: "Wofür steht self in einer Methode?",
        options: ["Für das aktuelle Objekt", "Für die gesamte Klasse", "Für den letzten Funktionsaufruf"],
        answer: 0,
        why: "self verweist auf das Objekt, auf dem die Methode gerade aufgerufen wird.",
        takeaway: "Methoden sind Funktionen einer Klasse und nutzen self für ihr Objekt.",
      },
      {
        title: "Code organisieren",
        subtitle: "Halte Programme lesbar und Dateien übersichtlich.",
        explanation:
          "Guter Code ist nicht nur ausführbar, sondern auch lesbar. Verwende sprechende Namen, vier Leerzeichen Einrückung und kleine Funktionen. Trenne zusammengehörigen Code später in Module auf.",
        code: 'def berechne_mittelwert(zahlen):\n    if not zahlen:\n        return 0\n    return sum(zahlen) / len(zahlen)\n\nwerte = [4, 6, 8]\nprint(berechne_mittelwert(werte))',
        task: "Verbessere die Namen in deinem Quizprojekt, sodass Variablen und Funktionen ihren Zweck verraten.",
        solution: 'def pruefe_antwort(antwort, loesung):\n    return antwort.strip().lower() == loesung.lower()',
        question: "Was hilft, damit andere deinen Code schneller verstehen?",
        options: ["Sprechende Namen und kleine Funktionen", "Alles in eine Zeile schreiben", "Variablen a, b und c nennen"],
        answer: 0,
        why: "Klare Namen und kleine Aufgaben pro Funktion machen Code leichter lesbar und änderbar.",
        takeaway: "Schreibe Code so, dass du ihn auch nächste Woche noch verstehst.",
      },
      {
        title: "Pakete & Umgebung",
        subtitle: "Lerne den nächsten Schritt außerhalb der Grundlagen kennen.",
        explanation:
          "Python bringt viele Module direkt mit. Externe Pakete installierst du typischerweise mit pip. Eine virtuelle Umgebung hält die Pakete eines Projekts getrennt von anderen Projekten.",
        code: "# Virtuelle Umgebung im Projekt anlegen:\n# python -m venv .venv\n\n# Umgebung in Windows PowerShell aktivieren:\n# .venv\\Scripts\\Activate.ps1\n\n# Paket installieren:\n# python -m pip install requests",
        task: "Finde heraus, welche Python-Version bei dir installiert ist. Nutze dafür den Befehl aus dem Beispiel.",
        solution: "# Im Terminal ausführen:\npython --version",
        question: "Wozu dient eine virtuelle Umgebung?",
        options: ["Sie trennt Projektabhängigkeiten voneinander.", "Sie beschleunigt jeden Python-Code automatisch.", "Sie ersetzt den Python-Interpreter."],
        answer: 0,
        why: "Jedes Projekt kann so eigene Paketversionen haben, ohne andere Projekte zu beeinflussen.",
        takeaway: "Mit venv bleiben installierte Pakete pro Projekt übersichtlich.",
      },
      {
        title: "Testen & Fehler suchen",
        subtitle: "Prüfe deine Annahmen und finde Bugs systematisch.",
        explanation:
          "Ein Test prüft, ob dein Code für einen bekannten Fall das erwartete Ergebnis liefert. Beginne mit kleinen Funktionen, nutze print() oder den Debugger, und lies Fehlermeldungen von unten nach oben aufmerksam.",
        code: "def verdopple(zahl):\n    return zahl * 2\n\nassert verdopple(3) == 6\nassert verdopple(0) == 0\nprint(\"Alle Tests bestanden\")",
        task: "Schreibe eine Funktion addiere(a, b) und prüfe mit assert, dass addiere(2, 3) gleich 5 ist.",
        solution: "def addiere(a, b):\n    return a + b\n\nassert addiere(2, 3) == 5",
        question: "Was passiert, wenn eine assert-Bedingung falsch ist?",
        options: ["Python meldet einen AssertionError.", "Der Test wird still übersprungen.", "Python korrigiert das Ergebnis."],
        answer: 0,
        why: "assert signalisiert mit AssertionError, dass eine Annahme nicht erfüllt wurde.",
        takeaway: "Teste typische Fälle und auch Randfälle wie leere Eingaben oder Null.",
      },
      {
        title: "JSON & strukturierte Daten",
        subtitle: "Tausche Daten in einem weit verbreiteten Format aus.",
        explanation:
          "JSON ist ein Textformat, das Daten strukturiert speichert und oft für Web-APIs verwendet wird. Das Python-Modul json kann passende Python-Werte mit dumps() in JSON-Text und mit loads() zurückwandeln.",
        code: 'import json\n\nperson = {"name": "Mina", "punkte": 12}\ntext = json.dumps(person)\nprint(text)\n\nzurueck = json.loads(text)\nprint(zurueck["name"])',
        task: "Wandle ein Wörterbuch mit deinem Namen und deiner Lieblingszahl in JSON-Text um.",
        solution: 'import json\ndaten = {"name": "Alex", "zahl": 7}\njson_text = json.dumps(daten)\nprint(json_text)',
        question: "Welches Modul bringt Python zum Arbeiten mit JSON mit?",
        options: ["json", "web", "data"],
        answer: 0,
        why: "Das eingebaute Modul json stellt unter anderem dumps() und loads() bereit.",
        takeaway: "JSON speichert strukturierte Daten als Text und lässt sich leicht austauschen.",
      },
      {
        title: "Dein Abschlussprojekt",
        subtitle: "Baue ein kleines Programm aus deinen neuen Bausteinen.",
        explanation:
          "Zeit, alles zusammenzubringen: Ein kleines Aufgabenlisten-Programm kann Aufgaben speichern, neue Einträge annehmen und sie anzeigen. Starte einfach und erweitere das Programm Schritt für Schritt.",
        code: 'aufgaben = []\n\nwhile True:\n    neu = input("Neue Aufgabe (oder Ende): ")\n    if neu.lower() == "ende":\n        break\n    aufgaben.append(neu)\n\nfor nummer, aufgabe in enumerate(aufgaben, start=1):\n    print(nummer, aufgabe)',
        task: "Baue eine kleine Aufgabenliste. Erweiterungsidee: Speichere die Liste am Ende mit open() in einer Datei.",
        solution: 'aufgaben = ["Python üben", "Pause machen"]\nfor nummer, aufgabe in enumerate(aufgaben, start=1):\n    print(f"{nummer}. {aufgabe}")',
        question: "Was ist der beste erste Schritt bei einem eigenen Projekt?",
        options: ["Das Problem in kleine, umsetzbare Schritte teilen", "Sofort möglichst viele Funktionen ergänzen", "Erst den gesamten Code auswendig lernen"],
        answer: 0,
        why: "Kleine, überprüfbare Schritte machen ein Projekt einfacher und helfen dir, Fehler gezielt zu finden.",
        takeaway: "Du hast jetzt die Grundlagen: Baue weiter, probiere Dinge aus und lies den Code anderer.",
      },
    ],
  },
];

const lessons = weeks.flatMap((week, weekIndex) =>
  week.lessons.map((lesson, dayIndex) => ({
    ...lesson,
    id: weekIndex * 7 + dayIndex + 1,
    week: weekIndex + 1,
    weekTitle: week.title,
  })),
);

const STORAGE_KEY = "pyweg-learning-progress-v1";
const PROFILE_IDS = ["darian", "nello"];
const PROFILE_NAMES = { darian: "Darian", nello: "Nello" };
const courseNav = document.querySelector("#course-nav");
const lessonView = document.querySelector("#lesson-view");
const profileSelect = document.querySelector("#profile-select");
const progressPercent = document.querySelector("#progress-percent");
const progressFill = document.querySelector("#progress-fill");
const progressTrack = document.querySelector("#progress-track");
const progressCount = document.querySelector("#progress-count");

function readSavedState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const emptyProfile = () => ({ completed: [], currentLesson: 1 });
  if (!saved) {
    return {
      activeProfile: "darian",
      profiles: { darian: emptyProfile(), nello: emptyProfile() },
    };
  }

  const parsed = JSON.parse(saved);
  if (parsed.profiles) {
    const profiles = Object.fromEntries(
      PROFILE_IDS.map((id) => {
        const profile = parsed.profiles[id] || emptyProfile();
        const completed = Array.isArray(profile.completed)
          ? profile.completed.filter((lessonId) =>
              lessons.some((lesson) => lesson.id === lessonId),
            )
          : [];
        const currentLesson = lessons.some(
          (lesson) => lesson.id === profile.currentLesson,
        )
          ? profile.currentLesson
          : 1;
        return [id, { completed, currentLesson }];
      }),
    );
    const activeProfile = PROFILE_IDS.includes(parsed.activeProfile)
      ? parsed.activeProfile
      : "darian";
    return { activeProfile, profiles };
  }

  const darian = emptyProfile();
  if (Array.isArray(parsed.completed)) {
    darian.completed = parsed.completed.filter((id) =>
      lessons.some((lesson) => lesson.id === id),
    );
  }
  if (lessons.some((lesson) => lesson.id === parsed.currentLesson)) {
    darian.currentLesson = parsed.currentLesson;
  }

  return {
    activeProfile: "darian",
    profiles: { darian, nello: emptyProfile() },
  };
}

function currentProfile() {
  return state.profiles[state.activeProfile];
}

let state = readSavedState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function renderNavigation() {
  const profile = currentProfile();
  courseNav.innerHTML = weeks
    .map((week, weekIndex) => {
      const weekLessons = lessons.filter(
        (lesson) => lesson.week === weekIndex + 1,
      );
      const days = weekLessons
        .map((lesson) => {
          const active = lesson.id === profile.currentLesson;
          const complete = profile.completed.includes(lesson.id);
          const classes = [
            "day-link",
            active ? "day-link--active" : "",
            complete ? "day-link--complete" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const marker = complete ? "✓" : String(lesson.id).padStart(2, "0");

          return `<button class="${classes}" type="button" data-lesson-id="${lesson.id}"${active ? ' aria-current="step"' : ""}>
            <span class="day-link__number" aria-hidden="true">${marker}</span>
            <span class="day-link__title">Tag ${lesson.id} · ${escapeHtml(lesson.title)}</span>
          </button>`;
        })
        .join("");

      return `<section class="week-nav" aria-label="Woche ${weekIndex + 1}: ${escapeHtml(week.title)}">
        <h3 class="week-nav__heading"><span>0${weekIndex + 1}</span> ${escapeHtml(week.title)}</h3>
        <div class="week-nav__days">${days}</div>
      </section>`;
    })
    .join("");
}

function updateProgress() {
  const completed = currentProfile().completed.length;
  const percent = Math.round((completed / lessons.length) * 100);
  progressPercent.textContent = `${percent} %`;
  progressFill.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(completed));
  progressCount.textContent = `${completed} von ${lessons.length} Lektionen`;
}

function renderLesson() {
  const profile = currentProfile();
  const lesson = lessons.find((item) => item.id === profile.currentLesson);
  if (!lesson) return;

  const isComplete = profile.completed.includes(lesson.id);
  lessonView.innerHTML = `
    <header class="lesson-heading">
      <div class="lesson-heading__meta">
        <span>Woche ${lesson.week} · ${escapeHtml(lesson.weekTitle)}</span>
        <span>Tag ${String(lesson.id).padStart(2, "0")} von 28</span>
      </div>
      <h1>${escapeHtml(lesson.title)}</h1>
      <p class="lesson-heading__subtitle">${escapeHtml(lesson.subtitle)}</p>
    </header>

    <section class="time-plan" aria-label="Vorschlag für deine Lernstunde">
      <div class="time-plan__item"><span class="time-plan__minutes">10 min</span><span class="time-plan__label">Lernen</span></div>
      <div class="time-plan__item"><span class="time-plan__minutes">35 min</span><span class="time-plan__label">Üben & ausprobieren</span></div>
      <div class="time-plan__item"><span class="time-plan__minutes">15 min</span><span class="time-plan__label">Wiederholen</span></div>
    </section>

    <article class="lesson-card">
      <p class="section-label"><span class="section-label__icon" aria-hidden="true">✳</span>Das lernst du heute</p>
      <h2>${escapeHtml(lesson.title)}</h2>
      <p class="lesson-card__text">${escapeHtml(lesson.explanation)}</p>
      <pre class="code-example"><code>${escapeHtml(lesson.code)}</code></pre>
      <p class="lesson-card__note"><span aria-hidden="true">✦</span><span>${escapeHtml(lesson.takeaway)}</span></p>
    </article>

    <div class="practice-quiz-grid">
      <section class="practice-card" aria-labelledby="practice-title">
        <p class="section-label"><span class="section-label__icon" aria-hidden="true">⌘</span>Jetzt bist du dran</p>
        <h2 id="practice-title">Deine Übung</h2>
        <p class="practice-card__prompt">${escapeHtml(lesson.task)}</p>
        <details class="solution">
          <summary>Lösung ansehen</summary>
          <pre><code>${escapeHtml(lesson.solution)}</code></pre>
        </details>
      </section>

      <section class="quiz-card" aria-labelledby="quiz-title">
        <p class="section-label"><span class="section-label__icon" aria-hidden="true">?</span>Kurz-Check</p>
        <h2 id="quiz-title">Hast du's verstanden?</h2>
        <p class="quiz-card__text">${escapeHtml(lesson.question)}</p>
        <form class="quiz-form" data-quiz-id="${lesson.id}">
          ${lesson.options
            .map(
              (option, index) => `<label class="quiz-option">
                <input type="radio" name="answer" value="${index}" />
                <span>${escapeHtml(option)}</span>
              </label>`,
            )
            .join("")}
          <button class="quiz-submit" type="submit">Antwort prüfen</button>
          <p class="quiz-feedback" id="quiz-feedback" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>

    <div class="lesson-footer">
      <p class="lesson-footer__hint">Tipp: Schreib den Beispielcode selbst ab und verändere ihn.</p>
      <button class="complete-button${isComplete ? " complete-button--done" : ""}" type="button" data-action="toggle-complete">
        <span aria-hidden="true">${isComplete ? "✓" : "○"}</span>
        ${isComplete ? "Lektion erledigt" : "Als erledigt markieren"}
      </button>
    </div>

    <nav class="lesson-nav" aria-label="Zur nächsten oder vorherigen Lektion">
      <button type="button" data-action="previous"${lesson.id === 1 ? " disabled" : ""}>← Vorherige Lektion</button>
      <button type="button" data-action="next"${lesson.id === lessons.length ? " disabled" : ""}>Nächste Lektion →</button>
    </nav>
  `;
}

function renderApp() {
  profileSelect.value = state.activeProfile;
  renderNavigation();
  updateProgress();
  renderLesson();
}

courseNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-id]");
  if (!button) return;
  currentProfile().currentLesson = Number(button.dataset.lessonId);
  saveState();
  renderApp();
  lessonView.scrollIntoView({ behavior: "smooth", block: "start" });
});

profileSelect.addEventListener("change", () => {
  state.activeProfile = profileSelect.value;
  saveState();
  renderApp();
});

lessonView.addEventListener("submit", (event) => {
  if (!event.target.matches(".quiz-form")) return;
  event.preventDefault();

  const lessonId = Number(event.target.dataset.quizId);
  const lesson = lessons.find((item) => item.id === lessonId);
  const selected = event.target.querySelector('input[name="answer"]:checked');
  const feedback = event.target.querySelector("#quiz-feedback");

  if (!selected) {
    feedback.textContent = "Wähle erst eine Antwort aus.";
    feedback.classList.remove("quiz-feedback--correct");
    return;
  }

  if (Number(selected.value) === lesson.answer) {
    feedback.textContent = `Richtig! ${lesson.why}`;
    feedback.classList.add("quiz-feedback--correct");
  } else {
    feedback.textContent = `Noch nicht ganz. Versuch es noch einmal. ${lesson.why}`;
    feedback.classList.remove("quiz-feedback--correct");
  }
});

lessonView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button || button.disabled) return;

  const profile = currentProfile();
  const lesson = lessons.find((item) => item.id === profile.currentLesson);

  if (button.dataset.action === "toggle-complete") {
    if (profile.completed.includes(lesson.id)) {
      profile.completed = profile.completed.filter((id) => id !== lesson.id);
    } else {
      profile.completed.push(lesson.id);
    }
  } else if (button.dataset.action === "previous") {
    profile.currentLesson = Math.max(1, lesson.id - 1);
  } else if (button.dataset.action === "next") {
    profile.currentLesson = Math.min(lessons.length, lesson.id + 1);
  } else {
    return;
  }

  saveState();
  renderApp();

  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Der Offline-Modus konnte nicht eingerichtet werden.", error);
    });
  }
  lessonView.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderApp();
