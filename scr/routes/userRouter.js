import express from "express";
import UserController from "../controllers/userController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();
router.use(authMiddleware)


router.put("/:id",UserController.update)
router.get("/user",UserController.read)
router.get("/getall",UserController.getAllUser)
router.delete("/:id",UserController.delete)

export default router;
