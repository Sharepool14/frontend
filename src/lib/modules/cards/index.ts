export {
	/**
	 * A wrapper component for diplaying content on a card
	 * @author Theo Johansson
	 * @prop {boolean} hoverable - whether or not the box-shadow will switch color when hovered on @default false
	 */
	default as Card,
} from './Card.svelte';

export {
	/**
	 * A wrapper component for diplaying content on a card with a colored gradient background
	 * @author Theo Johansson
	 * @prop {any} $$props - all props passed to this component, is used to define the --dark and --color css variables
	 */
	default as CardColored,
} from './CardColored.svelte';

export {
	/**
	 * A wrapper component for displaying content on a pop-up modal
	 * @author Theo Johansson
	 * @prop {string} modalButtonTitle - what title will the button that opens the modal have
	 * @prop {boolean} important - if the button componen that opens the modal will take the 'important' form @default true
	 * @prop {boolean} secondaryColor - if the button componen that opens the modal will use the secondary color for its background color @default false
	 * @method openModal - opens the modal
	 * @method startClose - starts the closing animation
	 * @see HTMLDialogElement
	 * @see Button
	 */
	default as Modal,
} from './Modal.svelte';
