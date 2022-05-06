<script lang="ts">
	import Card from '$lib/widgets/Card.svelte';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	let modal: HTMLDialogElement; //re-declared in global.d.ts
	export let modalButtonTitle: string;
	export let important = true;
	import { fade } from 'svelte/transition';
	import Button from './Button.svelte';

	const closeIcon = faXmark;

	const openModal = () => {
		try {
			modal.showModal();
		} catch (err) {
			console.error(err);
		}
	};

	const closeModal = () => {
		try {
			modal.close();
		} catch (err) {
			console.error(err);
		}
	};

	const startClose = () => {
		modal.setAttribute('closing', '');
	};

	onMount(() => {
		modal.addEventListener('animationend', () => {
			if (modal.hasAttribute('closing')) {
				modal.removeAttribute('closing');
				closeModal();
			}
		});
	});
</script>

<Button on:buttonClicked={openModal} {important}>
	{modalButtonTitle}
</Button>

<dialog
	class="modal m-auto"
	bind:this={modal}
	on:click={(ev) => {
		//@ts-ignore
		if (ev.target.tagName === 'DIALOG') {
			startClose();
		}
	}}
>
	<Card>
		<button class="modal__close m-x0_5" on:click={startClose}>
			<Fa icon={closeIcon} scale={1.35} fw />
		</button>
		<main class="modal__content">
			<slot />
		</main>
	</Card>
</dialog>

<style lang="scss">
	.modal {
		overflow: visible;
		background-color: transparent;
		&::backdrop {
			backdrop-filter: blur(5px);
		}
		&__close {
			z-index: 10;
			position: absolute;
			top: 0;
			right: 0;
		}
		&__content {
			padding: 15%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	:global {
		.modal {
			&[open] {
				animation: glideIn 500ms, blurIn 500ms;
				&::backdrop {
					animation: blurIn 500ms forwards;
				}
			}
			&[closing] {
				animation: glideOut 500ms, blurOut 500ms;
				&::backdrop {
					animation: blurOut 500ms forwards;
				}
			}
		}
	}

	@keyframes glideIn {
		0% {
			transform: translateY(-30%);
		}
		100% {
			transform: translateY(0%);
		}
	}

	@keyframes glideOut {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(30%);
		}
	}

	@keyframes blurIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes blurOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
