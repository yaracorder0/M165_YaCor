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
