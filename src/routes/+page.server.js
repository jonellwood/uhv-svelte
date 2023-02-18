import { posts } from '$lib/data/posts';

export async function load() {
	return {
		posts: posts.slice(0, 5)
	};
}
