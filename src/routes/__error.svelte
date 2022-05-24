<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ error, status }) => {
		return {
			props: {
				error,
			},
		};
	};
</script>

<script lang="ts">
	export let error: Error;
</script>

{#if error.cause}
	<h1>{`${error.name}: ${error.cause}`}</h1>
{:else}
	<h1>{error.name}</h1>
{/if}
<h2>{error.message}</h2>
<p class="stack">{error.stack}</p>

<style laneg="scss">
	.stack {
		font-family: monospace;
		font-size: 0.75rem;
		white-space: pre-wrap;
	}
</style>
