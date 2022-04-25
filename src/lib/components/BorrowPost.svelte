<script lang="ts">
	import Card from '$lib/widgets/Card.svelte';
	import CircularProgressBar from './CircularProgressBar.svelte';

	export let title: string;
	export let description: string;
	export let borrowed: boolean;
</script>

<Card>
	<div>
		<h1>{title}</h1>
		{#if borrowed}
			<CircularProgressBar />
		{:else}
			<img src="https://picsum.photos/800/400" alt="Item" />
		{/if}
		<p>{description}</p>
	</div>
</Card>

<style lang="postcss">
	div {
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.125rem;
		img {
			border-radius: 3rem 0 3rem 0;
		}
	}
</style>
