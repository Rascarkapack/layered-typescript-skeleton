import { FooController } from "../Controller/FooController";
import { Router } from "express";
const FooRouter = Router();

FooRouter.get('/', FooController.getAllFoo)
FooRouter.get('/:id', FooController.getAById)

export default FooRouter;