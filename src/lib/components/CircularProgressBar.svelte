<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	const borrowDate = new Date('2022-04-20');
	const returnDate = new Date('2022-04-30');

	const elapsedTime = tweened<number>();
	const daysToReturn = tweened<number>();

	onMount(() => {
		$elapsedTime =
			((Date.now() - borrowDate.getTime()) / (returnDate.getTime() - borrowDate.getTime())) * 253;
		$daysToReturn = (returnDate.getTime() - Date.now()) / (1000 * 3600 * 24);
	});
</script>

<div class="circular ml-auto mr-auto">
	<svg class="circular__progress" viewBox="0 0 100 100" preserveAspectRatio="none">
		<defs>
			<linearGradient id="GradientColor">
				<stop offset="0%" stop-color="#d93df5" />
				<stop offset="100%" stop-color="#3df5e9" />
			</linearGradient>
		</defs>
		<circle
			cx="50"
			cy="50"
			r="40"
			stroke-linecap="round"
			stroke-dashoffset={Math.round($elapsedTime)}
		/>
	</svg>
	<div class="circular__days">
		<p>Returned in<br /><strong>{Math.round($daysToReturn)} days</strong></p>
	</div>
</div>

<style lang="postcss">
	.circular {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		width: 80%;
		&__progress {
			transform: rotate(90deg);
			max-width: 225px;
			min-width: 185px;
			circle {
				fill: none;
				stroke: url(#GradientColor);
				stroke-width: 10px;
				stroke-dasharray: 253;
			}
		}
		&__days {
			position: absolute;
			text-align: center;
		}
	}
</style>
