## KN-M-01 : Installation und Verwaltung von MongoDB

### A) Installation

#### Here's is my .yaml file used for setting up the AWS Instance. 
[cloudinit-mongodb.yaml](cloudinit-mongodb.yaml)

#### Existing Databases
![image](https://github.com/user-attachments/assets/a42bc2fe-cc26-4030-afd4-86a6e8f0aab1)

**authSource=admin** is used to verify the authentication of the admin database. Users in MongoDB aren't global, rather connecte to a specific database.


`sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf`
replaces the IP with `0.0.0.0` so that MongoDB can externally connect.

`sudo sed -i 's/#security:/security:\n authorization: enabled/g' /etc/mongod.conf`
Enables in the security configuration, so that users are able to verify themselver through their login information.

<img width="270" alt="image" src="https://github.com/user-attachments/assets/4f4b3da4-7c6d-4178-b0c9-4c1f0d9de114" />


### B) Erste Schritte GUI 

Writing data into my DB :
![image](https://github.com/user-attachments/assets/9574bbf4-9bf6-4056-a64c-9d9fb5e96496)


How the data was saved : 
![image](https://github.com/user-attachments/assets/2618bdc2-d959-4739-a7d6-314ec5e0aeba)

The reason why you have to define the date data type the way I did was because without defining it, the database automatically asumes it is a string, which you of course dont want. As soon as you have defined it all future data will be saved as a date type. 

### C) Erste Schritte Shell

<img width="270" src="https://github.com/user-attachments/assets/d1b82555-bb1b-4042-b5a6-fd679f40e95a">
<img width="480" src="https://github.com/user-attachments/assets/6645f9c7-c21e-4b98-83b2-897cd74b2570">

<br>
<br>

1. `show dbs;` -> shows all current databases which currently are saved in the MongoDB
2. `show databases;` -> does the same thing as 1.
3. `use <database-name>;` -> changes to the given database so that future commands will be executed in that db
4. `show collections;` ->  shows all names of the collections in the database which is currently used
5. `show tables;` -> does the same as 4. but isn't commonly used in mongoDB

The difference in table and collections isn't that big. Tables are commonly used in relational databases while collections are used in document based databases. Collections are the equivalent of tables in a relational databases.


