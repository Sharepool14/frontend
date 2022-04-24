<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Pools';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
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
		grid-template-columns: repeat(1, minmax(35vw, 300px));
		gap: 2rem;

		@media screen and (min-width: 600px) {
			grid-template-columns: repeat(2, minmax(35vw, 300px));
		}

		@media screen and (min-width: 1200px) {
			grid-template-columns: repeat(3, minmax(30vw, 200px));
		}

		@media screen and (min-width: 1800px) {
			grid-template-columns: repeat(4, minmax(20vw, 200px));
			gap: 4rem;
		}
	}

	.post {
	}
</style>
