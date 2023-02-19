<script>
	import Activity from '../../lib/components/activity/activity.svelte';
	import { stringify } from 'postcss';
	export let data;
</script>

{#if data.workouts && data.workouts.length}
	<ul>
		{#each data.workouts as workout}
			<li><b>Type: </b>{workout.type} - {workout.date}</li>
			<li><b>From: </b>{workout.starttime} <b>To: </b> {workout.endtime}</li>
			<li><b>Distance: </b>{workout.distance} {workout.unit}</li>
			<li><b>Calories Burned:</b> {workout.calories}</li>
			<br />
			<hr />
		{/each}
	</ul>
{:else}
	<p>No workouts found</p>
{/if}

<div>
	<Activity />
</div>
<!-- {#if data.workouts && data.workouts.length}
	<pre>
    {JSON.stringify(data.workouts, null, 2)}
</pre>
{:else}
	<p>YOu data will show up here once you have done everything correctly</p>
{/if} -->
