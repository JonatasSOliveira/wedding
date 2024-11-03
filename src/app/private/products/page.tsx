import Link from "next/link";
import React from "react";
import { newProductDefinition } from "./new/page-definition";
import { productPageDefinition } from "./page-definition";

export default function Products() {
  return (
    <>
      <h1>{productPageDefinition.title}</h1>
      <Link
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        href={newProductDefinition.path}
      >
        {newProductDefinition.title}
      </Link>
    </>
  );
}
