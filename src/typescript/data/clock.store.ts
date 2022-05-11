import { readable } from 'svelte/store';

export const time = readable<number>(0, function start(set) {
	const interval = setInterval(() => set(Date.now()), 1000);
	return function stop() {
		clearInterval(interval);
	};
});

export const millisToSeconds = (ms: number) => {
	return Math.floor((ms % (1000 * 60)) / 1000);
};

export const millisToMinutes = (ms: number) => {
	return Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
};

export const millisToHours = (ms: number) => {
	return Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
};

export const millisToDays = (ms: number) => {
	return Math.floor(ms / (1000 * 60 * 60 * 24));
};
