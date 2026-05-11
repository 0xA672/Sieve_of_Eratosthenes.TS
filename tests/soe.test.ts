import { sieveOfEratosthenes } from '../src/soe';

describe('sieveOfEratosthenes', () => {
  test('handles limit less than 2', () => {
    expect(sieveOfEratosthenes(-1)).toEqual([]);
    expect(sieveOfEratosthenes(0)).toEqual([]);
    expect(sieveOfEratosthenes(1)).toEqual([]);
  });

  test('returns primes up to 2', () => {
    expect(sieveOfEratosthenes(2)).toEqual([2]);
  });

  test('returns primes up to 10', () => {
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
  });

  test('returns correct count of primes up to 100', () => {
    // π(100) = 25
    expect(sieveOfEratosthenes(100)).toHaveLength(25);
  });

  test('last prime before 100 is 97', () => {
    const primes = sieveOfEratosthenes(100);
    expect(primes[primes.length - 1]).toBe(97);
  });
});
