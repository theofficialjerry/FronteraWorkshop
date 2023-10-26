import { Router } from "express";
import { router as dbRouter } from "./api/db.js";

// import the route path from your card routes file

const router = Router();


router.use('/db', dbRouter);

// add the route path to the router
router.use('/cards', cardRouter);

export {router};