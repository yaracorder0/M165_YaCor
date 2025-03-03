## KN-M-02: Datenmodellierung für MongoDB

### A) Konzeptionelles Datenmodell

![M165-DataModelling(2)](https://github.com/user-attachments/assets/77f04d53-3d24-4bf1-9c73-bf9d0fb1b815)

*Member : Meeting (M : M)*
-> A member can attend multiple Meetings, in which there can be multiple Members attending that said Meeting

*Book : Meeting (1 : M)*
-> Each Meeting revolves around a certain Book, consequently a Book can have multiple Meetings

*Member : Review (1 : M)*
-> Members can write Reviews, but each review can only be written by one Member.

*Book : Review (1 : M)*
-> Each Book can have multiple reviews written about it, but each Review can only revolve around one Book.

### B) Logisches Modell für MongoDB

<img width="400" src="https://github.com/user-attachments/assets/cbca11d6-2202-40c8-88ae-3c07f8cebf1e">

*Review*
- A Member has to write the review.
- The Review revolves around a book.

*Meeting*
- A Meeting is about a certain Book.
- A Meeting can have multiple Attendees (Members).

### C) Anwendung des Schemas in MongoDB

[Script](./BookClub.js) zur Erstellung von Collections.
