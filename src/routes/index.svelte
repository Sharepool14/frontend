<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Home';
		stuff.description =
			"The landing page of Sharepool, a website for borrowing and shareing household items within trusted 'pools'";
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
