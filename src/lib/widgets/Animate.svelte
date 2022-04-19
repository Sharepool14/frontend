<script lang="ts">
	import { transitionCleanup } from '../../typescript/ts/global';
	import { fade } from 'svelte/transition';
	let annimationSpeed = 250;
</script>

<div
	out:fade={{ duration: annimationSpeed }}
	in:fade={{ delay: annimationSpeed, duration: annimationSpeed }}
	on:introend={() => transitionCleanup()}
>
	<slot />
</div>
