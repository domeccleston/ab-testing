import { NextResponse } from 'next/server';
import { BUCKETS, getRandomBucket } from '../../lib/buckets'

const COOKIE_NAME = 'landing-ab';

export function middleware(req) {
  // Get the bucket cookie
  const bucket = req.cookies[COOKIE_NAME] || getRandomBucket(BUCKETS)
  const res = NextResponse.rewrite(`/testing/${bucket}`)

  // Add the bucket to cookies if it's not there
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, bucket)
  }

  return res;
}