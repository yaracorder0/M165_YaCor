# KN-N-02: Datenabfrage und -Manipulation


## A) Daten hinzufügen

![Screenshot 2025-04-13 193411](https://github.com/user-attachments/assets/f61d2733-f5fa-4e48-a208-05a9757ec242)


## B) Daten abfragen

![Screenshot 2025-04-13 201516](https://github.com/user-attachments/assets/0916c321-0c29-4e79-b7c1-9d37fa0da13d)

````
MATCH (n)-[r]->(m) RETURN n, r, m;
````
`MATCH (n)-[r]->(m)` -> matches all nodes that are connected to each other via any relationship

`RETURN n, r, m;` -> returns all nodes and relationships that matched

![image](https://github.com/user-attachments/assets/f3f04fbd-9754-4f6a-9c5c-e8adcfc5d135)

````
MATCH (n) OPTIONAL MATCH (n)-[r]->(m) RETURN n, r, m;
````
`MATCH (n)` -> Searches for all nodes

`OPTIONAL MATCH (n)-[r]->(m)` -> If a relationship exists, it is returned.
If no relationship exists, the node still remains in the result (but r and m are NULL).

`RETURN n, r, m;` -> Returns all the nodes and their edges


### Szenario 1

**Used a different Data Set since it was not enough for the scenarios I had in mind.**

*Use-Case*
Which members took part in meeting that took place in Zurich.

````
MATCH (m:Member)-[:ATTENDED]->(meeting:Meeting)
WHERE meeting.location = "Zürich"
RETURN m.firstname, meeting.date, meeting.location
`````

![image](https://github.com/user-attachments/assets/50309dca-767a-4d34-96d4-d1a6ab133d40)



----

### Szenario 2

*Use-Case*
I want to see all books which have a review above 4.

````
MATCH (book:Book)<-[r:REVIEWED]-(member:Member)
WHERE r.rating > 4
RETURN member.firstname, book.author, book.title, r.rating
````

![image](https://github.com/user-attachments/assets/65898244-a0fd-4940-a86f-c7bdacf12fba)

----


### Szenario 3

*Use-Case*
What members have not made a review.

````
MATCH (m:Member)
OPTIONAL MATCH (m)-[r:REVIEWED]->(:Book)
WITH m, r
WHERE r IS NULL
RETURN m.firstname, m.lastname
````

![image](https://github.com/user-attachments/assets/17468fd5-bcbc-44f1-99d0-6ca456e64bd0)

----

### Szenario 4

*Use-Case*
Welche Bücher wurden wann besprochen.

````
MATCH (book:Book)<-[:DISCUSSED]-(meeting:Meeting)
RETURN book.title, meeting.date, meeting.location
ORDER BY meeting.date DESC
````

![image](https://github.com/user-attachments/assets/f7a78086-ce28-4bfd-968d-b15e7ae8df9a)

## C) Daten löschen

````
MATCH (m:Member {firstname: "Anna"})
DELETE m;
````


![image](https://github.com/user-attachments/assets/a28d3a7e-269c-413b-944c-6d4942f625ce)

Doesn't work since Anna still has a relationship (ATTENDED, REVIEWED).

````
MATCH (m:Member {firstname: "Anna"})
DETACH DELETE m;
````
![image](https://github.com/user-attachments/assets/8a0aadde-9bf5-426b-976e-14c2ca1cd880)

The (Member) Node will be deleted and all it's relatioships.

## D) Daten verändern

### Szenario 1

*Use-Case*
Das Meeting am 15.04.2024 war in Luzern und nicht Basel.


````
MATCH (m:Meeting {date: date("2024-04-15")})
SET m.location = "Luzern";
````
![image](https://github.com/user-attachments/assets/c37f07d0-895f-4db6-b67b-0ff1a713ba21)
----

### Szenario 2

*Use-Case*
Ben hat das Buch "1984* nochmal gelesen und ändert seine Bewertung auf 5 Sterne.

````
MATCH (:Member {firstname: "Ben"})-[r:REVIEWED]->(:Book {title: "1984"})
SET r.rating = 5, r.comment = "Beim zweiten Lesen noch besser";
````

![image](https://github.com/user-attachments/assets/b3ad28a5-8bc9-481b-a09e-5b696c37fcd1)

----

### Szenario 3

*Use-Case*
Clara hat ihre Telefonnummer eingefügt.

````
MATCH (m:Member {firstname: "Clara"})
SET m.phone = "+41 79 123 45 67";
````

![image](https://github.com/user-attachments/assets/cc8bccad-2333-403e-b626-3ab7d47a01b2)

## E) Zusätzliche Klauseln

### CASE

*Use-Case*
Ich will alle Buchrezensionens sehen die aber nach "top", "gut" und "schwach" sortiert sind. Mann hat so einen besseren Überblick. 

````
MATCH (m:Member)-[r:REVIEWED]->(b:Book)
RETURN m.firstname + " " + m.lastname AS Reviewer,
       b.title AS Buch,
       r.rating AS Sterne,
       CASE
         WHEN r.rating >= 5 THEN "Top"
         WHEN r.rating >= 3 THEN "Gut"
         ELSE "Schwach"
       END AS Bewertungskategorie;
````

`MATCH (m:Member)-[r:REVIEWED]->(b:Book)`: Sucht alle Rezensionen und verbindet Mitglieder mit den von ihnen bewerteten Büchern.

`m.firstname + " " + m.lastname AS Reviewer`: Fügt Vor- und Nachname zu einem vollständigen Namen zusammen.

`b.title AS Buch`: Zeigt den Titel des Buches an.

`r.rating AS Sterne`: Zeigt die vergebene Sterneanzahl (z. B. 5 oder 3).

`CASE ... END AS Bewertungskategorie`: Nutzt bedingte Logik:

    Wenn Bewertung ≥ 5 → "Top"

    Wenn Bewertung ≥ 3 → "Gut"

    Sonst → "Schwach"

![image](https://github.com/user-attachments/assets/f7b4384d-0230-4caa-9c46-bb35e847687c)


### ORDER BY

*Use-Case*
Wann sind die nächsten Meeting des Bookclubs.

````
MATCH (m:Meeting)
RETURN m.date, m.location
ORDER BY m.date ASC;
````

`MATCH (m:Meeting)`: Wählt alle Meeting-Knoten.

`RETURN m.date, m.location`: Gibt das Datum und den Ort jedes Meetings zurück.

`ORDER BY m.date ASC`: Sortiert alle Meetings aufsteigend nach Datum (also vom frühesten bis zum spätesten).


![image](https://github.com/user-attachments/assets/520a48e9-994f-4310-b2f2-f26c9c618bdf)

