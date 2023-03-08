// import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { api } from '../../studio/sanity.json';
// const { projectId, dataset } = api;

export const client = createClient({
	projectId: 'u4x6qbfi',
	dataset: 'production',
	apiVersion: '2023-02-14',
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
