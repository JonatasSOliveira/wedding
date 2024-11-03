"use server";

import { FirebaseProductAdapter } from "@/adapters/firebase/product";
import { ProductFormSchema } from "./form-schema";
import { ProductService } from "@/application/services/product";
import { getSession } from "@/lib/auth";

export async function createProduct(
  productData: ProductFormSchema,
): Promise<void> {
  const session = await getSession();
  const productService = new ProductService(new FirebaseProductAdapter());
  console.log(productData);
  productService.create({ ...productData }, session);
}
