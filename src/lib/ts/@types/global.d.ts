declare interface HTMLDialogElement extends HTMLElement {
	showModal(): void;
	close(): void;
}

declare interface Authentication {
	username: string;
	password: string;
}

declare interface UserInformation {
	firstname: string;
	lastname: string;
	phone: string;
	city: string;
	zipcode: string;
	street: string;
}

declare interface User extends Authentication {
	userDetails: UserInformation;
}
