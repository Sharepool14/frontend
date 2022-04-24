<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'About';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
</script>

<Animate>
	<h1>About</h1>
	<p>some stuff</p>
</Animate>
