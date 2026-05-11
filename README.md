# Sieve of Eratosthenes (TypeScript)

A readable, zero-dependency implementation of the **Sieve of Eratosthenes** in TypeScript.  
Generate all prime numbers up to a given limit with classic algorithmic efficiency.

## Installation

```bash
npm install sieve-of-eratosthenes-ts
```

## Usage

Import the function and call it with any positive integer limit:

```typescript
import { sieveOfEratosthenes } from 'sieve-of-eratosthenes-ts';

console.log(sieveOfEratosthenes(100));
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
```

If the full name feels too verbose, use a local import alias:

```typescript
import { sieveOfEratosthenes as sieve } from 'sieve-of-eratosthenes-ts';
console.log(sieve(100));
```

The package exports only one function, so you stay in full control over naming.

## Algorithm

The Sieve of Eratosthenes marks multiples of each prime starting from 2, leaving only primes behind.  
It runs in **O(n log log n)** time and uses **O(n)** space.

| Metric | Value |
| :--- | :--- |
| **Time complexity** | O(n log log n) |
| **Space complexity** | O(n) |
| **Limit support** | Up to ~10⁷–10⁸ in Node (memory‑bound) |

For larger limits, a *segmented sieve* is recommended.

## Testing

```bash
npm test
```

Tests cover edge cases (limit < 2) and verify correct prime sets up to 100.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) © 2026 0xA672

## See Also

For a high‑performance Rust equivalent, check out [`primal`](https://crates.io/crates/primal) – a state‑of‑the‑art prime sieve with estimation and factorisation, maintained by [Huon Wilson](https://github.com/huonw), former Rust core team member.
