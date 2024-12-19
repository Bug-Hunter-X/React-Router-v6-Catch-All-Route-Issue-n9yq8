# React Router v6 Catch-All Route Issue

This repository demonstrates a subtle issue with the catch-all route ("/*") in React Router v6 when nested within other routes.  The catch-all route unexpectedly matches even when a more specific route should take precedence.

## Problem Description

The problem occurs in the `App.js` file where nested routes conflict, causing the not found component to render rather than the intended component.  This behavior is inconsistent with expectations and can be difficult to debug.

## Solution

The solution is provided in `AppSolution.js`.  The issue is resolved by using the `useLocation` hook to check the current path and only rendering the not found component if no other routes match. This ensures proper routing for all cases.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the unexpected behavior by navigating to different routes.

## License

MIT