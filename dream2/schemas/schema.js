
import products from "./products";
import banner from "./banner";
import { createSchema, schemaTypes } from "sanity";

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([products, banner])
})