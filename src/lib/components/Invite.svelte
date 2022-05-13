<script lang="ts">
	import Button from '$lib/widgets/Button.svelte';
	import { reFetchInvites } from '$lib/typescript/data/invites.store';
	import Cookies from 'js-cookie';
	import { reFetchPools } from '$lib/typescript/data/communities.store';

	export let inviteID: number;
	export let inviter: string;
	export let communityName: string;
	const acceptInvite = async () => {
		const res = await fetch(`api/user/communities/invites/${inviteID}`, {
			method: 'POST',
			headers: { access_token: Cookies.get('access_token') },
		});
		if (res.ok) {
			reFetchInvites();
			reFetchPools();
		}
	};

	const rejectInvite = async () => {
		const res = await fetch(`api/user/communities/invites/${inviteID}`, {
			method: 'DELETE',
			headers: { access_token: Cookies.get('access_token') },
		});
		if (res.ok) {
			reFetchInvites();
			reFetchPools();
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
