# htag.js
A lightweight, shorthand tool for creating, and wrapping multiple html elements. Powerful and flexible, htag.js let's you create data-rich components and templates with ease. It is especially useful when repeating large data sets and was build with speed in mind.

### Basic Usage
The htag() function takes 3 arguments -- htag( htmlElement, content, attributes ). Arguments 2 and 3 are optional. The content argument can be a string, number, variable, expession, array or even an other htag (more on that later).
```javascript
var hello = htag('h1', 'Hello World!');
document.body.appendChild( hello );

// DO NOT USE: document.body.innerHTML = hello; -- ALWAYS USE: appendChild()
```
You can attach any attribute you want. The attribute argument takes an object and 'key':'values' should be strings or variables. Here's an example:
```javascript
var button = htag('button', 'Submit', {'class':'jumbo-btn', 'data-id': productId } );

// Note: data-id takes a variable.
// The key 'data-id' must be a string as it contains a hyphen.
```
The style attibute is also valid:
```javascript
var hello = htag('h1', 'Hello World!', {'style':'font-family: "Arial", sans-serif; color:red'} );
document.body.appendChild( hello );
```
