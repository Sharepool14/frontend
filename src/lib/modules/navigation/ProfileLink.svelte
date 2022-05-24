<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	export let unread = true;
	export let href: string;
	let thisAnchor: HTMLAnchorElement;
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

<div class="profile" class:unread>
	<a class="profile__anchor" {href} bind:this={thisAnchor} sveltekit:prefetch>
		<img class="profile__img" src="https://picsum.photos/50/50" alt="Your Profile" />
	</a>
</div>

<style lang="scss">
	.profile {
		display: flex;
		align-items: center;
		position: relative;

		&.unread {
			&::after {
				position: absolute;
				content: '';
				bottom: 0.15rem;
				right: 0.15rem;
				width: 0.75rem;
				height: 0.75rem;
				background-color: var(--secondary);
				border-radius: 50%;
			}
		}

		&__img {
			width: 3rem;
			height: 3rem;
		}

		&__anchor {
			border-radius: 50%;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 3px solid transparent;

			transition: 200ms border ease-in-out;
			&:hover {
				border-color: var(--primary);
			}
			&:focus {
				border-color: var(--secondary);
			}

			&:is(a[current-route]) {
				border-color: var(--primary);
				&:focus {
					border-color: var(--secondary);
				}
			}
		}
	}
</style>
