# October CheckList

A jQuery plugin to add a simple Checklist UI tool. Handy for multiple-select lists.

The plugin formats a HTML element (usually a div or span) as a clickable button. Once
clicked, a further element opens beneath the button containing a list of selectable
items. The user can then select one or more of the selectable items. Moving the mouse
out of the container element, or clicking on the button again, closes the containing
element.

This is an example of a simple CheckList button using all default styling:

![alt text](https://github.com/delahoc/checkList/blob/master/images/CheckList_4_button_defaut.jpg "Example CheckList")

## Usage

CheckList is a jQuery plugin, so is invoked like any other jQuery command.CheckList

In the page HTML, add an element that will become the checklist. A div or span are
the usual elements to use:

```html
<div id="scripts_checkList"></div>
```

With the element in the page, you then need to invoke the jQuery command on the element.
As jQuery relies on the element already existing, the Javascript that invokes the jQuery
command should be within a block of code that waits until the page is fully loaded.command

```javascript
<script>
		jQuery( function( $ ) {
			var button1 = $( "#scripts_checkList" ).checkList( {
			});
		}
</script>
```
The above code waits until the page is loaded, then invokes the new jQuery checkList command
on the element. No arguments have been passed to the checkList (including no items to display), 
so the button will be rendered with all default values, and no options to choose from. 

Obviously, the checkList is not much use if there is nothing to select. In the following example
we're passing a few default values, including a list of items that the user can select from:

```javascript
<script>
		jQuery( function( $ ) {
			var button1 = $( "#scripts_checkList" ).checkList( {
				buttonLabel: "Select required scripts ...",
				values: valueArray,
				labels: labelArray
			});
		}
</script>
```

The first option, `buttonLabel`, determine the text displayed on the button.

The second option, `values`, is a single-dimension array of values for each of the selectable
items. This will determine the values returned to the page of the selected items.

The third options, `labels`, is a single-dimension array of labels that will be displayed in
the selectable list. These labels will match one-on-one with the values, so the two arrays should
have the same number of elements. If an array is not provided for `labels`, the contents of the
`values` array will be used for both the values and the labels.


Button, now showing the new label:

![alt text](https://github.com/delahoc/checkList/blob/master/images/CheckList_1_button.jpg "Example CheckList Button")


Once clicked, the list element opens below the button showing the list of items the user can now select from:

![alt text](https://github.com/delahoc/checkList/blob/master/images/CheckList_2_open.jpg "Example CheckList")


The user can select one or more items from the list:

![alt text](https://github.com/delahoc/checkList/blob/master/images/CheckList_3_selections.jpg "Example CheckList")


## Options

There is a wide range of options that can be passed to the function.

**Button styling options**

`buttonWidth`
Sets the width of the button element. Any valid CSS text can be used.
Default:  "15em"

`buttonBorder`
Sets the border styling of the button element. Any valid CSS text can be used.
Default: "1px solid #666"

`buttonPadding`
Sets the padding styling of the button element. Any valid CSS text can be used.
Default: "0.3em 1em"

`buttonBorderRadius`
Sets the border radius styling of the button element. Any valid CSS text can be used.
Default: "3px"

`buttonLabel`
Sets the label text displayed in the button.
Default: "Select ..."

`buttonCleanColor`
Sets the foreground color of the button when the mouse pointer is NOT hovering over it.
Any valid CSS text can be used.
Default: "#666"

`buttonCleanBackground`
Sets the background color of the button when the mouse pointer is NOT hovering over it.
Any valid CSS text can be used.
Default: "#f6f6f6"

`buttonHoverColor`
Sets the foreground color of the button when the mouse pointer IS hovering over it.
Any valid CSS text can be used.
Default: "#000"

`buttonHoverBackground`
Sets the background color of the button when the mouse pointer IS hovering over it.
Any valid CSS text can be used.
Default: "#fffefc"

**Container styling options**

`containerColor`
Sets the foreground color of the container. Any valid CSS text can be used.
Default: "#000"

`containerBackground`
Sets the width of the container element. Any valid CSS text can be used.
Default: "#fff"

`containerWidth`
Sets the width of the container element. Any valid CSS text can be used.
Default: "16.5em"

`containerBorder`
Sets the border styling of the container element. Any valid CSS text can be used.
Default: "1px solid #666"

`containerPadding`
Sets the padding styling of the container element. Any valid CSS text can be used.
Default: "0.5em 0.2em"

`containerBorderRadius`
Sets the border radius styling of the container element. Any valid CSS text can be used.
Default: "3px"

`containerZIndex`
Sets the Z-Index of the container element. You shouldn't need to worry about this unless
you have other overlaying elements on the page, such as modal windows.
Default: "9"

`containerMaxHeight`
Sets the maximum height of the container element. Any valid CSS text can be used.
Default: "9em"

**Selector styling options**

`selectorCleanColor`
Sets the foreground color of the Selector individual elements when the mouse pointer is 
NOT hovering over it. Any valid CSS text can be used. (Background color is not set, so 
the container background color shows through.)
Default: "#555"

`selectorHoverColor`
Sets the foreground color of the Selector individual elements when the mouse pointer IS 
hovering over it. Any valid CSS text can be used.
Default: "#000",

`selectorHoverBackground`
Sets the background color of the Selector individual elements when the mouse pointer IS 
hovering over it. Any valid CSS text can be used.
Default: "#f0f0f0"

`selectorPadding`
Sets the padding styling of the Selector individual elements. Any valid CSS text can 
be used.
Default: "0.2em 0.7em"

`selectorSelectedColor`
Sets the foreground color of the Selector individual elements when they are selected. 
Any valid CSS text can be used.
Default: "#eee"

`selectorSelectedBackground`
Sets the background color of the Selector individual elements when they are selected. 
Any valid CSS text can be used.
Default: "#7090b0"

`selectorSelectedHoverColor`
Sets the foreground color of the Selector individual elements when they are selected and
the mouse IS hovering over it. Any valid CSS text can be used.
Default: "#fff"

`selectorSelectedHoverBackground`
Sets the background color of the Selector individual elements when they are selected and
the mouse IS hovering over it. Any valid CSS text can be used.
Default: "#86a6c0"

