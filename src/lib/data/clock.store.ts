import { readable } from 'svelte/store';

/**
 * A readable store that gets the current Date in milliseconds every second
 * @see Date.now(),
 * @see readable()
 * @see NodeJS.Timer
 */
export const time = readable<number>(0, function start(set) {
	const interval = setInterval(() => set(Date.now()), 1000);
	return function stop() {
		clearInterval(interval);
	};
});

/**
 * Helper function for handling time
 * @author Theo Johansson
 * @param ms milliseconds
 * @returns ms in seconds
 */
export const millisToSeconds = (ms: number) => {
	return Math.floor((ms % (1000 * 60)) / 1000);
};

/**
 * Helper function for handling time
 * @author Theo Johansson
 * @param ms milliseconds
 * @returns ms in minutes
 */
export const millisToMinutes = (ms: number) => {
	return Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
};

/**
 * Helper function for handling time
 * @author Theo Johansson
 * @param ms milliseconds
 * @returns ms in hours
 */
export const millisToHours = (ms: number) => {
	return Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
};

/**
 * Helper function for handling time
 * @author Theo Johansson
 * @param ms milliseconds
 * @returns ms in days
 */
export const millisToDays = (ms: number) => {
	return Math.floor(ms / (1000 * 60 * 60 * 24));
};
