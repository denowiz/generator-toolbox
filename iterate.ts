/**
 * Creates an infinite sequence of repeated applications
 * of the function fn over the x.
 *
 * Example:
 *  const succ = (x) => x + 1
 *  iterate(succ, 0) //=> 0, 1, 2, 3, ...
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