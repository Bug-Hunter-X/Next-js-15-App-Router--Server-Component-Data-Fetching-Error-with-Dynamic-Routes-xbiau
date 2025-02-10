# Next.js 15 App Router: Server Component Data Fetching Issue

This repository demonstrates a potential issue in Next.js 15's App Router when fetching data within server components using dynamic routes. The problem arises when a route parameter isn't fully resolved before a fetch call is made, leading to errors.

## Problem Description

When using dynamic routes in the `app` directory, server components may encounter an error if they attempt to make an API call that depends on a route parameter before that parameter is properly resolved.  This can lead to unexpected behavior or crashes.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a dynamic route (e.g., `/products/1`). You might see an error in your console.

## Solution

The solution involves ensuring that the dynamic route parameter is consistently available before making the fetch request.  This can be done by carefully structuring the server component's asynchronous function or by leveraging other Next.js features such as `redirect` in case the parameter is missing.