<script lang="ts">
	import {
		millisToDays,
		millisToHours,
		millisToMinutes,
		millisToSeconds,
		time,
	} from '$lib/typescript/data/clock.store';
	import { tweened } from 'svelte/motion';
	import { writable } from 'svelte/store';
	import { linear } from 'svelte/easing';

	const borrowDate = new Date('2022-05-09T11:00:00');
	const borrowDateTime = borrowDate.getTime();
	const returnDate = new Date('2022-05-15T11:05:00');
	const returnDateTime = returnDate.getTime();

	const progress = tweened(0, { duration: 1000 });
	const returnedIn = writable({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const getProgressRatioOffset = (ms: number) => {
		return Math.round(((ms - borrowDateTime) / (returnDateTime - borrowDateTime)) * 253);
	};

	$: {
		$progress = getProgressRatioOffset($time);
		$returnedIn.seconds = millisToSeconds(returnDateTime - $time);
		$returnedIn.minutes = millisToMinutes(returnDateTime - $time);
		$returnedIn.hours = millisToHours(returnDateTime - $time);
		$returnedIn.days = millisToDays(returnDateTime - $time);
	}
</script>

<div class="circular ml-auto mr-auto">
	<svg class="circular__progress" viewBox="0 0 100 100" preserveAspectRatio="none">
		<defs>
			<linearGradient id="GradientColor">
				<stop id="GradientColorA" offset="0%" />
				<stop id="GradientColorB" offset="100%" />
			</linearGradient>
		</defs>
		<circle cx="50" cy="50" r="40" stroke-linecap="round" stroke-dashoffset={$progress} />
	</svg>
	<div class="circular__days">
		<p>
			{#if $returnedIn.seconds >= 0}
				Returned in<br />
				{#if $returnedIn.days > 0}{$returnedIn.days}<b>d</b>{/if}
				{#if $returnedIn.hours > 0}{$returnedIn.hours}<b>h</b>{/if}
				{#if $returnedIn.minutes > 0}{$returnedIn.minutes}<b>m</b>{/if}
				{$returnedIn.seconds}<b>s</b>
			{:else}
				Overdue
			{/if}
		</p>
	</div>
</div>

<style lang="scss">
	.circular {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		defs {
			#GradientColor {
				&A {
					stop-color: var(--primary);
				}
				&B {
					stop-color: var(--secondary);
				}
			}
		}

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
