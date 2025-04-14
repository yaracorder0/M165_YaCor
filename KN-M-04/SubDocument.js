const { MongoClient } = require('mongodb');

async function runSubdocumentQueries() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);

        await client.connect();
        const db = client.db("bookclub");
		

        // Query 1: Get all books with full reviews (no _id)
        const subdocResult1 = await db.collection("books").aggregate([
            { $project: { _id: 0, title: 1, reviews: 1 } }
        ]).toArray();
        console.log(subdocResult1);

        // Query 2: Filter books with at least one review rating >= 4
        const subdocResult2 = await db.collection("books").aggregate([
            { $match: { "reviews.rating": { $gte: 4 } } },
            { $project: { _id: 0, title: 1, "reviews.rating": 1, "reviews.comment": 1 } }
        ]).toArray();
        console.log(subdocResult2);

        // Query 3: Unwind reviews and list each separately
        const subdocResult3 = await db.collection("books").aggregate([
            { $unwind: "$reviews" },
            { $project: { _id: 0, title: 1, "reviews.rating": 1, "reviews.comment": 1 } }
        ]).toArray();
        console.log(subdocResult3);

        console.log("Finished successfully");

   
        await client.close();   
}

runSubdocumentQueries().catch(console.dir);
