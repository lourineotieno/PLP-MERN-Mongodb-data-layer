// -------------------------------
// PLP MongoDB Assignment Queries
// Database: plp_bookstore
// Collection: books
// -------------------------------

// Use the database
use plp_bookstore;

// 1️⃣ Find all books in a specific genre (e.g. "Fiction")
db.books.find({ genre: "Fiction" });

// 2️⃣ Find books published after a certain year (e.g. after 2015)
db.books.find({ published_year: { $gt: 2015 } });

// 3️⃣ Find books by a specific author
db.books.find({ author: "George Orwell" });

// 4️⃣ Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 18.99 } }
);

// 5️⃣ Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" });

// 6️⃣ Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 7️⃣ Use projection to return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 8️⃣ Sort books by price ascending
db.books.find().sort({ price: 1 });

// 9️⃣ Sort books by price descending
db.books.find().sort({ price: -1 });

// 🔟 Pagination (limit and skip)
db.books.find().limit(5); // page 1
db.books.find().skip(5).limit(5); // page 2

// 🧮 Aggregation Pipelines

// 11️⃣ Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// 12️⃣ Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// 13️⃣ Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [{ $divide: ["$published_year", 10] }, { $mod: [{ $divide: ["$published_year", 10] }, 1] }] },
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// 14️⃣ Create index on title
db.books.createIndex({ title: 1 });

// 15️⃣ Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 16️⃣ Explain query performance
db.books.find({ title: "1984" }).explain("executionStats");
