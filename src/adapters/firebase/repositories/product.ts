import { CreateProductDTO } from "@/domain/dtos/product/request/create";
import { GenericFirebaseRepository } from "./generic";

export class ProductRepository extends GenericFirebaseRepository<CreateProductDTO> {
  constructor() {
    super("products");
  }
}
