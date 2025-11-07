import { pool } from "../db.js";

export async function createOrder(orderItems) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Insertar la orden
    const orderResult = await client.query(
      "INSERT INTO orders(created_at) VALUES (NOW()) RETURNING id"
    );
    const orderId = orderResult.rows[0].id;

    for (const item of orderItems) {
      const { product_id, quantity } = item;

      // Verificar stock
      const stockResult = await client.query(
        "SELECT stock FROM products WHERE id = $1",
        [product_id]
      );
      const stock = stockResult.rows[0].stock;

      if (stock < quantity) {
        throw new Error(`Not enough stock for product ${product_id}`);
      }

      // Insertar item
      await client.query(
        "INSERT INTO order_items(order_id, product_id, quantity) VALUES ($1, $2, $3)",
        [orderId, product_id, quantity]
      );

      // Reducir stock
      await client.query(
        "UPDATE products SET stock = stock - $1 WHERE id = $2",
        [quantity, product_id]
      );
    }

    await client.query("COMMIT");
    return { orderId };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
