const { MongoClient, ObjectId } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:12345@54.160.69.208:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("bookclub");

    const member1Id = 1
    const member2Id = 2;
    const member3Id = 3;
    const book1Id = 1;
    const book2Id = 2;
    const book3Id = 3;
    const meeting1Id = 1;
    const meeting2Id = 2;

    await db.collection("members").insertMany([
        { _id: member1Id, firstname: "Max", lastname: "Bär", email: "max@example.com", join_date: new Date("2025-01-15") },
        { _id: member2Id, firstname: "Sophia", lastname: "Katy", email: "sophia@example.com", join_date: new Date("2024-07-22") },
        { _id: member3Id, firstname: "John", lastname: "Macklemore", email: "john@example.com", join_date: new Date("2024-03-10") }
    ]);

    await db.collection("books").insertMany([
        { _id: book1Id, title: "The Kite Runner", author: "Khaled Hosseini", genre: "Fiction", isbn: 1111111111, reviews: [] },
        { _id: book2Id, title: "Katabasis", author: "R.F.Kuang", genre: "Fantasy", isbn: 2222222222, reviews: [] },
        { _id: book3Id, title: "Book Three", author: "Author C", genre: "Non-fiction", isbn: 3333333333, reviews: [] }
    ]);

    await db.collection("books").insertOne(
        { _id: book1Id },
        { $push: { reviews: { rating: 4, comment: "Interesting read.", date: new Date(), member: member1Id } } }
    );


    await db.collection("meetings").insertMany([
        { _id: meeting1Id, date: new Date(), location: "Library Room 1", book: book1Id, attendees: [member1Id, member2Id] },
        { _id: meeting2Id, date: new Date("2025-05-12"), location: "Cafe Lounge", book: book2Id, attendees: [meeting1Id, member2Id, member3Id] }
    ]);

    console.log("Data was inserted successfully!");
    await client.close();
}

run().catch(console.dir);
