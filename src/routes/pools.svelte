<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Pools';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import BorrowPost from '$lib/components/BorrowPost.svelte';
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import { onMount } from 'svelte';
	let title: string;
	let cards = new Array<string>(50);

	onMount(() => {
		title = $page.stuff.title;
	});
</script>

<Animate>
	<header class="mb-x2">
		<h1>{title}</h1>
		<p>some stuff</p>
	</header>
	<section class="posts minl-auto mb-x2">
		{#each cards as card}
			<BorrowPost
				title="An item"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia qui, debitis iusto
						quia obcaecati alias."
				borrowed={true}
			/>
			<BorrowPost
				title="An item"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia qui, debitis iusto
						quia obcaecati alias."
				borrowed={false}
			/>
		{/each}
	</section>
</Animate>

<style lang="postcss">
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;

		width: 80vw;

		@media screen and (min-width: 1440px) {
			width: 70vw;
		}
	}

	.post {
	}
</style>
