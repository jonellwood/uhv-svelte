<script>
	export let as = 'div';
	export let href = undefined;

	let _class = undefined;
	export { _class as class };
</script>

<svelte:element
	this={as}
	class={['relative flex flex-col items-start group', _class].join(' ')}
>
	<slot name="eyebrow" />

	<!-- {#if $$slots.title}
		<div
			class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
		>
			{#if href}
				<div
					class="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
				/>
				<a {href} data-sveltekit-prefetch>
					<span
						class="absolute z-20 -inset-y6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl"
					/>
					<span class="relative z-10">
						<slot name="title" />
					</span>
				</a>
			{:else}
				<slot name="title" />
			{/if}
		</div>
	{/if} -->

	{#if $$slots.title}
		<div
			class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
		>
			{#if href}
				<a {href} class="group relative z-10" data-sveltekit-prefetch>
					<span
						class="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
					/>
					<span class="-inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl">
						<slot name="title" />
					</span>
				</a>
			{:else}
				<div>
					<slot name="title" />
				</div>
			{/if}
		</div>
	{/if}

	{#if $$slots.actions}
		<div aria-hidden="true" class="relative z-10 flex items-center mt-4">
			<slot name="actions" />
		</div>
	{/if}
</svelte:element>
