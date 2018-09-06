import {MzStorageInterface} from "../@interface/mz-storage.interface";

export abstract class MzStorageAbstractClass implements MzStorageInterface{
  private rootKey = 'mz-dictionary';

  private getRoot (): any {
    return JSON.parse(localStorage.getItem(this.rootKey)) || {};
  }
  private saveRoot (data: any): void {
    return localStorage.setItem(this.rootKey, JSON.stringify(data) );
  }

  get(key?: string): any {
    return (key) ? this.getRoot()[key] : this.getRoot()
  }

  save(key: string, data: any): void {
    let root = data;
    if (key) {
      root = this.getRoot();
      root[key] = data;
    }
    this.saveRoot(root);
  }
}
