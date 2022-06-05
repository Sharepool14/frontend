export {
	/**
	 * @prop {string} type - the type of the button, either button, submit or reset @default 'button'
	 * @prop {boolean} important - if the button uses the important shape @default true
	 * @prop {string} styling - utility classes you want to apply to the button @default undefined
	 */
	default as Button,
} from './Button.svelte';

export {
	/**
	 * A component that extends the functionality and styling of standard HTMLFormElement
	 * @prop {string} title -the title of the form
	 * @prop {string} width - a valid css width value  @default 'clamp(200px, 50vw, 500px)'
	 * @prop {string} method - the method of the form
	 * @prop {string} action - the action of the form
	 * @see HTMLFormElement
	 */
	default as Form,
} from './Form.svelte';

export {
	/**
	 * A component that extends the functionality and styling of standard HTMLInputElement, HTMLTextAreaElement and HTMLSelectElement
	 * @author Theo Johansson
	 * @prop {string} type - the type of input
	 * @prop {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} inputRef -a reference for the input element if it needs to be used
	 * @prop {boolean} first -if this is the first input in a form @default false
	 * @prop {boolean} last -if this is the last input in a form @default false
	 * @see HTMLInputElement
	 * @see HTMLTextAreaElement
	 * @see HTMLSelectElement
	 */
	default as Input,
} from './Input.svelte';
