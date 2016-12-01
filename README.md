# _tag.js
A lightweight tool for creating, and wrapping html elements. Create data-rich components and templates with ease. It is especially useful when repeating large data sets and was build for speed.

### Basic Usage
The _tag( ) function takes 3 parameters, for example _tag( element, content, attributes ). The content and attributes parameters are optional. The content parameter can be a string, number, variable, expession, array or even an other _tag ( more on that later ).
```javascript
var hello = _tag('h1', 'Hello World!');
document.body.appendChild( hello );
```
Output:
```html
<h1>Hello World!</h1>
```

You can attach any attribute you want. The attribute parameter takes an object. The {'key':'value'} pairs should be strings or variables. Here's an example:
```javascript
var button = _tag('button', 'Submit', {type:'submit', 'class':'jumbo-btn', 'data-id': productId } );
```
Output:
```html
<button type="submit" class="jumbo-btn" data-id="12345">Submit</button>
```

The content parameter can be set to null or an empty string "". Content  can be appened to it later.
```javascript
var dataTable = _tag('table', null, {'class':'data-table'} );
```

The style attibute is also valid, but as a best practice you should always use a class or id.
```javascript
var hello = _tag('h1', 'Hello World!', {'style':'font-family: "Arial", sans-serif; color:red'} );
```
### Nesting Tags
Below is an example of nesting _tags into other _tags. This uses 4 lines of code instead of 14 lines of javascript.
```javascript
var item1 = _tag('li','Orange', {'class':'no-bullet'});
var item2 = _tag('li','Apple', {'class':'no-bullet'});
var item3 = _tag('li','Banana', {'class':'no-bullet'});
var foods = _tag('ul', item1 + item2 + item3, {'id':'food-list'});
```
> Note: foods takes an expression as the second parameter for it's content.

### Nesting Tags with Strings
It is important to note that while you can nest multiple tags, mixing tags with strings requires a little extra work. The _tag( ) function returns a HTML object, so in order to concatenate it with a string, you need to convert the tag object to a string. Note in the example below, we are converting the tag object into a string using the outerHTML method.
```javascript
var name = _tag('strong', 'Jane Wilson' ); // returns a HTML element
var phone = '1-222-333-4444'; // returns a string
var contact = _tag('div', name.outerHTML +' '+ phone ); // convert name to a string using outerHTML
```
> Use outerHTML to convert tag objects to strings when concatenating with other strings.

### Creating and Nesting Mutiple Tags
You can also create multiple elements at the same time by passing in content as an array. You can then nest those elements into another _tag. Now instead of 14 lines of code, you have 2 lines. 
```javascript
var items = _tag('li',['Orange', 'Apple', 'Banana'], {'class':'no-bullet'});
var foods = _tag('ul', items, {'id':'food-list'});
```
Here is the output:
```html
<ul id="food-list">
   <li class="no-bullet">Orange</li>
   <li class="no-bullet">Apple</li>
   <li class="no-bullet">Banana</li>
</ul>
```
If you're still not conviced that _tag.js can save you time developing, look at the demo.html file for a powerful working example of what it is capable of.
