import { pool } from "../src/db.js";

export async function listProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}
