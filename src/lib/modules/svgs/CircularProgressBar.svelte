<script lang="ts">
	import {
		millisToDays,
		millisToHours,
		millisToMinutes,
		millisToSeconds,
		time,
	} from '$lib/data/clock.store';
	import { tweened } from 'svelte/motion';
	import { writable } from 'svelte/store';
	import { linear } from 'svelte/easing';

	export let startDate: Date;
	export let endDate: Date;
	const borrowDateTime = startDate.getTime();
	const endDateTime = endDate.getTime();

	const progress = tweened(0, { duration: 1000 });
	const returnedIn = writable({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const getProgressRatioOffset = (ms: number) => {
		return Math.round(((ms - borrowDateTime) / (endDateTime - borrowDateTime)) * 253);
	};

	$: {
		$progress = Math.round((($time - borrowDateTime) / (endDateTime - borrowDateTime)) * 253);
		$returnedIn.seconds = millisToSeconds(endDateTime - $time);
		$returnedIn.minutes = millisToMinutes(endDateTime - $time);
		$returnedIn.hours = millisToHours(endDateTime - $time);
		$returnedIn.days = millisToDays(endDateTime - $time);
	}
</script>

<div class="circular minl-auto">
	{#if $returnedIn.seconds >= 0}
		<svg class="circular__progress" viewBox="0 0 100 100" preserveAspectRatio="none">
			<defs>
				<linearGradient id="GradientColor">
					<stop id="GradientColorA" offset="0%" />
					<stop id="GradientColorB" offset="100%" />
				</linearGradient>
			</defs>
			<circle cx="50" cy="50" r="40" stroke-linecap="round" stroke-dashoffset={$progress} />
		</svg>
	{/if}
	<div class="circular__days">
		<p>
			{#if $returnedIn.seconds >= 0}
				Avalible for<br />
				{#if $returnedIn.days > 0}{$returnedIn.days}<b>d</b>{/if}
				{#if $returnedIn.hours > 0}{$returnedIn.hours}<b>h</b>{/if}
				{#if $returnedIn.minutes > 0}{$returnedIn.minutes}<b>m</b>{/if}
				{$returnedIn.seconds}<b>s</b>
			{:else}
				Unavailible
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
