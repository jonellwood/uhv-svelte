import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'u4x6qbfi',
	dataset: 'production',
	apiVersion: '2023-02-14',
	useCdn: false,
});

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
