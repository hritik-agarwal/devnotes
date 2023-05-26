```css
/* 
Topics
1. Basics:            CSS Rule, Selectors, Colors, Sizes
2. Elements:          Typography, Links, Lists, Table, Images
3. Concepts:          Box Model, Display, Position, Floats
4. Layout:            Columns, Flexbox, Grid Layout, Media Quries
5. Advanced:          Pseudo, Variable, Functions, Animations
*/

/* CSS Rule */
selector {
  property: propertyValue; /* declaration */
}

/* Selectors */
/* 
  1. Specificity -> id > class > element > * 
  2. If 2 selectors have same specificit then the one applied later will be applied.
  3. To increase specificity regardless of selector, add !important after property value.
*/
* {
  color: "white"; /*  * selector - targets all the html tags */
}
head {
  color: "white"; /*  element selector - targets all the html tag containig the element */
}
.className {
  color: "white"; /*  class selector - can be applied to multiple tags */
}
#idName {
  color: "white"; /*  id selector - can only be applied to one tag */
}
a h1 {
  color: "white"; /*  nested element selector - here every h1 inside a link tag is targeted */
}
a,
h1 {
  color: "white"; /*  multiple element selector - here all link and h1 tags are targeted  */
}
a[href="google.com"] {
  color: "white"; /* selecting element based on its attribute */
}

/* Colors */
#color {
  color: red; /* color name */
  color: #343421; /* hex code */
  color: #123; /* hex code - short format == #112233 */
  color: rgb(24, 35, 21); /* rgb (reg,green,blue) values */
  color: rgba(24, 35, 21, 0.5); /* rgb values with opacity */
  color: hsl(107, 57%, 37%); /* hsl (hue,saturation,lightness) values */
  color: hsla(107, 57%, 37%, 0.5); /* hsl values with opacity */
}

/* Sizes */
#size {
  /* Absolute Sizes */
  width: 24px;
  /* Relative Sizes */
  width: 1rem; /* rem -> root element font-size (default-16px) */
  width: 2em; /* em -> current element font-size (is rem when used for font-size) */
  width: 50%; /* %age -> refers to parent's corresponding propertyt */
  width: 100vw; /* vw -> refers to viewport width (vh for viewport height) */
  width: 100ch; /* ch -> refers to character's width */
  width: auto; /* auto -> depends on value of other properties */
}

/* Typography */
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"); /* Custom FontFamily*/
#word {
  font-size: 20px;
  font-weight: 600;
  font-family: "Indie Flower", cursive; /* others - serif, sans-serif, cursive, fantasy etc */
  font-style: italic;
  text-align: center;
  text-shadow: 5px 5px 1rem red; /* offset-x | offset-y | blur-radius | color */
  text-indent: 2rem;
  text-decoration: underline; /* others - strikethrough, overline etc */
  text-transform: capitalize; /* others - lowercase, uppercase etc */
  line-height: 1.5px;
  word-spacing: 1rem;
  letter-spacing: 2px;
}

/* Links */
a {
  color: blue;
  cursor: pointer; /*others - not-allowed, grab, scroll etc*/
  text-decoration: none;
}
a:visited {
  color: purple;
}
a:hover,
a:focus,
a:active {
  color: lightblue;
}

/* Lists */
ul,
ol,
dl {
  list-style: none inside url("facicon.png"); /* type | position | image */
  list-style-type: none; /* others - disc, circle, roman etc*/
  list-style-position: inside;
  list-style-image: url("facicon.png");
}
::marker {
  color: black;
  content: "=>";
}

/* Table */
table {
  border-collapse: collapse;
}

/* Images */
#image {
  background-image: url("./facicon.png"), linear-gradient(to left, green, red);
  background-size: cover, cover;
  background-position: top right, center;
  background-repeat: no-repeat, repeat-x;
  /* To set background image to foreground text */
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

/* Box Model */
#box {
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 2px solid red;
  margin: 10px;
  outline: 1px solid green;
  outline-offset: 2px;
  /* Width and Height Variants */
  width: 10px;
  min-width: 10px;
  max-width: 10px;
  /* Margin and Padding Variants */
  margin: top-left-right-bottom;
  margin: top-bottom left-right;
  margin: top left-right bottom;
  margin: top left bottom right;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  /* Border Variants */
  border: width style color;
  border-radius: 50px; /* To add roundness to box */
  border-top-color: #123; /* Similar for left, bottom and right borders */
  border-top-width: 10px;
  border-top-style: dashed;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Display */
#display {
  display: none; /* Removes element from DOM */
  display: block; /* These elements takes all the width available to them and push next item to below them. */
  display: inline; /* These elements takes only the width required for their content (their width/height can't be changed) & don't interfere with items around them. */
  display: inline-block; /* These elements takes only width required for their content (but their width/height can be changed) & they take into account surrounding items. */
  display: flex; /* Convers box to follow flex layout */
  display: grid; /* Convers box to follow grid layout. */
  display: flow-root; /* Allows box to take into account any float element inside it. */
}

/* Floats */
#floatItemContainer {
  display: flow-root;
}
#floatItem {
  float: left; /* Used to wrap content around float item */
}
#floatItemNoEffect {
  clear: both;
}

/* Position */
#position {
  position: static; /* normal flow of content */
  position: absolute; /* position acc. to previous relative element (or root in case no relative element) */
  position: relative; /* position acc. to parent's position */
  position: sticky; /* it sticks to a position and moves when its container or other sticky element catches up */
  position: fixed; /* position acc. to root element, the element is fixed on screen & don't move */
}
#positionItem {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: inherit;
  z-index: 1; /* to change which element appears above other element */
}

/* Columns */
#columnsContainer {
  column-count: 4;
  column-width: 100px;
  columns: width count;
  column-gap: 10px;
  column-rule: width style color;
}
#columnsItem {
  break-inside: avoid; /* prevent splitting of item in different columns */
  break-before: column; /* forces a column break before it */
}
#allColumnsItem {
  column-span: all; /* the content is spanned across all the columns */
}
#noWrap {
  white-space: nowrap; /* prevent splitting content in different line */
}

/* Flexbox */
#flexContainer {
  display: flex;
  flex-flow: flex-direction flex-wrap;
  flex-direction: row;
  flex-wrap: wrap; /* wrap content when screen sizes decreases */
  gap: 1rem; /* gap between items */
  justify-content: center; /* items positioning along the flex-direction */
  align-items: center; /* items positioning across the flex-direction */
  align-content: center; /* Aligns flex container's lines within the flex container when there is extra space in the cross-axis */
}
#flexItem {
  align-self: center;
  flex: growth shrink basis;
  flex-grow: 2; /* determinses growth rate of flex items when box size increases */
  flex-shrink: 2; /* determinses shrink rate of flex items when box size decreases */
  flex-basis: auto; /* sets item width */
  order: 2; /* determines order of items in flex box */
}

/* Grid Layout */
#gridContainer {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr; /* explicit rows numbers & size */
  grid-template-columns: 1fr 2fr 1fr; /* explicit columns numbers & size */
  grid-auto-rows: 100px; /* implicit rows size */
  grid-auto-columns: 100px; /* implicit columns size */
  row-gap: 1em; /* gap between rows */
  column-gap: 1em; /* gap between columns */
}
#gridItem {
  display: grid;
  place-content: center center; /* align content to center */
  grid-row: 1 / 3; /* span from row 1 to 3 */
  grid-column: 1 / 3; /* span from column 1 to 3 */
}

/* Media Quries */
/*
  Syntax:
  @media media_type and (condition: breakpoint) {
    // css rules
  }
  Examples of (condition: breakpoint) => (min-width: 481px), (orientation: landscape), (min-aspect-ration: 16/9)
  Common Breakpoints
  < 481px   : Mobile Devices
  >= 481px  : iPads, Tablets
  >= 769px  : Small screens, laptops
  >= 1025px : Desktops, Large screens
  >= 1201px : Extra large screen, TV
*/
@media screen and (min-width: 481px) {
  body {
    background-color: whitesmoke;
  }
}
@media screen and (min-width: 481px) and (orientation: landscape) {
  body {
    background-color: gold;
  }
}

/* Pseudo Classes & Pseudo Elements */
/*
  Pseudo classes denotes specific states of an element such as focus, active, hover etc.
  Pseudo elements however refers to elements themselves.
  Eg. Pseudo classes => a:hover, a:visited etc
  Eg. Pseudo elements => ::marker, p::after, p::first-letter etc
*/
#listItem:nth-child(2) {
  color: blue;
}
#text::after {
  content: "Hello";
}

/* Variables */
:root {
  --BG_COLOR: rgb(197, 218, 218);
  --HEADING_SIZE: 24px;
}

body {
  background-color: var(--BG_COLOR);
  font-size: max(12px, var(--HEADING_SIZE));
}

/* Functions */
/*
  In css, there are various functions such as 
  1. url() -> to load an image
  2. var() -> to load a variable 
  3. min(), max(), minmax(), clamp() -> to choose min/max value
  4. attr() -> to load an attribute value
  5. calc() -> to do math operation on values
*/
#item {
  width: calc(50vw - 10px);
  font-size: clamp(2.75rem, 3vh, 3.5rem);
  filter: brightness(150%);
}

/* Animations */
/*
  There are 3 operations in animations
  1. transform: Using it we can translate, rotate, scale and skew any element
  2. transition: Using this we can modify properites given some duration
  3. animation: Using it we can do animations
*/
#box {
  /* using percentage in translate uses width/height of box */
  transform: translateX(50%) rotateY(30deg) skew(10deg) scale(1.2);
  background-color: blue;
}
#box:hover {
  background-color: red;
  transform: rotate(360deg);
  transition: all 2s ease 0.1s; /* property | duration | timing-function | delay */
  transition-property: background-color, transform;
  transition-duration: 1s, 2s;
  transition-delay: 0.2s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
#animatedBox {
  animation-name: slide;
  animation-duration: 3s;
  animation-delay: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation: slide 3s 1s ease-in-out 3 alternate forwards;
}
@keyframes slide {
  0% {
    transform: translateX(0) rotate(0);
  }
  33% {
    transform: translateX(200px) rotate(180deg);
  }
  66% {
    transform: translateX(-200px) rotate(-180deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
}

/* Miscellaneous */
/* 
  1. Form elements don't inherit css properties from root so we have to manually inherit it.
  2. Online tools - 
     a. CSS specificity checker: https://specificity.keegan.st/
     b. Color contrast checker: https://coolors.co/contrast-checker/112a46-acc8e5
  3. Use chrome developer tools to debug css issues.
*/
```