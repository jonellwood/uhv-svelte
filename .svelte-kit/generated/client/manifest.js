export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

export const server_loads = [];

export const dictionary = {
	"/": [~2],
	"/activity": [3],
	"/meals/[[page]]": [~4],
	"/posts/[[page]]": [~6],
	"/post/[slug]": [~5],
	"/weight": [7],
	"/workouts": [8]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};