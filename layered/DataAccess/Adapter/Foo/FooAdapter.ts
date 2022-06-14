import { Foo } from "../../../BusinessLogic/Entities/Foo";

export interface FooAdapter {
    getAll(): Array<Foo>;
    getById(id : number): Foo;
}