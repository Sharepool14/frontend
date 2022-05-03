<script lang="ts">
	export let userName: string;
</script>

<div class="profile minl-x1">
	<img class="profile__img" src="https://picsum.photos/50/50" alt="Your Profile" />
</div>

<style lang="postcss">
	.profile {
		display: flex;
		align-items: center;
		&__img {
			width: 3rem;
			height: 3rem;
			aspect-ratio: 1/1;
			border-radius: 50%;

			&::after {
			}
		}
		&__links {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: right;
			h1 {
				font-size: 1rem;
				font-weight: bold;
				text-transform: capitalize;
			}

			h2 {
				font-size: 0.75rem;
				font-weight: normal;
			}
		}
	}
</style>
