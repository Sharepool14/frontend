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
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
</script>

<Animate>
	<p>some stuff</p>
</Animate>
