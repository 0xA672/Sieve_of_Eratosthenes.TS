export function sieveOfEratosthenes(limit: number): number[] {
  if (limit < 2) return []

  const isPrime = new Array(limit + 1).fill(true)
  isPrime[0] = isPrime[1] = false

  for (let p = 2; p * p <= limit; p++) {
    if (isPrime[p]) {
      for (let multiple = p * p; multiple <= limit; multiple += p) {
        isPrime[multiple] = false
      }
    }
  }

  const primes: number[] = []
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) primes.push(i)
  }
  return primes
}
