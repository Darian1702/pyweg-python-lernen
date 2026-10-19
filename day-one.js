const dayOneCurriculum = {
  learning: [
    {
      title: "1. Was ist ein Programm?",
      duration: 3,
      objective: "Anweisungen lesen und ihre Reihenfolge vorhersagen",
      explanation:
        "Ein Programm ist eine Reihe genauer Anweisungen. Python führt die Zeilen von oben nach unten aus. `print(...)` zeigt etwas in der Konsole an. Die Klammern gehören zum Befehl; darin steht, was angezeigt werden soll.",
      example: 'print("Guten Morgen!")\nprint("Ich lerne Python.")',
      walkthrough:
        "Die erste Zeile wird zuerst ausgeführt und zeigt Guten Morgen! an. Danach zeigt die zweite Zeile Ich lerne Python. an. Weil es zwei print-Aufrufe sind, erscheint die Ausgabe auf zwei Zeilen.",
      practice:
        "Lies beide Zeilen laut und sage vor dem Weiterlesen voraus, welcher Text zuerst erscheint.",
      takeaway: "Python arbeitet ein Programm Zeile für Zeile von oben nach unten ab.",
    },
    {
      title: "2. Text braucht Anführungszeichen",
      duration: 4,
      objective: "Text als Zeichenkette schreiben und Anführungszeichen paaren",
      explanation:
        "Textwerte heißen in Python Zeichenketten (englisch: strings). Du schreibst sie zwischen passende einfache oder doppelte Anführungszeichen. Öffnendes und schließendes Zeichen müssen zusammenpassen. Ohne Anführungszeichen versucht Python, den Inhalt als Namen eines Befehls oder einer Variablen zu verstehen.",
      example: 'print("Python macht Spaß!")\nprint(\'Einfach oder doppelt – beides geht.\')',
      walkthrough:
        "Die Klammern gehören zu print. Die Anführungszeichen markieren jeweils den Anfang und das Ende des Texts; sie werden nicht mit ausgegeben. Einfache und doppelte Anführungszeichen funktionieren beide, solange du am Anfang und Ende dasselbe verwendest.",
      practice:
        'Vergleiche print("Hallo!") mit print(Hallo!). Nur die erste Zeile sagt Python eindeutig, dass Hallo! Text ist.',
      takeaway: "Text kommt in passende Anführungszeichen. Ein öffnendes Zeichen braucht ein schließendes.",
    },
    {
      title: "3. Was genau gibt print aus?",
      duration: 3,
      objective: "Die sichtbare Ausgabe von Text und print-Aufrufen unterscheiden",
      explanation:
        "print zeigt den Inhalt innerhalb der Anführungszeichen an – nicht die Anführungszeichen selbst. Jeder neue print-Aufruf beginnt standardmäßig in einer neuen Zeile. Leerzeichen innerhalb des Texts bleiben erhalten.",
      example: 'print("Hallo")\nprint("Python!")',
      walkthrough:
        "Die Ausgabe hat zwei Zeilen: zuerst Hallo, dann Python!. Die runden Klammern und Anführungszeichen sind Schreibweise im Programm, nicht Teil der Ausgabe.",
      practice:
        "Decke den Beispielcode ab und schreibe aus dem Gedächtnis auf, was in der Konsole zu sehen wäre.",
      takeaway: "Unterscheide zwischen dem Code, den du schreibst, und dem Text, den print anzeigt.",
    },
  ],
  practice: [
    {
      title: "Vorhersagen",
      duration: 4,
      prompt: 'Was zeigt dieses Programm zuerst an?\n\nprint("Guten Tag!")',
      type: "choice",
      options: [
        "Guten Tag!",
        'print("Guten Tag!")',
        '"Guten Tag!" mit den Anführungszeichen',
      ],
      answer: 0,
      optionFeedback: [
        "Genau: print zeigt den Text in den Anführungszeichen an.",
        "Fast – das ist der geschriebene Code. Python führt print aus und zeigt dessen Inhalt an.",
        "Die Anführungszeichen markieren den Text im Code. Sie erscheinen nicht in der Ausgabe.",
      ],
      explanation:
        "print ist eine Anweisung. Python führt sie aus und zeigt den Text innerhalb der Anführungszeichen an. Der Befehl selbst und die Anführungszeichen werden nicht mit ausgegeben.",
      hint: "Trenne den Befehl print(...) vom Inhalt zwischen den Anführungszeichen.",
      solution: "Guten Tag!",
    },
    {
      title: "Zeilen lesen",
      duration: 4,
      prompt:
        "Schreibe die Ausgabe auf. Was erscheint auf der ersten und was auf der zweiten Zeile?",
      type: "text",
      code: 'print("Rot")\nprint("Blau")',
      accepted: ["Rot\nBlau"],
      explanation:
        "Jeder print-Aufruf beginnt standardmäßig eine neue Ausgabezeile. Die Anweisungen laufen der Reihenfolge nach: erst Rot, dann Blau.",
      errorFeedback:
        "Wenn beide Wörter bei dir auf einer Zeile stehen, prüfe, ob du zwei getrennte print-Aufrufe erkannt hast. Wenn du die Anführungszeichen mitgeschrieben hast: Sie dienen im Code als Begrenzung und werden nicht angezeigt.",
      hint: "Verfolge die Zeilen von oben nach unten. Jeder print beginnt eine neue Zeile.",
      solution: "Rot\nBlau",
      solutionLabel: "Ausgabe",
    },
    {
      title: "Text erkennen",
      duration: 3,
      prompt:
        "Welche Zeile ist ein gültiger print-Aufruf, der das Wort Python als Text ausgibt?",
      type: "choice",
      options: [
        'print("Python")',
        "print(Python)",
        'print("Python)',
      ],
      answer: 0,
      optionFeedback: [
        "Richtig. Der Text steht in runden Klammern und zwischen passenden Anführungszeichen.",
        "Ohne Anführungszeichen behandelt Python Python als Variablennamen. Ist keine solche Variable definiert, gibt es einen NameError.",
        "Das schließende Anführungszeichen fehlt. Python kann dadurch nicht erkennen, wo der Text endet.",
      ],
      explanation:
        "Python braucht bei Text sowohl die runden Klammern des Funktionsaufrufs als auch passende Anführungszeichen um den Text.",
      hint: "Prüfe beide Paare: runde Klammern und Anführungszeichen.",
      solution: 'print("Python")',
    },
    {
      title: "Deine erste eigene Zeile",
      duration: 4,
      prompt:
        'Schreibe eine gültige Python-Zeile, die genau Willkommen bei Python! ausgibt.',
      type: "code",
      accepted: [
        'print("Willkommen bei Python!")',
        "print('Willkommen bei Python!')",
      ],
      explanation:
        "Der Name der Funktion wird kleingeschrieben. Der Text kommt in runde Klammern und in passende Anführungszeichen. Die Anführungszeichen selbst erscheinen nicht in der Ausgabe.",
      errorFeedback:
        "Häufige Stolperstellen: print großschreiben, die runden Klammern vergessen oder nur ein Anführungszeichen setzen. Python unterscheidet Groß- und Kleinschreibung.",
      hint: "Beginne mit print( und setze den Text in ein passendes Anführungszeichenpaar.",
      solution: 'print("Willkommen bei Python!")',
      solutionLabel: "Beispielcode",
    },
    {
      title: "Die Reihenfolge zählt",
      duration: 4,
      prompt:
        "Welche Ausgabe entsteht? Achte auf die Reihenfolge der beiden Anweisungen.",
      type: "text",
      code: 'print("1. Schritt")\nprint("2. Schritt")',
      accepted: ["1. Schritt\n2. Schritt"],
      explanation:
        "Python beginnt mit der obersten Zeile und arbeitet nach unten. Die erste Anweisung gibt deshalb 1. Schritt aus, bevor die zweite 2. Schritt anzeigt.",
      errorFeedback:
        "Python sortiert Ausgaben nicht und führt sie nicht rückwärts aus. Gehe den Code Zeile für Zeile von oben nach unten durch.",
      hint: "Die oberste print-Zeile wird zuerst ausgeführt.",
      solution: "1. Schritt\n2. Schritt",
      solutionLabel: "Ausgabe",
    },
    {
      title: "Fehlerdetektiv",
      duration: 5,
      prompt:
        'In dieser Zeile fehlt etwas: print("Ich übe Python!). Schreibe die korrigierte Zeile vollständig auf.',
      type: "code",
      accepted: [
        'print("Ich übe Python!")',
        "print('Ich übe Python!')",
      ],
      explanation:
        "Zeichenketten müssen mit dem gleichen Anführungszeichen geöffnet und geschlossen werden. Fehlt das Ende, meldet Python einen SyntaxError: Die Schreibweise des Programms ist nicht vollständig.",
      errorFeedback:
        "Zähle die Anführungszeichen: Genau zwei passende Zeichen begrenzen den Text – eines direkt nach der öffnenden Klammer, eines vor der schließenden Klammer.",
      hint: "Ergänze das schließende Anführungszeichen vor der runden Klammer.",
      solution: 'print("Ich übe Python!")',
      solutionLabel: "Korrigierte Zeile",
    },
    {
      title: "Code oder Ausgabe?",
      duration: 5,
      prompt:
        'Welche Ausgabe entsteht bei print("2 + 3")? Rechne nicht nur die Zahlen aus: Lies genau, ob Python hier Text oder eine Rechnung erhält.',
      type: "text",
      accepted: ["2 + 3"],
      explanation:
        "Zwischen den Anführungszeichen steht Text. print zeigt diesen Text unverändert an; Python berechnet 2 + 3 nicht. Für eine Rechnung ohne Anführungszeichen wäre print(2 + 3) nötig.",
      errorFeedback:
        "Anführungszeichen sind hier der entscheidende Hinweis: Mit ihnen ist 2 + 3 eine Zeichenkette, also Text. Ohne sie wäre es ein mathematischer Ausdruck.",
      hint: "Steht der Ausdruck zwischen Anführungszeichen? Dann ist er Text.",
      solution: "2 + 3",
      solutionLabel: "Ausgabe",
    },
    {
      title: "Mini-Projekt: Deine Begrüßung",
      duration: 6,
      prompt:
        "Schreibe selbst ein kurzes Programm aus zwei print-Zeilen: Begrüße Darian in der ersten Zeile und nenne in der zweiten Zeile ein Lernziel, zum Beispiel Python sicher zu lernen. Verwende beide Male Text in Anführungszeichen. Schreibe zuerst deinen eigenen Code auf und vergleiche ihn dann mit dem Beispiel.",
      type: "self-check",
      explanation:
        "Bei dieser offenen Aufgabe sind viele Lösungen richtig. Entscheidend ist, dass du zwei gültige print-Aufrufe schreibst und jeder Text in passenden Anführungszeichen steht. Eigene Formulierungen sind ausdrücklich erwünscht.",
      errorFeedback:
        "Wenn dein Programm noch nicht läuft, prüfe für jede Zeile: klein geschriebenes print, öffnende und schließende runde Klammer sowie ein zusammenpassendes Anführungszeichenpaar.",
      hint: "Baue beide Zeilen nach dem Muster print(\"dein Text\").",
      solution:
        'print("Hallo, Darian!")\nprint("Mein Ziel ist es, Python sicher zu lernen.")',
      solutionLabel: "Beispiel – passe Namen und Lernziel gern an",
    },
  ],
  review: [
    {
      title: "Abruf ohne Nachschauen",
      duration: 3,
      prompt:
        "Mini-Wiederholung 1 von 5: Was zeigt print(\"Hallo\") auf dem Bildschirm an?",
      type: "choice",
      options: [
        'Hallo (ohne Anführungszeichen)',
        'print("Hallo")',
        "Nichts – print speichert den Text nur",
      ],
      answer: 0,
      optionFeedback: [
        "Richtig. print zeigt Hallo an; die Anführungszeichen bleiben im Code.",
        "Das ist der Code, nicht die Ausgabe. Die Funktion wird ausgeführt.",
        "print gibt den Wert direkt in der Konsole aus.",
      ],
      explanation:
        "print gibt den Inhalt der Zeichenkette aus. Der Funktionsaufruf wird nicht als Text angezeigt.",
      hint: "Erinnere dich: Was stand im Beispiel in den Anführungszeichen?",
      solution: "Hallo",
    },
    {
      title: "Abruf ohne Nachschauen",
      duration: 3,
      prompt:
        "Mini-Wiederholung 2 von 5: Was erscheint zuerst bei zwei print-Aufrufen untereinander?",
      type: "choice",
      options: [
        "Die Ausgabe der oberen Zeile",
        "Die Ausgabe der unteren Zeile",
        "Beide Ausgaben werden alphabetisch sortiert",
      ],
      answer: 0,
      optionFeedback: [
        "Genau. Python beginnt oben und arbeitet Zeile für Zeile nach unten.",
        "Python führt die Anweisungen nicht rückwärts aus.",
        "Die Reihenfolge im Code bleibt erhalten; Python sortiert nicht.",
      ],
      explanation:
        "Die Ausführungsreihenfolge folgt der Reihenfolge der Anweisungen im Programm.",
      hint: "In welche Richtung liest Python ein einfaches Programm?",
      solution: "Die obere Zeile wird zuerst ausgeführt.",
    },
    {
      title: "Abruf ohne Nachschauen",
      duration: 3,
      prompt:
        "Mini-Wiederholung 3 von 5: Welches Zeichenpaar begrenzt die Argumente eines print-Aufrufs?",
      type: "choice",
      options: ["Runde Klammern: ( )", "Eckige Klammern: [ ]", "Geschweifte Klammern: { }"],
      answer: 0,
      optionFeedback: [
        "Richtig. Funktionsaufrufe wie print(...) verwenden runde Klammern.",
        "Eckige Klammern haben in Python andere Aufgaben, zum Beispiel bei Listen.",
        "Geschweifte Klammern begrenzen zum Beispiel Wörterbücher oder Mengen.",
      ],
      explanation:
        "print ist eine Funktion. Beim Aufruf stehen die Werte, die übergeben werden, in runden Klammern.",
      hint: "So sieht auch der Aufruf im heutigen Beispiel aus: print ...",
      solution: "Runde Klammern: ( )",
    },
    {
      title: "Abruf ohne Nachschauen",
      duration: 3,
      prompt:
        "Mini-Wiederholung 4 von 5: Warum ist print(Python) etwas anderes als print(\"Python\")?",
      type: "choice",
      options: [
        "Ohne Anführungszeichen sucht Python eine Variable namens Python.",
        "Ohne Anführungszeichen druckt Python immer eine leere Zeile.",
        "Beide Zeilen bedeuten immer dasselbe.",
      ],
      answer: 0,
      optionFeedback: [
        "Richtig. Ohne Anführungszeichen ist Python ein Name und kein Text.",
        "Die fehlenden Anführungszeichen führen nicht zu einer leeren Zeile, sondern wahrscheinlich zu einem NameError.",
        "Die Anführungszeichen ändern, ob Python den Inhalt als Text oder Namen behandelt.",
      ],
      explanation:
        "Anführungszeichen kennzeichnen Text. Ohne sie interpretiert Python Python als Namen und sucht eine gleichnamige Variable.",
      hint: "Denk an den Unterschied zwischen Text und einem Namen im Programm.",
      solution: "Mit Anführungszeichen ist Python Text; ohne sie ein möglicher Variablenname.",
    },
    {
      title: "Abruf ohne Nachschauen",
      duration: 3,
      prompt:
        "Mini-Wiederholung 5 von 5: Erkläre in einem kurzen Satz den Unterschied zwischen Code und Ausgabe. Schreib die Antwort in eigenen Worten auf.",
      type: "reflection",
      explanation:
        "Das ist eine offene Wiederholungsfrage und keine automatische Rechtschreibprüfung. Prüfe nach deiner Antwort: Code ist die Anweisung, die du schreibst; die Ausgabe ist das sichtbare Ergebnis nach dem Ausführen.",
      errorFeedback:
        "Falls du bei Code und Ausgabe noch unsicher bist: print(\"Hallo\") ist der Code; Hallo ist die Ausgabe.",
      hint: "Nenne sowohl die geschriebene Anweisung als auch das, was am Bildschirm erscheint.",
      solution:
        'Der Code ist zum Beispiel print("Hallo"). Die Ausgabe ist Hallo.',
      solutionLabel: "Beispielantwort",
    },
  ],
};
