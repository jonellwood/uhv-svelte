// @ts-nocheck
import { posts } from '$lib/data/posts';
import { error } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
	const { slug } = params;

	// get post with metadata
	const post = posts.find((post) => slug === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
}
