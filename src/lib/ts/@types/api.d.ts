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

declare interface LightInvite {
	inviteID: number;
}

declare interface Invite extends LightInvite {
	communityID: number;
	invitee: string;
}

declare interface Register extends Authentication, UserInformation {}

declare interface PostFromForm {
	itemID: string;
	startDate: string;
	endDate: string;
}

declare type ItemRequest = {
	postID: number;
};

declare type LoanRequest = {
	requestID: number;
};
