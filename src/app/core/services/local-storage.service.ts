import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const LOCAL_STORAGE_PREFIX = 'schess.';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private onSubject = new Subject<{ key: string, value: any}>();

  constructor() { }

  public getItem(key: string): any {
    if (localStorage.getItem(LOCAL_STORAGE_PREFIX + key)) {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX + key)!);
    }
    return null;
  }

  public setItem(key: string, dataToStore: any): void {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + key, JSON.stringify(dataToStore));
    this.onSubject.next({key, value: dataToStore});
  }

  public removeItem(key: string): void {
    localStorage.removeItem(LOCAL_STORAGE_PREFIX + key);
    this.onSubject.next({key, value: null});
  }
}
