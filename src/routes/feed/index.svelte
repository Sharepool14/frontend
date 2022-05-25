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
	import { BorrowPost } from '$lib/modules/other';
	import { Block as Animate } from '$lib/modules/anim';
	import { CardColored } from '$lib/modules/cards';
	import { hasAccess } from '$lib/data/auth.store';

	let cards = new Array<string>(50);
</script>

<Animate>
	<h1>Work in progress</h1>
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
