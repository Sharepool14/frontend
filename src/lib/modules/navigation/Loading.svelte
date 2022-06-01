<script lang="ts">
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	let loading = false;
	$: {
		if ($navigating) {
			setTimeout(() => {
				if ($navigating) {
					loading = true;
				}
			}, 400);
		}
		if (!$navigating) {
			loading = false;
		}
	}
</script>

{#if loading}
	<div transition:fade={{ duration: 100 }} class="loader" />
{/if}

<style lang="scss">
	.loader {
		--size: 2em;
		position: fixed;
		top: calc(50% - calc(var(--size) / 2));
		left: calc(50% - calc(var(--size) / 2));
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: var(--primary);
		animation: load 1s ease-in-out alternate infinite;
		@keyframes load {
			0% {
				transform: translate3d(-100%, 0, 0);
			}

			100% {
				transform: translate3d(100%, 0, 0);
			}
		}
	}
</style>
