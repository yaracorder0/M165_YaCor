const { MongoClient } = require('mongodb');

async function runLookupAggregations() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

    const lookupResult1 = await db.collection("books").aggregate([
        { $lookup: {
            from: "members",
            localField: "reviews.member",
            foreignField: "_id",
            as: "reviewers"
        } },
        { $project: { title: 1, author: 1, "reviews.comment": 1, "reviewers.firstname": 1, "reviewers.lastname": 1 } }
    ]).toArray();
    console.log(lookupResult1);

    const lookupResult2 = await db.collection("meetings").aggregate([
        { $lookup: {
            from: "books",
            localField: "book",
            foreignField: "_id",
            as: "book_details"
        } },
        { $unwind: "$book_details" },
        { $match: { "book_details.genre": "Fiction" } },
        { $project: { date: 1, location: 1, "book_details.title": 1, "book_details.author": 1 } },
        { $sort: { date: 1 } }
    ]).toArray();
    console.log(lookupResult2);
	
	console.log("successfully done");

    await client.close();
}

runLookupAggregations().catch(console.dir);
