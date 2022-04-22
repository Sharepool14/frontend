<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<nav class="m-x1" in:fade>
	<ul>
		<slot />
	</ul>
</nav>

<style lang="postcss">
	nav {
		ul {
			display: flex;
			list-style: none;
			gap: 1rem;
		}
	}
</style>
