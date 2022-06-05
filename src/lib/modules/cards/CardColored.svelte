<script lang="ts">
	$: cssVariables = Object.entries($$props)
		.filter(([key]) => key.startsWith('--'))
		.reduce((css, [key, value]) => `${css}${key}: ${value};`, '');
</script>

<div class="p-x1" style:cssVariables>
	<slot />
</div>

<style type="text/scss" lang="scss">
	div {
		overflow: visible;
		background-image: linear-gradient(45deg, var(--color, inherit), var(--dark, inherit));
		border-radius: 2rem;
		box-shadow: 0.25em 0.25em 2em var(--dark, inherit);
		transition: box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
	}
</style>
