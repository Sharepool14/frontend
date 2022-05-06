<script lang="ts">
	import { transitionCleanup } from '../../../typescript/ts/global';
	import { fly } from 'svelte/transition';
	export let annimationSpeed = 500;
	export let x = 50;
	export let y = 0;
</script>

<div
	out:fly={{ duration: annimationSpeed, x: x, y: y }}
	in:fly={{ delay: annimationSpeed, duration: annimationSpeed, x: -x }}
>
	<slot />
</div>

<style>
	div {
		width: 100vw;
		display: flex;
		flex-direction: column;
	}
</style>
