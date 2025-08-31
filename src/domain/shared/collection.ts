export interface Collection<T> {
  readonly [index: number]: T;
  readonly length: number;

  map<U>(callback: (item: T, index: number) => U): U[];
  forEach(callback: (item: T, index: number) => void): void;
  find(predicate: (item: T, index: number) => boolean): T | undefined;
  filter(predicate: (item: T, index: number) => boolean): T[];
  some(predicate: (item: T, index: number) => boolean): boolean;
  every(predicate: (item: T, index: number) => boolean): boolean;
}
