## KN-C-01: Installation und Datenmodellierung für Cassandra

#### A) Installation / Account erstellen

##### Connection via cqlsh

![image](https://github.com/user-attachments/assets/4c30a0f2-7547-4d55-b5ea-00dec5e0324d)

##### Connection via Data Grip

![image](https://github.com/user-attachments/assets/08ad6839-15a5-4f98-92ca-ebaf0b2379c1)

#### B) Logisches Modell für Cassandra

![Cassandra](https://github.com/user-attachments/assets/35c8bf66-d082-4ce4-8dbf-890a347c2c2b)

This Cassandra logical model organizes book club data for efficient querying. It includes four tables: meetings_by_date (partitioned by date), reviews_by_book (partitioned by book title), reviews_by_member (partitioned by member ID), and meetings_by_member (partitioned by member ID). Partition keys (K) determine data distribution, while clustering columns (C) order data within partitions. 


#### C) Physisches Modell für Cassandra

![image](https://github.com/user-attachments/assets/7294d81d-afdd-4b7e-8e71-9025bd4a0d45)

