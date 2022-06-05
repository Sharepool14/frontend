export {
	/**
	 * A wrapper component for animating block level sections of the DOM
	 * @author Theo Johansson
	 * @prop {number} animationSpeed - the speed of the animation in milliseconds @default 500
	 * @prop {number} x - the origin point of the animation in pixels @default 50
	 */
	default as Block,
} from './Block.svelte';

export {
	/**
	 * A wrapper component for animating inline level sections of the DOM
	 * @author Theo Johansson
	 * @prop {number} animationSpeed - the speed of the animation in milliseconds @default 500
	 * @prop {number} x - the origin point of the animation in pixels @default 50
	 */
	default as Inline,
} from './Inline.svelte';

export {
	/**
	 * An animated background for the website
	 * @author Theo Johansson
	 */
	default as Particles,
} from './Particles.svelte';
