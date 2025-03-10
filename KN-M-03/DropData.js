const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

    await db.collection("members").deleteOne({ _id: 1 });

    await db.collection("meetings").deleteOne({ _id: 1 });
 
	await db.collection("books").deleteMany({ _id: { $in: [2, 3] } });

    console.log("Deleted Data successfully");
    await client.close();
}

run().catch(console.dir);