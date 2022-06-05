<script lang="ts">
	import { fly } from 'svelte/transition';
	export let annimationSpeed = 500;
	export let x = 50;
</script>

<div
	out:fly={{ duration: annimationSpeed, x: x }}
	in:fly={{ delay: annimationSpeed, duration: annimationSpeed, x: -x }}
>
	<slot />
</div>

<style lang="scss">
	div {
		width: 100vw;
		display: flex;
		flex-direction: column;
	}
</style>
