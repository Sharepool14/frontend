<script lang="ts">
	import { Button } from '$lib/modules/widgets';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

	const acceptIcon = faCheck;
	const rejectIcon = faXmark;

	export let requestID: number;
	export let requester: string;
	export let item: string;
	export let communityName: string;

	const handleAccept = async (id) => {
		console.log($page.url.pathname);
		const res = await fetch($page.url.pathname, {
			method: 'post',
			body: JSON.stringify({
				requestID: id,
			}),
		});

		if (res.status < 400) {
			await invalidate($page.url.pathname);
		}
	};

	const handleReject = async (id) => {
		const res = await fetch($page.url.pathname, {
			method: 'delete',
			body: JSON.stringify({
				requestID: id,
			}),
		});

		if (res.status < 400) {
			await invalidate($page.url.pathname);
		}
	};
</script>

<li>
	<span>
		{requester} from {communityName} requested your {item}
		<Button on:buttonClicked={() => handleAccept(requestID)} --button-color="var(--secondary)"
			><Fa icon={acceptIcon} scale={1.35} fw /></Button
		>
		<Button on:buttonClicked={() => handleReject(requestID)}
			><Fa icon={rejectIcon} scale={1.35} fw /></Button
		>
	</span>
</li>

<style lang="scss">
	li {
		span {
			display: inline-flex;
			gap: 1rem;
			align-items: center;
		}
	}
</style>
