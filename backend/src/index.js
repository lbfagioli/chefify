import express from "express";
import productsRoutes from "../routes/productsRoutes.js";
import ordersRoutes from "../routes/ordersRoutes.js";

const app = express();
app.use(express.json());

// rutas
app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);
app.get("/", (req, res) => res.send("Chefify API Running"));

app.listen(3000, () => console.log("Backend running on port 3000"));
