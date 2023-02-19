<!-- <script>
	import { onMount } from 'svelte';
	let workouts = [];
	let show = false;

	function getContent(xmlObj, tagName) {
		return xmlObj.getElementsByTagName(tagName)[0].textContent;
	}

	onMount(async () => {
		await fetch('../src/lib/chart-data/running-export.xml')
			.then((res) => res.text())
			.then((text) => new window.DOMParser().parseFromString(text, 'text/xml'))
			.then((data) => {
				let channel = data.getElementsByTagName('Workout');
				// console.table(channel);
				let items = Array.prototype.slice.call(channel[5].children);
				console.log(items);
				items.forEach((item) => {
					if (item.tagName === 'HKQuantityTypeIdentifierActiveEnergyBurned') {
						workouts.push({
							duration: getContent(item, 'sum'),
							sum: getContent(item, 'MetadataEntry'),
							'thumbnail': item.getElementsByTagName('enclosure')[0].getAttribute('url'),
							'source': item.getElementsByTagName('source')[0].getAttribute('url')
						});
					}
				});
			});

		show = workouts.length;
	});
</script> -->

<!-- {#if show}
	{#each workouts as workout}
		<h4>{workout.duration}</h4>
		<img src={article.thumbnail} alt="thumbnail" />
		<p>{workout.sum}</p>
	{/each}
{:else}
	<p>loading...</p>
{/if} -->
