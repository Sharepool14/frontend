<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const notify = () => {
		dispatch('buttonClicked');
	};
	export let type = 'button';
	export let important = true;
	export let styling: string = undefined;
</script>

<button {type} class:important on:click={notify} class={styling}>
	<span>
		<slot />
	</span>
</button>

<style lang="scss">
	button {
		--border-radius: 0.5rem;
		--background-gradient: linear-gradient(60deg, var(--primary), var(--secondary));
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: visible;
		border-radius: var(--border-radius);
		width: fit-content;
		height: fit-content;
		font-size: inherit;

		transition: transform 150ms ease-in-out;
		&:hover {
			transform: scale(1.05);
		}
		span {
			font-size: inherit;
			text-transform: capitalise;
			padding: 0.4em;
			&:hover {
				background-image: var(--background-gradient);
				background-clip: text;
				color: transparent;
			}
		}

		&.important {
			font-weight: 600;
			&:hover {
				transform: translateY(0.15rem);
			}
			span {
				color: var(--stage);
				border-radius: var(--border-radius);
				background-image: var(--background-gradient);
				background-repeat: no-repeat;
				&:hover {
					color: transparent;
					.important::before {
						background-image: none;
					}
				}
			}

			&::after,
			&::before {
				position: absolute;
				z-index: -1;
				content: '';
			}
			&::before {
				inset: -0.05em -0.05em;
				background-image: var(--background-gradient);

				border-radius: calc(var(--border-radius) * 1.05);
			}
			&::after {
				inset: 0.05em 0.05em;
				background-color: var(--stage);

				border-radius: calc(var(--border-radius));
			}
		}
	}
</style>
