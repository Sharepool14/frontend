<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let thisAnchor: HTMLAnchorElement;
	export let href: string;
	export let navTitle: string;

	const updateActive = () => {
		if (href === $page.url.pathname) {
			thisAnchor.setAttribute('current-route', '');
		} else {
			thisAnchor.removeAttribute('current-route');
		}
	};

	onMount(() => {
		updateActive();
	});

	afterNavigate(() => {
		updateActive();
	});
</script>

<li>
	<a {href} bind:this={thisAnchor}>{navTitle}</a>
</li>

<style lang="postcss">
	li {
		a {
			position: relative;
			text-decoration: none;

			&::after {
				position: absolute;
				content: '';
				background-color: rgb(255, 0, 204);
				top: 1rem;
				bottom: -0.15rem;
				left: 0;
				right: 0;
				border-radius: 3px;
				transform: scaleX(0);
				transform-origin: right;
				transition: transform ease-in-out 300ms;
			}

			&:hover::after {
				transform: scaleX(0.6);
			}
		}
		:global(a[current-route]) {
			&::after,
			&:hover::after {
				transform: scaleX(1);
			}
		}
	}
</style>
