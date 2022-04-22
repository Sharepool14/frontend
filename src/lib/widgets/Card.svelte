<script lang="ts">
	export let attatch: 'global' | 'local' = 'local';
</script>

<div class={attatch}>
	<slot />
</div>

<style lang="postcss">
	div {
		overflow: visible;
		position: relative;
		background-color: var(--stage);
		border-radius: 20% 0 20% 0;
		&::before,
		&::after {
			z-index: -1;
			overflow: visible;
			position: absolute;
			content: '';
			inset: -0.125rem;
			background-image: linear-gradient(
				60deg,
				var(--primary) 15%,
				var(--stage) 30%,
				var(--stage) 70%,
				var(--secondary) 85%
			);
			border-radius: 20% 0 20% 0;
		}

		&::after {
			filter: blur(25px);
			opacity: 0.15;
		}
	}

	.local {
		&::before,
		&::after {
			background-attachment: local;
		}
	}
	.global {
		&::before,
		&::after {
			background-attachment: fixed;
			background-image: linear-gradient(60deg, var(--primary), var(--secondary));
		}
	}
</style>
