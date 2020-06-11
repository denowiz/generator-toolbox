/**
 * Creates an infinite sequence of x.
 *
 * Example:
 *  repeat(1) //=> 1, 1, 1, 1, 1, ...
 *
 * @param x
 */
export default function* repeat(x: unknown) {
  while (true) {
    yield x;
  }
}