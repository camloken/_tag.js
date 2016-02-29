# htag.js
A lightweight, shorthand tool for creating, and wrapping multiple html elements. Powerful and flexible, htag.js let's you create data-rich components and templates with ease. It is especially useful when repeating large data sets and was build with speed in mind.

### Basic Usage
The htag( ) function takes 3 arguments -- htag( htmlElement, content, attributes ). Arguments 2 and 3 are optional. The content argument can be a string, number, variable, expession, array or even an other htag (more on that later).
```javascript
var hello = htag('h1', 'Hello World!');
document.body.appendChild( hello );

// DO NOT USE: document.body.innerHTML = hello; -- ALWAYS USE: appendChild()
```
You can attach any attribute you want. The attribute argument takes an object and 'key':'value' pairs should be strings or variables. Here's an example:
```javascript
var button = htag('button', 'Submit', {'class':'jumbo-btn', 'data-id': productId } );

// Note: data-id takes a variable.
// The key 'data-id' must be a string as it contains a hyphen.
```
The style attibute is also valid, but as a best practice you should use a class or id.
```javascript
var hello = htag('h1', 'Hello World!', {'style':'font-family: "Arial", sans-serif; color:red'} );
document.body.appendChild( hello );
```
### Nesting
Below is an example of nesting htags into other htags. This uses 4 lines of code instead of 14 lines of javascript.
```javascript
var item1 = tag('li','orange', {'class':'no-bullet'});
var item2 = tag('li','apple', {'class':'no-bullet'});
var item3 = tag('li','banana', {'class':'no-bullet'});
var foods = tag('li', item1 + item2 + item3, {'id':'food-list'});

// Note foods takes an expression as the second argument for it's content.
```
