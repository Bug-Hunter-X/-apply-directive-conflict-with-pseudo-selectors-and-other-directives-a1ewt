```javascript
// Example showing unexpected behavior with Tailwind's @apply directive and pseudo-selectors

<button class="bg-blue-500 hover:bg-blue-700 @apply focus:outline-none">
  Click Me
</button>

/* Styles in the stylesheet */
.focus\:outline-none {
  outline: none;
}

/* Expected behavior: Outline is removed on focus.
Actual behavior: Outline remains */
```