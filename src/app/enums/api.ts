import { HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { IObject } from "./common";

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export interface RequestOptions {
	loader?: Loader;
    apiState?: ApiState;
}

export interface Loader {
    isLoading$: Observable<boolean>;
    isLoadingSubject: BehaviorSubject<boolean>;
}
  
export interface ApiState {
    isSucceded$: Observable<boolean>;
    isSuccededSubject: BehaviorSubject<boolean>;
}

export const DEFAULT_LOADER = {
    loader: {
      isLoadingSubject: new BehaviorSubject<boolean>(false),
      isLoading$: new Observable<boolean>()
    }
  };
  
export const DEFAULT_API_STATE = {
    apiState: {
        isSuccededSubject: new BehaviorSubject<boolean>(false),
        isSucceded$: new Observable<boolean>()
    }
};
  

export enum Endpoints {
    LOGIN = '',
    SETTING = '',
    ENV = '',

    // TEST
    TEST = '/test'
}

export interface IApiOptions {
    params?: IObject;
    urlReplacements?: IObject;
    body?: any;
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    reportProgress?: boolean;
    observe?: 'events';
    responseType?: 'json';
    withCredentials?: boolean;
  }
  