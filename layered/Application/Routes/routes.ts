import { Router } from "express";
import FooRouter from "./FooRoutes";
const router = Router();

router.use('/foos',FooRouter)

export default router;