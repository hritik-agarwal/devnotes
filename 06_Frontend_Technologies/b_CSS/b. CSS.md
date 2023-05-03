# CSS

### Using CSS

CSS fullform is Cascading Style Sheet. It can be applied in 3 ways.

1. Inline style
2. Style block
3. StyleSheets

### Selectors

There are 4 types of selectors

1. Universal Selectors (\* => used to apply css to all the elements)
2. Element Selectors (body, h1, p etc => applies css to specific element)
3. Class Selectors (.className => They can be applied to multiple elements)
4. Id Selectors (#idName => They can be applied to only single elements)

Specificity: ID > Class > Element > Universal
For selectors with same specificity, the one written later is applied.

There are several ways to combine multiple selectors

1. Seperated by comma (It applies the css to all the selectors)
2. Seperated by space (It search for nested order of elements and apply to css to last element in the order)

### Inheritence

CSS rules for typography and color are inherited to childrent elements except in the case of form elements (button, input, textarea, select etc).. they don't inherit properties.

### Color

There are 4 ways to apply colors

1. Name (e.g. blue, red)
2. Hexcode (e.g. #101010)
3. RGB/RGBA values (red, green & blue => e.g. rgb(255,22,45), rgba(93,23,4,0.5))
4. HSL values (hue, saturation & lightness => e.g. hsl(224, 73%, 49%))

### CSS Units

Commonly used CSS units are

1. pixels (px)
   px = 1/96th of an inch and by default the font-size is 16px in browsers
2. percentage (50%)
   It is relative to either parent property or viewport height and width (vw, vh)
3. root element (rem)
   It refers to the font size of the root element which is set by browser (default 16px)
4. element (em)
   When setting current element's font-size, it refers to parent's font-size but setting properties like width & height, it refers to current element's font-size.
5. Viewport height and width (vw, vh, vmin, vmax)
   It refers to the screen width and height.

### Text Typography

```css
.word {
  font-size: 2rem;
  font-style: oblique;
  font-weight: bolder;
  font-family: "Indie Flower", cursive;

  text-indent: 2em;
  text-align: center; /* other options - left, right */
  text-decoration: underline; /* other options - overline, line-through */
  text-transform: capitalize; /* other options - uppercase, lowercase; */

  line-height: 1.5;
  word-spacing: 1rem;
  letter-spacing: 0.2em;
}
```

### Styling Links

```css
a {
  font-size: 3rem;
  color: pink;
  cursor: pointer;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
}
a:active {
  color: green;
}
```

### CSS Display

1. Block => They take available width and are stacked on top of each other.
2. Inline => They take space needed for content and their height and width can not be modified.
3. Inline-block => They take space needed for content but block properties like height and width can be applied to them and also they respect padding and margin of surrounding elements.
