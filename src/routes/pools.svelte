<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Pools';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import BorrowPost from '$lib/components/BorrowPost.svelte';
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import Card from '$lib/widgets/Card.svelte';
	let cards = new Array<string>(100);
</script>

<Animate>
	<header class="mb-x2">
		<h1>Pools</h1>
		<p>some stuff</p>
	</header>
	<section class="posts ml-auto mr-auto">
		<BorrowPost
			title="An item"
			description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia qui, debitis iusto
						quia obcaecati alias."
			borrowed={true}
		/>
		{#each cards as card}
			<Card>
				<div class="post p-x2">
					<h1 class="post__title">A post</h1>
					<p class="post__description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia qui, debitis iusto
						quia obcaecati alias illo perferendis sequi eius molestiae odio modi voluptatem veniam
						amet laborum a, eos magni iure.
					</p>
				</div>
			</Card>
		{/each}
	</section>
</Animate>

<style lang="postcss">
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
		gap: 2rem;

		width: 80vw;

		@media screen and (min-width: 1440px) {
			width: 70vw;
		}
	}

	.post {
	}
</style>
