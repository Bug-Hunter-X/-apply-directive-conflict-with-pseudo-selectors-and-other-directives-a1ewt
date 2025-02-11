# Tailwind CSS @apply Directive Conflict with Pseudo-selectors

This repository demonstrates a peculiar issue with Tailwind CSS's `@apply` directive when it's used alongside pseudo-selectors like `:focus`, `:hover`, etc. in conjunction with other directives. 

## Issue Description

The primary problem is that when we attempt to apply a class containing a pseudo-selector (e.g., `focus\:outline-none`) via `@apply` alongside other classes (in this case, styling the background on hover), the pseudo-selector class's behavior appears to be ignored.  This means the expected styling doesn't apply in the correct state. 

## Reproduction

1. Clone this repository.
2. Run a development server (e.g., using Vite or Webpack). 
3. Observe the button element in the browser.  The hover effect should work correctly. However, focusing the button will reveal that the outline is not removed, despite the `focus\:outline-none` class being applied via `@apply`. 

## Workaround

The solution is to apply the pseudo-selector class directly, not through the `@apply` directive. Note, this might not be suitable for complex scenarios needing `@apply` for maintainability reasons.

## Potential Causes

It is likely an issue related to the order of CSS property evaluation or the way Tailwind processes `@apply` with pseudo-selectors.  Further investigation is needed to identify the root cause.