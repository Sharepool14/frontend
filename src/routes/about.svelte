<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'About';
		stuff.description = 'An in-depth explenation of the intent and function of Sharepool';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
</script>

<Animate>
	<p>some stuff</p>
</Animate>
