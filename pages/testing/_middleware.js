import { NextResponse } from 'next/server';
import { BUCKETS, getRandomBucket } from '../../lib/buckets'

const COOKIE_NAME = 'landing-ab';

export function middleware(req) {
  let bucket;

  const urlParts = req.url.split('/');
  const path = urlParts[urlParts.length - 1];
  const hasUrlVariant = BUCKETS.includes(path.toUpperCase());

  if (req.cookies[COOKIE_NAME]) {
    bucket = req.cookies[COOKIE_NAME];
  } else if (hasUrlVariant) {
    bucket = path.toUpperCase();
  } else {
    bucket = getRandomBucket(BUCKETS);
  }

  const res = NextResponse.rewrite(`/testing/${bucket}`)

  // Add the bucket to cookies if it's not there
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, bucket)
  }

  return res;
}