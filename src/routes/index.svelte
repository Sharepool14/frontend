<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	const pageTitle = 'Home';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Animate>
	<h1>{pageTitle}</h1>
</Animate>
