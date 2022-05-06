<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Pools';
		stuff.description =
			'Groups of like-minded people who share common household items between them';
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
