declare interface HTMLDialogElement extends HTMLElement {
	showModal(): void;
	close(): void;
}

declare interface Authentication {
	username: string;
	password: string;
}

declare interface UserData {
	firstName: string;
	lastName: string;
	phone: string;
	city: string;
	zipCode: string;
	street: string;
}

declare interface User extends Authentication {
	userData: UserData;
}
