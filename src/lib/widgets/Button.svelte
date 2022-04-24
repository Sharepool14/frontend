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

<style lang="postcss">
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
		span {
			font-size: inherit;
			text-transform: capitalise;
			padding: 0.75ch 0.75rem;
			&:hover {
				animation: 2.5s ease hoverColor infinite;
				background-clip: text;
				color: transparent;
			}
		}

		&.important {
			font-weight: ;
			span {
				color: var(--stage);
				font-weight: 600;
				border-radius: var(--border-radius);
				background-image: var(--background-gradient);
				background-repeat: no-repeat;
				&:hover {
					color: transparent;
					.important::before {
						animation: 2.5s ease hoverColor infinite;
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
				inset: -0.05ch -0.05rem;
				background-image: var(--background-gradient);

				border-radius: calc(var(--border-radius) * 1.05);
			}
			&::after {
				inset: 0.05ch 0.05rem;
				background-color: var(--stage);

				border-radius: calc(var(--border-radius));
			}
		}
	}

	@keyframes hoverColor {
		0% {
			background-color: var(--primary);
		}
		25% {
			background-color: var(--secondary);
		}
		50% {
			background-color: var(--secondary);
		}
		75% {
			background-color: var(--primary);
		}
		100% {
			background-color: var(--primary);
		}
	}
</style>
