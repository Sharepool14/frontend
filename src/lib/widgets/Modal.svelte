<script lang="ts">
	import Card from '$lib/widgets/Card.svelte';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	let modal: HTMLDialogElement; //re-declared in global.d.ts
	export let modalButtonTitle: string;
	import { fade } from 'svelte/transition';

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
</script>

<button on:click={openModal}>
	{modalButtonTitle}
</button>

<dialog
	class="modal m-auto"
	bind:this={modal}
	on:click={(ev) => {
		//@ts-ignore
		if (ev.target.tagName === 'DIALOG') {
			closeModal();
		}
	}}
>
	<Card>
		<button class="modal__close m-x0_5" on:click={closeModal}>
			<Fa icon={closeIcon} scale={1.35} fw />
		</button>
		<main class="modal__content">
			<slot />
		</main>
	</Card>
</dialog>

<style lang="postcss">
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
</style>
