# October CheckList

A jQuery plugin to add a simple Checklist UI tool. Handy for multiple-select lists.

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

