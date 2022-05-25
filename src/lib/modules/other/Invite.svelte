<script lang="ts">
	import { Button } from '$lib/modules/widgets';
	import { invalidate } from '$app/navigation';

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
			>Accept</Button
		>
		<Button important={false} on:buttonClicked={() => rejectInvite()}>Reject</Button>
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
