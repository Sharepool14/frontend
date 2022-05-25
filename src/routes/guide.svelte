<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Guide';
		stuff.description = 'An in-depth explenation of the intent and function of Sharepool';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import { Block as Animate } from '$lib/modules/anim';
</script>

<Animate>
	<h1>Guide</h1>
	<h3>Welcome to Sharepool!</h3>
	<p>The application for a sustainable future.</p>
	<h2 class="mt-x1">Pools</h2>
	<p>
		To begin sharing items, you first need to be part of a group. These are called ”pools”. To join
		a pool, you must first receive an invite from someone on the inside. Pools are invite-only.
		Don't know anyone in a pool? Start your own! Invite your friends, family, neighbours or
		colleagues. Not registered yet? Click the icon in the top right corner!
	</p>
	<p>Happy sharing!</p>
</Animate>
