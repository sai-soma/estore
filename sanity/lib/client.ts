import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../schemaTypes/env'

export const client = createClient({
  projectId:'ds2jn56y',
  dataset:'production',
  apiVersion:'2022-03-10',
  useCdn:true,
  perspective: 'published',
})

