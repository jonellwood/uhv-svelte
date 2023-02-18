import { meals } from '$lib/data/meals';
import { paginate } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let page = params.page ? parseInt(params.page) : 1;
	let limit = 100;

	const mealsForPage = paginate(meals, { limit, page });

	if (mealsForPage.length === 0 && page > 1) {
		throw error(404, 'Meal not found');
	}

	return {
		meals: mealsForPage,
		page,
		limit,
	};
}
