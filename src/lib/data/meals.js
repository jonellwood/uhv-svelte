import { browser } from '$app/environment';
import { format } from 'date-fns';
import { parse } from 'node-html-parser';

if (browser) {
	throw new Error(`Meals are only loaded server-side`);
}

export const meals = Object.entries(
	import.meta.glob('/meals/**//*.md', { eager: true })
)
	.map(([filepath, meal]) => {
		const html = parse(meal.default.render().html);
		const description = meal.metadata.description
			? parse(meal.metadata.description)
			: html.querySelector('p');

		return {
			...meal.metadata,
			// lets do a slug just in case we decide to use it later
			// slug: filepath
			// 	.replace(/(\/index)?\.md/, '')
			// 	.split('/')
			// 	.pop(),

			isIndexFile: filepath.endsWith('/index.md'),

			date: meal.metadata.date
				? format(addTimezoneOffset(new Date(meal.metadata.date)), 'yyyy-MM-dd')
				: undefined,
			description: {
				html: description.toString(),
				text: description.structuredText ?? description.toString(),
			},
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.map((meal, index, allMeals) => ({
		...meal,
		next: allMeals[index - 1],
		previous: allMeals[index + 1],
	}));

function addTimezoneOffset(date) {
	const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000;
	return new Date(new Date(date).getTime() + offsetInMilliseconds);
}
