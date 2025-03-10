const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

    await db.collection("members").drop().catch(() => {});
    await db.collection("books").drop().catch(() => {});
    await db.collection("meetings").drop().catch(() => {});
    

    console.log("All Collections deleted successfully");
    await client.close();
}

run().catch(console.dir);