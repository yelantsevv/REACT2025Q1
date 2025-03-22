interface Array<T> {
  toSorted(compareFn?: (a: T, b: T) => number): T[];
}
