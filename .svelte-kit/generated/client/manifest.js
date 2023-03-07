export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

export const server_loads = [];

export const dictionary = {
	"/": [~2],
	"/activity": [3],
	"/eatings": [4],
	"/meals/[[page]]": [~5],
	"/posts/[[page]]": [~7],
	"/post/[slug]": [~6],
	"/weight": [8],
	"/workouts": [9]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};