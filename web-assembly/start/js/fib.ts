type fib = (n: number) => number
interface obj {
  fib: fib
}

export function f(x: number): number {
  if (x === 1 || x === 2) {
      return 1;
  }
  return f(x - 1) + f(x - 2)
}

// export let time1 = new Date(1546826994678);

// export const obj1 = obj2

