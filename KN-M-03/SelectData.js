const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

	console.log(await db.collection("members").find({ join_date: { $gte: new Date("2024-07-01") } }).toArray());

	console.log(await db.collection("books").find({ 
		$or: [{ genre: "Fiction" }, { genre: "Fantasy" }] 
	}).toArray());

	console.log(await db.collection("meetings").find({ 
		book: 1, 
		location: "Library Room 1"
	}).toArray());

	console.log(await db.collection("members").find({ lastname: { $regex: "Mack", $options: "i" } }).toArray());

	console.log(await db.collection("books").find({}, { projection: { _id: 1, title: 1 } }).toArray)

	console.log(await db.collection("members").find({}, { projection: { _id: 0, firstname: 1, email: 1 } }).toArray());

    console.log("Selected Data");
    await client.close();
}

run().catch(console.dir);