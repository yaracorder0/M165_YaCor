const { MongoClient } = require('mongodb');

async function runAggregations() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

    const result1 = await db.collection("members").aggregate([
        { $match: { lastname: "Macklemore" } },
        { $match: { email: "john@example.com" } }
    ]).toArray();
    console.log(result1);

    const result2 = await db.collection("books").aggregate([
        { $match: { genre: { $in: ["Fiction", "Fantasy"] } } },
        { $project: { _id: 0, title: 1, author: 1, genre: 1 } },
        { $sort: { title: 1 } }
    ]).toArray();
    console.log(result2);

    const result3 = await db.collection("books").aggregate([
        { $project: { title: 1, totalReviews: { $size: "$reviews" } } }
    ]).toArray();
    console.log(result3);

    const result4 = await db.collection("members").aggregate([
        { $group: { _id: { $year: "$join_date" }, totalMembers: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]).toArray();
    console.log(result4);


	consol.log("successfully finished");
    await client.close();
}

runAggregations().catch(console.dir);
