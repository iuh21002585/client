import express from "express";

import ProductController from "../app/controllers/Product.js";
import OrderController from "../app/controllers/Order.js";
import MerchController from "../app/controllers/Merch.js";
const router = express.Router();

// router products coffee
router.get("/products", ProductController.getAll);
router.post("/products", ProductController.post);
router.get("/products/:productId", ProductController.getId);
router.put("/products/:productId", ProductController.put);
router.delete("/products/:productId", ProductController.delete);

// router merch shop
router.get("/merch", MerchController.getAll);
router.post("/merch", MerchController.post);
router.get("/merch/:merchId", MerchController.getId);
router.put("/merch/:merchId", MerchController.put);
router.delete("/merch/:merchId", MerchController.delete);

// router orders coffee
router.get("/orders", OrderController.getAll);
router.post("/orders", OrderController.post);


export default router;
