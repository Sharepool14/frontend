<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let ripple: HTMLSpanElement;
	let button: HTMLButtonElement;
	const notify = () => {
		dispatch('buttonClicked');
	};

	const rippleStartFocus = () => {
		ripple.style.left = '50%';
		ripple.style.top = '50%';
	};
	const rippleStart = (e: MouseEvent) => {
		ripple.style.left = `${e.clientX - button.offsetLeft}px`;
		ripple.style.top = `${e.clientY - button.offsetTop}px`;
	};
	export let type = 'button';
	export let important = true;
	export let styling: string = undefined;
	$: cssVariables = Object.entries($$props)
		.filter(([key]) => key.startsWith('--'))
		.reduce((css, [key, value]) => `${css}${key}: ${value};`, '');
</script>

<button
	{type}
	class:important
	on:click={notify}
	on:focus={() => rippleStartFocus()}
	on:mouseover={(e) => rippleStart(e)}
	class={styling}
	style:cssVariables
	bind:this={button}
>
	<span class="text"><slot /></span>
	<span class="ripple" bind:this={ripple} on:mouseover={(e) => rippleStart(e)} />
</button>

<style lang="scss">
	button {
		position: relative;
		--color: var(--button-color, var(--primary));
		--border-radius: 0.5em;
		font-weight: 500;
		overflow: hidden;
		font-size: inherit;
		height: 2.5em;
		padding: 0.5em;

		display: grid;
		place-items: center;
		border-radius: var(--border-radius);
		border: 3px solid transparent;
		transition: border-radius 300ms ease-in-out, border-color 300ms ease,
			background-color 300ms ease, color 300ms ease, font-weight 300ms ease-in-out;

		&:focus,
		&:hover {
			.ripple {
				transform: scale(12);
				opacity: 0.5;
			}
		}

		.ripple {
			z-index: 9000;
			background-color: black;
			filter: brightness(0.5);
			position: absolute;
			border-radius: 50%;
			width: 2em;
			height: 2em;
			opacity: 0;
			transition: transform 800ms ease-in-out, opacity 800ms ease-in-out,
				background-color 500ms ease-in-out;
			transform: scale(0);
		}

		.text {
			position: relative;
			z-index: 10000;
		}

		&.important {
			color: white;
			background-color: var(--color);
			border-color: var(--color);
			&:hover,
			&:focus {
				border-radius: calc(var(--border-radius) * 3);
			}
		}

		@keyframes shifting-border {
			0% {
				border-color: var(--primary);
			}
			100% {
				border-color: var(--secondary);
			}
		}

		@keyframes shifting-color {
			0% {
				color: var(--primary);
			}
			100% {
				color: var(--secondary);
			}
		}
	}
</style>
