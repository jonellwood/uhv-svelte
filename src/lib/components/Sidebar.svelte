<script>
	import Weight from './weight.svelte';
	import Activity from '../components/activity/activity.svelte';
	import Hr from './Hr.svelte';
</script>

<div class="sidebar">
	<Weight />
	<Hr />
	<Activity />
	<Hr />
</div>

<style>
	.sidebar {
		display: grid;
		grid-template-columns: 1fr;
		position: absolute;
		right: 0;
		margin-right: 20px;
		/* margin-top: 30px; */
		margin-bottom: 30px;
		padding: 10px;

		width: fit-content;
		min-height: fit-content;
	}
	.sidebar:hover {
		box-shadow: 0px 0px 38px 3px rgba(0, 0, 0, 0.75);
	}
</style>
