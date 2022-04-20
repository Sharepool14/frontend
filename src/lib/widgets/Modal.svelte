<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	let modal: HTMLDialogElement; //re-declared in global.d.ts
	export let modalButtonTitle: string;

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

	onMount(() => {
		modal.addEventListener('click', (ev) => {
			//@ts-ignore
			if (ev.target.tagName === 'DIALOG') {
				closeModal();
			}
		});
	});
</script>

<button on:click={openModal}>
	{modalButtonTitle}
</button>

<dialog class="modal m-auto" bind:this={modal}>
	<button class="modal__close m-x0_5" on:click={closeModal}>
		<Fa icon={closeIcon} scale={1.35} fw />
	</button>
	<main class="modal__content p-x2">
		<slot />
	</main>
</dialog>

<style lang="postcss">
	.modal {
		border: 2px solid rgb(255, 0, 204);
		box-shadow: 0 0 50px 0 rgba(255, 0, 204, 0.3);
		background-color: transparent;
		&::backdrop {
			backdrop-filter: blur(5px);
		}
		&__close {
			position: absolute;
			top: 0;
			right: 0;
		}
		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: hsl(0 100% 100% / 0.05);
		}
	}
</style>
