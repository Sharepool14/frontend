<script lang="ts">
	import { fade } from 'svelte/transition';
	export let annimationSpeed = 250;
</script>

<span
	out:fade={{ duration: annimationSpeed }}
	in:fade={{ delay: annimationSpeed, duration: annimationSpeed }}
>
	<slot />
</span>
