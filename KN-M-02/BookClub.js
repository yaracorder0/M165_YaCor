const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("bookclub");

    await db.createCollection("members");
    await db.createCollection("meetings");
    await db.createCollection("books");
    await db.createCollection("reviews");

    console.log("Collection was created successfully!");
    await client.close();
}

run().catch(console.dir);