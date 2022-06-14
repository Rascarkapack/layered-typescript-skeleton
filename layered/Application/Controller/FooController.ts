import { Foo } from "../../BusinessLogic/Entities/Foo";
import { Request, Response } from "express";
import { FooDataAccess } from "../../DataAccess/Repository/FooDataAccess";
import { FooService } from "../../BusinessLogic/Service/FooService";

interface getByIdRequest extends Request {
    id:number;
}

export class FooController {
    static getAById(req : Request<getByIdRequest>, res : Response) {
        const params : getByIdRequest = req.params;
        const fooDataAccess : FooDataAccess = new FooDataAccess();
        const service : FooService = new FooService(fooDataAccess);

        const result = service.getById(Number(params.id));
        return res.status(200).json(result);
    }
    /**
     * getAllFoo
     */
    static async getAllFoo(req : Request, res : Response) : Promise<Response> {
        const fooDataAccess : FooDataAccess = new FooDataAccess();
        const service : FooService = new FooService(fooDataAccess);

        const result = service.getAllFoo();
        return res.status(200).json(result);
    }
}