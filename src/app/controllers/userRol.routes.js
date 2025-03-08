import express from "express";
import {
    postUserRol,
    getUserRol,
    getUserRolById
} from "./userRol.controller.js";

const router = express.Router();

router.post("/userRol", postUserRol);
router.get("/userRol", getUserRol);
router.get("/userRol/:id", getUserRolById);

export default router;