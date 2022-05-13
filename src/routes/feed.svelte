<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Feed';
		stuff.description = 'Where you go to share and borrow household items between pools';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import BorrowPost from '$lib/components/BorrowPost.svelte';
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import CardColored from '$lib/widgets/CardColored.svelte';
	import { hasAccess } from '$lib/typescript/data/auth.store';

	let cards = new Array<string>(50);
</script>

<Animate>
	{#if $hasAccess}
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
	{:else}
		<CardColored --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>You have to be logged in to see this page</h2>
		</CardColored>
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
</style>
