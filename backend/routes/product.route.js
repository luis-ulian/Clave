import express from "express"

import { getProducts, postProduct, putProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/" , getProducts);
router.post("/" , postProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

export default router;