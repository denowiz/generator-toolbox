/**
 * Take the **n** firsts elements of the given generator or generator function.
 *
 * @param n
 * @param g
 */
export default function* take<T = unknown>(n: number, g: GeneratorFunction | Generator) {
  const iter = typeof g === 'function' ? g() : g;
  let counter = Math.abs(n);

  while (counter > 0) {
    const { value, done } = iter.next();
    if (done) return;
    yield value;
    counter -= 1;
  }
}