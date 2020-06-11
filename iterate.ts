/**
 * Creates an infinite sequence of repeated applications
 * of the function fn over the x.
 *
 * Example:
 *  const plus1 = (x) => x + 1
 *  iterate(plus1, 0) //=> 0, 1, 2, 3, ...
 *
 * @param fn
 * @param x
 */
export default function* iterate<T = unknown>(fn: Function, x: T) {
  let last = x;

  while (true) {
    yield last
    last = fn(last);
  }
}