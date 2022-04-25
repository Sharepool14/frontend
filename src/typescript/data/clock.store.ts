import { writable } from 'svelte/store';

export const time = writable<number>();

const checkTime = () => {
	time.set(Date.now());
};

const clock = setInterval(() => checkTime(), 1000);

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
