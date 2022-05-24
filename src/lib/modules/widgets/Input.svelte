<script lang="ts">
	export let type: string;
	export let value = undefined;
	export let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement = undefined;
	export let first = false;
	export let last = false;

	const setType = (node) => {
		if (['submit', 'reset', 'button'].includes(type)) {
			node.type = 'text';
			console.warn(`'${type}' is an invalid input type, use a button instead`);
		} else if (type === 'phone') {
			node.type = type;
			node.pattern = '[0-9+-]{8,20}';
		} else {
			node.type = type;
		}
	};
</script>

{#if type === 'textarea'}
	<textarea
		class={`pblk-x0_5 pinl-x1`}
		class:first
		class:last
		{...$$restProps}
		bind:value
		bind:this={input}
	/>
{:else if type === 'select'}
	<select
		class={`pblk-x0_5 pinl-x1`}
		class:first
		class:last
		{...$$restProps}
		bind:value
		bind:this={input}
	>
		<slot />
	</select>
{:else}
	<input
		class={`pblk-x0_5 pinl-x1`}
		class:first
		class:last
		use:setType
		{...$$restProps}
		bind:value
		bind:this={input}
	/>
{/if}

<style lang="scss">
	input,
	textarea,
	select {
		display: block;
		width: auto;
		background-color: hsl(0 100% 100% / 0.05);
		border: solid var(--primary) 0.25em;
		color: var(--primary);
		transition: color 500ms ease-in-out, border-color 500ms ease-in-out;

		&::placeholder {
			color: var(--primary);
			transition: color 500ms ease-in-out;
		}

		&:focus {
			outline: none;
			font-style: italic;
			color: white;
			&::placeholder {
				font-style: italic;
			}
		}

		&:valid {
			color: var(--secondary);
			border-color: var(--secondary);

			&::placeholder {
				color: var(--secondary);
			}
		}

		/* I hate google chrome */
		&:-webkit-autofill {
			&,
			&:hover,
			&:focus,
			&:active {
				-webkit-text-fill-color: var(--primary) !important;
				font-weight: bold;
				&:valid {
					-webkit-text-fill-color: var(--secondary) !important;
				}
				-webkit-background-clip: text;
			}
		}
		* {
			background-color: var(--stage);
		}
	}

	.first {
		border-top-left-radius: 1em;
		border-top-right-radius: 1em;
	}

	.last {
		border-bottom-left-radius: 1em;
		border-bottom-right-radius: 1em;
	}

	select {
		color: var(--primary);
		background-color: hsla(0, 100%, 100%, 0.05);
		&:focus {
			background-color: var(--stage);
		}
		option:hover,
		option:focus {
			color: var(--stage);
			background-color: var(--primary);
		}
	}
</style>
