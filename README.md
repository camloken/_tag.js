# htag.js
A lightweight, shorthand tool for creating, and wrapping multiple html elements. Powerful and flexible, htag.js let's you create data-rich components and templates with ease. It is especially useful when repeating large data sets and was build with speed in mind.

### Basic Usage
The htag() function takes 3 arguments -- htag( htmlElement, content, attributes ). Arguments 2 and 3 are optional.
```sh
var hello = htag('h1', 'Hello World!');
document.body.appendChild(hello);
```
