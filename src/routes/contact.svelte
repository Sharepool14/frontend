<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Contact';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
</script>

<Animate>
	<h1>Contact</h1>
	<p>some stuff</p>
</Animate>
