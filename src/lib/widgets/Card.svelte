<script lang="ts">
	export let hoverable = false;
</script>

<div class:hoverable>
	<slot />
</div>

<style lang="postcss">
	div {
		--opacity: 0.2;
		--primary-o: hsl(291 90% 60% / var(--opacity));
		--secondary-o: hsl(176 90% 60% / var(--opacity));
		overflow: visible;
		background-color: var(--stage);
		border-radius: 2rem;
		box-shadow: 0.25em 0.25em 0.75em var(--primary-o);
		transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
	}
	.hoverable {
		&:hover {
			box-shadow: 0.25em 0.25em 0.75em var(--secondary-o);
			transform: scale(1.05);
		}
	}
</style>
