<script lang="ts">
	export let placeholder: string;
	export let required = false;
	export let type: string;
	export let value: string = undefined;
	export let inputRef: HTMLInputElement = undefined;
	export let first = false;
	export let last = false;

	const setType = (node) => {
		if (['text', 'email', 'password'].includes(type)) {
			node.type = type;
		} else if (type === 'phone') {
			node.type = type;
			node.pattern = '[0-9+-]{8,20}';
		} else {
			node.type = 'text';
		}
	};
</script>

<input
	class="pblk-x0_5 pinl-x1"
	class:first
	class:last
	use:setType
	{placeholder}
	{required}
	bind:value
	bind:this={inputRef}
/>

<style lang="scss">
	input {
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
	}

	.first {
		border-top-left-radius: 1em;
		border-top-right-radius: 1em;
	}

	.last {
		border-bottom-left-radius: 1em;
		border-bottom-right-radius: 1em;
	}
</style>
