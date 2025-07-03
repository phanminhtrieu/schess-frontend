export interface IAction {
	type: string;
	data: any;
}

export interface ApiResult {
	isSucceeded: boolean;
	message: string;
	resultObj: any;
}

export interface IObject {
	[key: string]: any;
}
