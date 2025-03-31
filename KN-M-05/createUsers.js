const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("connection successful");

        const trainingDB = client.db("bookclub");
        const adminDB = client.db("admin");

        await trainingDB.command({
            createUser: "reader",
            pwd: "12345",
            roles: [{ role: "read", db: "bookclub" }]
        });
        console.log("User reader was created successfully!");

        
        await adminDB.command({
            createUser: "readerwriter",
            pwd: "12345",
            roles: [{ role: "readWrite", db: "bookclub" }]
        });
        console.log("User readerwriter was created successfully!");

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
        console.log("Connection closed.");
    }
}

run();