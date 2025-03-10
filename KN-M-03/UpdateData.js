const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");
	
	console.log("Vorher - Mitglieder:");
	console.log(await db.collection("members").find({}).toArray());

	console.log("Vorher - Bücher:");
	console.log(await db.collection("books").find({}).toArray());

	console.log("Vorher - Meetings:");
	console.log(await db.collection("meetings").find({}).toArray());

	await db.collection("members").updateOne(
		{ _id: 1 }, 
		{ $set: { email: "new_max@example.com" } }
	);

	await db.collection("books").updateMany(
		{ $or: [{ genre: "Fiction" }, { genre: "Fantasy" }] },
		{ $set: { bestseller: true } }
	);

	await db.collection("meetings").replaceOne(
		{ location: "Library Room 1" }, 
		{ date: new Date("2025-06-15"), location: "Conference Hall", book: 2, attendees: [2, 3] }
	);

	console.log("Nachher - Mitglieder:");
	console.log(await db.collection("members").find({}).toArray());

	console.log("Nachher - Bücher:");
	console.log(await db.collection("books").find({}).toArray());

	console.log("Nachher - Meetings:");
	console.log(await db.collection("meetings").find({}).toArray());


    console.log("All Collections updated successfully");
    await client.close();
}

run().catch(console.dir);