import { listProducts } from "../repositories/products.js";

export async function getProducts(req, res) {
  try {
    const products = await listProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
}
