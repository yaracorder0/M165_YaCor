## KN-N-01: Installation und Datenmodellierung für Neo4j

#### A) Installation / Account erstellen

![image](https://github.com/user-attachments/assets/d14e12e5-9d65-4b55-b62b-34334fc1a468)

![image](https://github.com/user-attachments/assets/56b7d1db-c471-451f-85d3-9cdd8eb244d8)

#### B) Logisches Modell für Neo4j

![Untitled Diagram](https://github.com/user-attachments/assets/70fdae70-ec75-4baa-b31b-a7c2680cd6e1)

Member: contains Basic Member information such as name, email and so on

Book: Contains the Review for a certain book 

Review: Is always connected to a Book and can't be on its "own"

Meeting: A meeting always contains a book and a list of members. Without it there wouldn't be a meeting
