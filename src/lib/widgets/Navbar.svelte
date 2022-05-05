<nav class="m-x1">
	<ul>
		<slot />
	</ul>
</nav>

<style lang="postcss">
	nav {
		ul {
			display: flex;
			align-items: center;
			list-style: none;
			gap: 1rem;
			height: 3rem;
		}
	}
</style>
