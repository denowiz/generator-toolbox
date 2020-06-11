/**
 * Creates an infinite sequence of the circular elements
 * of the provided array.
 *
 * Example:
 *  cycle([0, 1, 2]) //=> 0, 1, 2, 0, 1, 2, 0, 1, ...
 *
 * @param arr
 */
export default function* cycle(arr: unknown[]) {
  let index = 0;

  while (true) {
    yield arr[index];
    if (index === arr.length -1)
      index = 0;
    else
      index += 1;
  }
}