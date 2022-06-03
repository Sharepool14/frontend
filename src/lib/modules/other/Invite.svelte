<script lang="ts">
	import { Button } from '$lib/modules/widgets';
	import { invalidate } from '$app/navigation';
	import Fa from 'svelte-fa';
	import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

	const acceptIcon = faCheck;
	const rejectIcon = faXmark;

	export let inviteID: number;
	export let inviter: string;
	export let communityName: string;
	const acceptInvite = async () => {
		const res = await fetch(`/profile`, {
			method: 'POST',
			body: JSON.stringify({ inviteID: inviteID }),
		});
		if (res.ok) {
			await invalidate('/profile');
		}
	};

	const rejectInvite = async () => {
		const res = await fetch(`/profile`, {
			method: 'DELETE',
			body: JSON.stringify({ invite: inviteID }),
		});
		if (res.ok) {
			await invalidate('/profile');
		}
	};
</script>

<li>
	<span>
		{inviter} invited you to {communityName}
		<Button important on:buttonClicked={() => acceptInvite()} --button-color="var(--secondary)"
			><Fa icon={acceptIcon} scale={1.35} fw /></Button
		>
		<Button on:buttonClicked={() => rejectInvite()}><Fa icon={rejectIcon} scale={1.35} fw /></Button
		>
	</span>
</li>

<style lang="scss">
	li {
		span {
			display: inline-flex;
			gap: 1rem;
		}
	}
</style>
