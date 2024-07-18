import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ds2jn56y',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'skLqbhxIOvs22389IbKMcvwH38WTLWidpbOFGwQIgHJzTe4fits7QDqp4jNKDwaGwWOhvJGDgZyEPaq1CHxZhAt5BNqTLOLXVXTeHMXyJ2X87FH98MeXIDdI2N3CkS54dHzVGCAVCLDke9gHhXgw0rA6ANM0cEICSxmAUiJQmT5eygfiGD3Y'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
