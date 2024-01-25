import express from "express";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.get("/logout", logout);

export default router;