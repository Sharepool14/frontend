declare interface NewPool {
	poolName: string;
}

declare interface Item {
	name: string;
	description: string;
	category: number;
}

declare type OtherUser = {
	email: string;
};

declare interface Invite {
	communityID: number;
	invitee: string;
}

declare interface Register extends Authentication, UserInformation {}
