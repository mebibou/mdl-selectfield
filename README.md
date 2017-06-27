# mdl-selectfield
Material Design Lite selectfield component (https://github.com/google/material-design-lite)

[![Bower Version](https://img.shields.io/bower/v/mdl-selectfield.svg)](https://github.com/mebibou/mdl-selectfield)
[![NPM Version](https://img.shields.io/npm/v/mdl-selectfield.svg)](https://www.npmjs.com/package/mdl-selectfield)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/mebibou/mdl-selectfield/blob/master/LICENSE)

[![bitHound Overall Score](https://www.bithound.io/github/mebibou/mdl-selectfield/badges/score.svg)](https://www.bithound.io/github/mebibou/mdl-selectfield)
[![bitHound Dependencies](https://www.bithound.io/github/mebibou/mdl-selectfield/badges/dependencies.svg)](https://www.bithound.io/github/mebibou/mdl-selectfield/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/mebibou/mdl-selectfield/badges/devDependencies.svg)](https://www.bithound.io/github/mebibou/mdl-selectfield/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/mebibou/mdl-selectfield/badges/code.svg)](https://www.bithound.io/github/mebibou/mdl-selectfield)

> A custom implementation of a selectfield component for [Material Design Lite](https://github.com/google/material-design-lite)

## Live Example

Check out the [CodePen](http://codepen.io/mebibou/pen/pjEjOv)

## Install

Via bower:

````
bower install mdl-selectfield
````

Or via npm:

````
npm install mdl-selectfield
````

Then include in your html:

````
<link rel="stylesheet" href="./bower_components/mdl-selectfield/dist/mdl-selectfield.min.css">
...
<script src="./bower_components/mdl-selectfield/dist/mdl-selectfield.min.js"></script>
````

Alternatively you may import the following published scss files in your build pipeline for extending the variables.
 
````
dist/scss/selectfield/_variables.scss
                      _selectfield.scss
````

OR just 
````
dist/scss/selectfield/mdl-selectfield.scss
````

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.

### To include a MDL **select field** component:

&nbsp;1. Code a `<div>` element to hold the text field.
```html
<div>
...
</div>
```
&nbsp;2. Inside the div, code an `<select>` element, add the options and add an `id` attribute of your choice.
```html
<div>
  <select id="gender">
    <option value=""></option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>
```
&nbsp;3. Also inside the div, after the select field, code a `<label>` element with a `for` attribute whose value matches the `select` element's `id` value, and a short string to be used as the field's placeholder text.
```html
<div>
  <select id="gender">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
  </select>
  <label for="gender">User gender</label>
</div>
```
&nbsp;4. Add one or more MDL classes, separated by spaces, to the div container, select field, select label, and error message using the `class` attribute.
```html
<div class="mdl-selectfield mdl-js-selectfield">
  <select id="gender" class="mdl-selectfield__select">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
  </select>
  <label class="mdl-selectfield__label" for="gender">User gender</label>
  <span class="mdl-selectfield__error">Select a value</span>
</div>
```
The select field component is ready for use.

#### Examples

Select field with a standard label.
```html
<div class="mdl-selectfield mdl-js-selectfield">
  <select id="gender" class="mdl-selectfield__select">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
  </select>
  <label class="mdl-selectfield__label" for="gender">User gender</label>
  <span class="mdl-selectfield__error">Select a value</span>
</div>
```

Select field with a floating label.
```html
<div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
  <select id="gender" class="mdl-selectfield__select">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
  </select>
  <label class="mdl-selectfield__label" for="gender">User gender</label>
  <span class="mdl-selectfield__error">Select a value</span>
</div>
```

Select field with a standard label, and error message.
```html
<div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
  <select id="gender" class="mdl-selectfield__select">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
  </select>
  <label class="mdl-selectfield__label" for="gender">User gender</label>
  <span class="mdl-textfield__error">Select a value</span>
</div>
```

Select field with a floating label and icon.
```html
<div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
  <select id="gender" class="mdl-selectfield__select">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
  </select>
  <div class="mdl-selectfield__icon"><i class="material-icons">arrow_drop_down</i></div>
  <label class="mdl-selectfield__label" for="gender">User gender</label>
</div>
```
