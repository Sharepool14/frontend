<script lang="ts" context="module">
	export async function load({ stuff, props }) {
		stuff.title = 'Feed';
		stuff.description = 'Where you go to share and borrow household items between pools';
		return {
			stuff,
			props,
		};
	}
</script>

<script lang="ts">
	import { BorrowPost as Post } from '$lib/modules/other';
	import { Block as Animate } from '$lib/modules/anim';
	import { CardColored } from '$lib/modules/cards';
	import { hasAccess } from '$lib/data/auth.store';
	import { onMount } from 'svelte';

	export let posts;
	onMount(() => {
		console.log(posts);
	});
</script>

<Animate>
	{#if posts}
		<div class="posts minl-auto">
			{#each posts as post}
				<Post
					id={post.id}
					title={post.item.name}
					description={post.item.description}
					startDate={new Date(post.start_date)}
					endDate={new Date(post.return_date)}
					borrowed={false}
				/>
			{/each}
		</div>
	{/if}
</Animate>

<style lang="scss">
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
		gap: 2rem;

		width: 80vw;

		@media screen and (min-width: 1440px) {
			width: 70vw;
		}
	}
	h1 {
		font-size: 3rem;
	}
</style>
