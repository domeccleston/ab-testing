export const BUCKETS = ['A', 'B'];

export function getRandomBucket(buckets) {
  const random = Math.floor(Math.random() * buckets.length);
  return buckets[random];
};
