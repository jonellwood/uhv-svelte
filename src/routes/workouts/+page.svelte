<script>
	import Activity from '../../lib/components/activity/activity.svelte';
	export let data;
</script>

<div class="container">
	{#if data.workouts && data.workouts.length}
		<ul class="workout-list">
			{#each data.workouts as workout}
				<li class="type">
					<b>Type: </b>{workout.type} - {new Date(
						workout.date
					).toLocaleDateString('en-US')}
				</li>

				<li>
					<b>From: </b>{new Date(workout.starttime).toLocaleString('en-US', {
						hour: '2-digit',
						minute: '2-digit',
					})}
					<b>To: </b>{new Date(workout.endtime).toLocaleString('en-US', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</li>

				<li>
					<b>Distance: </b>{workout.distance}
					{workout.unit} 🏃 <b>Calories Burned:</b>
					{workout.calories}
				</li>
				<!-- <li /> -->
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
</div>

<!-- this block renders the JSON response from API
{#if data.workouts && data.workouts.length}
	<pre>
    {JSON.stringify(data.workouts, null, 2)}
</pre>
{:else}
	<p>YOu data will show up here once you have done everything correctly</p>
{/if} -->
<style>
	.workout-list {
		margin-top: 20px;
	}
	.type {
		text-transform: capitalize;
	}
	ul {
		display: grid;
		/* grid-template-columns: auto auto; */
		/* grid-auto-rows: auto; */
		gap: 10px;
	}
	.container {
		display: grid;
		grid-template-columns: auto auto;
		gap: 20px;
		width: 900px;
	}
</style>
