import { createOrder } from "../repositories/order.js";

export async function postOrder(req, res) {
  try {
    const { items } = req.body;
    const result = await createOrder(items);
    res.status(201).json({ success: true, orderId: result.orderId });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
}