export function zip<T, U>(a: T[], b: U[]) {
  const result: (T | U)[] = [];

  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      result.push(a[i], b[i]);
    }

    return result;
  }

  if (a.length < b.length) {
    for (let i = 0; i < a.length; i++) {
      result.push(a[i], b[i]);
    }

    return [...result, ...b.slice(a.length)];
  }

  if (b.length < a.length) {
    for (let i = 0; i < b.length; i++) {
      result.push(a[i], b[i]);
    }

    return [...result, ...a.slice(b.length)];
  }
}

// solution
// export function zip<A, B>(a: A[], b: B[]) {
// 	const result: (A | B)[] = [];
// 	let i: number;

// 	for (i = 0; i < Math.min(a.length, b.length); i += 1) {
// 		result.push(a[i]);
// 		result.push(b[i]);
// 	}

// 	for (const remaining of [a, b]) {
// 		for (; i < remaining.length; i += 1) {
// 			result.push(remaining[i]);
// 		}
// 	}

// 	return result;
// }
