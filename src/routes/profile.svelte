<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Your Profile';
		stuff.description = 'user profile';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import { onMount } from 'svelte';
	let title: string;
	onMount(() => {
		title = $page.stuff.title;
	});
</script>

<Animate>
	<h1>{title}</h1>
	<p>some stuff</p>
</Animate>
