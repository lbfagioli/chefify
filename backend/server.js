import express from "express";
import { getAllProducts } from "./repositories/productRepository.js";
import { createOrder } from "./repositories/orderRepository.js";

const app = express();
app.use(express.json());

// Interaction #1: Product Listing (Client-Server)
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Interaction #2: Checkout / Create Order (Client-Server + Transaction)
app.post("/products", async (req, res) => {
  const { name, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
