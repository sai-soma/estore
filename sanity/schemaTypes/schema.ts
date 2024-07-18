import { type SchemaTypeDefinition } from 'sanity'

import banner from '../schemaTypes/banner'
import product from '../schemaTypes/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, product],
}
