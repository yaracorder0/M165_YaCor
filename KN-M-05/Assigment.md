## KN-M-05: Administration von MongoDB
 
## A) Rechte und Rollen

### Verbindung mit falscher Authentifizierungsquelle

<img width="400" src="https://github.com/user-attachments/assets/df2cb49b-d7d1-4099-8699-d80dd6831cda">

<img width="600" src="https://github.com/user-attachments/assets/ed86c1f7-ac3f-48f4-8f6c-5943d3682ab9">

### Rights with Reader (new User)

#### Login via MongoDB Compass


![image](https://github.com/user-attachments/assets/99aa7fa7-349c-4d74-af03-2e660788fc1a)

#### GET data

![image](https://github.com/user-attachments/assets/75cec337-6e77-4c71-8573-b7cda12c9595)

#### INSERT data

![image](https://github.com/user-attachments/assets/d1cc89f5-55d8-4038-bfad-d45bea06c488)

### Rights with ReaderWriter (new User)

#### Login via MongoDB Compass

![image](https://github.com/user-attachments/assets/3bcd61b5-8b59-4c0e-94c6-b341ba3c991f)


#### GET data

![image](https://github.com/user-attachments/assets/131ce262-d579-4a9d-b6e8-3eca03a8942f)


#### INSERT data 

![image](https://github.com/user-attachments/assets/ac0ef5fb-300f-4072-9a0c-6318ae2b27aa)


## B) Backup und Restore


### *Variant 1*

![image](https://github.com/user-attachments/assets/8d6b4598-993f-409c-ba0f-752ed12ba120)

*delete collection*
![image](https://github.com/user-attachments/assets/1107e408-d451-401a-8cad-5d09b958c187)

#### Create Volume from Snapshot (Restore Data)

![image](https://github.com/user-attachments/assets/4935f476-f5fd-4d9c-a004-f8f4c507906f)

#### Attach Volume to Instance 

![image](https://github.com/user-attachments/assets/9e31860e-344e-45f4-a526-0a74f893f3b8)

#### Restored Data

![image](https://github.com/user-attachments/assets/056e76b5-9bd2-4471-9ba3-5e1fc12a0976)


### *Variant 2*

![image](https://github.com/user-attachments/assets/0372a5ea-8152-4588-bbf5-184f15f047ba)


#### Dropped the database

![image](https://github.com/user-attachments/assets/0572862a-5991-4770-a9a6-3afa0ec13d03)

#### Restore via mongostore

![image](https://github.com/user-attachments/assets/d79a6aab-e23d-401b-8d6a-ef96c53e7ba0)



![image](https://github.com/user-attachments/assets/d4f46fdf-a795-4b72-8989-30e327c56bbc)

## C) Scaling


### Replication
![Replication](https://github.com/user-attachments/assets/b7784493-6e53-4160-acb6-a0d63b974320)

In Replication each Node contains a copy of the data. If one of the servers is down the others are available to respond to requests. It also increases the capacity og the system to handle requests.
What is also important to say is that only the primary node is able to be written into and also made updates to.


### Sharding

![image](https://github.com/user-attachments/assets/4294c7e0-8dee-4909-aeea-17129301251b)

What sharding does is that it distributes the data across multiple nodes.

I recommend for my company to use sharding since the sheer amount of books needs a scability which sharding offers. It can so save the needed data.







