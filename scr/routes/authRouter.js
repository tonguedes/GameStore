import express from "express";
import AuthController from "../controllers/authController.js"
import authMiddleware from "../middleware/authMiddleware.js"


const router = express.Router();

//router.use(authMiddleware)

router.post("/register",AuthController.userRegister)
router.post("/login",AuthController.auth)
router.put("/:id",AuthController.update)
router.get("/:id",authMiddleware,AuthController.read)
//router.get("/getall",AuthController.getAllUser)
router.delete("/:id",AuthController.delete)



export default router;