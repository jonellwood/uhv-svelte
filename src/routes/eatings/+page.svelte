<script>
	export let data;
	import ImageBlock from '$lib/ImageBlock.svelte';
	import SanityImage from '$lib/SanityImage.svelte';
</script>

<h4>
	Initially I intended on logging each of my meals along with time of day and
	calories on this page. I even built a little "meal" component to add them
	easily... Guess what? It's a chore! AND.... I eat nearly the same thing most
	days. So instead I am going to use this space to write about any meals I have
	that enjoy, or did not enjoy, or whatever else I feel like writing about as it
	pertains to my meals... so there!
</h4>
<div class="container">
	{#if data.meals && data.meals.length}
		{#each data.meals as meal}
			<ul class="meal-list">
				<span class="fake-banner" />
				<li class="type">
					<b>{meal.name}</b> - {new Date(meal.date).toLocaleDateString('en-US')}
				</li>
				<li>
					<b>Time:</b>
					{new Date(meal.date).toLocaleString('en-US', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</li>
				<li>
					<b>Estimated Calories: </b>
					{meal.calories}
				</li>
				<li>{meal.description}</li>
				{#if meal.image}
					<li>
						<SanityImage image={meal.image} alt={meal.description} />
						<!-- <img
							src="https://cdn.sanity.io/images/u4x6qbfi/production/cd0518365b64ec87c3e3ff5f281c9331b00a383d-3024x4032.jpg?h=200"
							alt="..."
						/> -->
						<!-- <img
							src={urlFor(meal.image).width(200).url()}
							alt={meal.description}
						/> -->
					</li>
				{/if}
			</ul>
		{/each}
	{:else}
		<p>No meals found</p>
	{/if}
</div>

<!-- this block renders the JSON response from API
{#if data.meals && data.meals.length}
	<pre>
    {JSON.stringify(data.meals, null, 2)}
</pre>
{:else}
	<p>YOu data will show up here once you have done everything correctly</p>
{/if} -->
<style>
	.meal-list {
		font-size: larger;
		margin-top: 20px;
		/* border-bottom: 2px solid hotpink; */
		border-bottom: 2px solid orange;
		border-left: 2px solid orange;

		/* width: 300px; */
		/* height: 450px; */
		padding-left: 10px;
		padding-bottom: 10px;
		padding-top: 10px;
		box-shadow: -2px 2px 17px 1px rgba(255, 165, 0, 0.55),
			-4px 4px 35px 2px rgba(255, 255, 255, 0.55);
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
		margin-top: 50px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
		width: 900px;
	}
	img {
		margin-left: auto;
		margin-right: auto;
	}
	.fake-banner {
		background-color: orange;
		height: 15px;
		width: 100%;
	}
</style>
