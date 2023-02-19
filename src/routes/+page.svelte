<script>
	import ArrowRight from '$lib/components/ArrowRight.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import { avatar, bio, name } from '$lib/info';

	export let data;
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8 pb-16">
	<!-- <div class="section-chief"> -->
	<!-- bio -->
	<section class="flex flex-col items-center gap-16 pt-8 pb-16">
		<section>
			<div class="flex flex-col items-center w-full gap-6 rounded-lg">
				<!-- <div> -->
				<img
					src={avatar}
					alt={name}
					class="mx-auto rounded-full w-36 h-36 ring-2 ring-orange-200 dark:ring-orange-700"
				/>
				<!-- <div class="flex gap-6">
					<SocialLinks />
				</div> -->
			</div>
		</section>

		<p
			class="text-base text-lightgreen-600 dark:text-lightgreen-400 mt-10 mb-10"
		>
			{bio}
		</p>
		<section class="w-full">
			<div class="flex items-center justify-between gap-4 mb-8">
				<h2
					class="text-sm font-medium sm:text-base text-green-500 dark:text-green-400"
				>
					Recently Published
				</h2>
				<a
					href="/posts"
					class="flex items-center gap-1 text-sm font-medium text-teal-500"
					>View All <ArrowRight class="w-4 h-4" /></a
				>
			</div>
			<PostsList posts={data.posts} />
		</section>
	</section>
</div>
