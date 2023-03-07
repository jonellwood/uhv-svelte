import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
	projectId: 'u4x6qbfi',
	dataset: 'production',
	apiVersion: '2023-02-14',
	useCdn: false,
});

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
// 	return builder.image(source);
// }
export async function load({ params }) {
	const data = await client.fetch(`*[_type == "meal"] | order(date desc) `);

	if (data) {
		return {
			meals: data,
		};
	}
	return {
		status: 500,
		body: new Error('Error getting meal info from CDN'),
	};
}
