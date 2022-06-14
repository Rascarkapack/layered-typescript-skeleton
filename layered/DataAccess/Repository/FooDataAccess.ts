import { Foo } from "../../BusinessLogic/Entities/Foo";
import { FooAdapter } from "../Adapter/Foo/FooAdapter";
import  mock from "../../mock/mock";

export class FooDataAccess implements FooAdapter {
    getAll() : Array<Foo> {
        return mock;
    }
    getById(id: number) : Foo {
        const result : Foo | undefined = mock.find((value, i) => {
           if (value.id === id) {
               return value;
           }
        });
        if (result) {
            return result;
        }else {
            throw new Error("Introuvable");
        }
        
    }
    
}