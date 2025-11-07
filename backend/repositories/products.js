import { pool } from "../db.js";

export async function getAllProducts() {
  const result = await pool.query("SELECT id, name, price, stock FROM products");
  return result.rows;
}
