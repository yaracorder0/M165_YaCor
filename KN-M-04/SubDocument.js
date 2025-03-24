const { MongoClient } = require('mongodb');

async function runSubdocumentQueries() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

    const subdocResult1 = await db.collection("books").aggregate([
        { $project: { _id: 0, title: 1, reviews: 1 } }
    ]).toArray();
    console.log(subdocResult1);

    const subdocResult2 = await db.collection("books").aggregate([
        { $match: { "reviews.rating": { $gte: 4 } } },
        { $project: { title: 1, "reviews.rating": 1, "reviews.comment": 1 } }
    ]).toArray();
    console.log(subdocResult2);

    const subdocResult3 = await db.collection("books").aggregate([
        { $unwind: "$reviews" },
        { $project: { title: 1, "reviews.rating": 1, "reviews.comment": 1 } }
    ]).toArray();
    console.log(subdocResult3);
	console.log("finished successfully");

    await client.close();
}

runSubdocumentQueries().catch(console.dir);
