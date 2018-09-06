export interface MzStorageInterface {
  save(key: string, data: any): void
  get(key?: string): any
}
