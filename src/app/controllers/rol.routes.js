import express from "express";
import {
    getRol
} from "./rol.controller.js";

const router = express.Router();

router.get("/rol", getRol);

export default router;