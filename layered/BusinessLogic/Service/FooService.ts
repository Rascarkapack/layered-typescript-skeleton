import { Foo } from "../Entities/Foo";
import { FooAdapter } from "../../DataAccess/Adapter/Foo/FooAdapter";


export class FooService {
    fooDataAccess: FooAdapter;
    constructor(fooDataAccess : FooAdapter){
        this.fooDataAccess = fooDataAccess;
    }
    getAllFoo() : Array<Foo> {
        return this.fooDataAccess.getAll();
    }

    getById(id : number) : Foo {
        return this.fooDataAccess.getById(id);
    }
}