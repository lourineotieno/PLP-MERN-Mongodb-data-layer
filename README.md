# 📚 PLP MongoDB Assignment – Bookstore Database

## 🧠 Objective
This project demonstrates my understanding of MongoDB fundamentals, including:
- Database and collection creation  
- Performing CRUD operations  
- Writing advanced queries (filtering, projection, sorting, pagination)  
- Using aggregation pipelines  
- Implementing indexing for performance optimization  

---

## 🗄️ Database Setup
**Database Name:** `plp_bookstore`  
**Collection Name:** `books`  

The database was created using MongoDB Compass.  
Book records were imported from a JSON file (`books.json`) containing 10 documents with the following fields:
- `title` (string)
- `author` (string)
- `genre` (string)
- `published_year` (number)
- `price` (number)
- `in_stock` (boolean)
- `pages` (number)
- `publisher` (string)

---

## ⚙️ How to Run the Project

### Option 1: MongoDB Shell
1. Open **MongoDB Compass** and click **Open MongoDB Shell**.  
2. Connect to your MongoDB instance.  
3. Switch to the project database:
   ```javascript
   use plp_bookstore
