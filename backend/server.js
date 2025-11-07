import express from "express";
import { getAllProducts } from "./repositories/productRepository.js";
import { createOrder } from "./repositories/orderRepository.js";

const app = express();
app.use(express.json());

// Interaction #1: Product Listing (Client-Server)
app.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Interaction #2: Checkout / Create Order (Client-Server + Transaction)
app.post("/orders", async (req, res) => {
  try {
    const result = await createOrder(req.body.items); // items: [{product_id, quantity}]
    res.json({ success: true, order_id: result.orderId });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
