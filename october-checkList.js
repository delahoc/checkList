//	Javascript for the admin side

jQuery( function( $ ) {
	
	// jQuery plugin to create a list of checkboxes in a modal
	$.fn.checkList = function( args ) {
		var myButton = this;
		var myContainer = null;
//		console.log( "checkList() started." );

		// Options and settings. Override these by passing arguments to the function
        var settings = $.extend({
            // These are the defaults for styling the button, container and selectors
			buttonId: "",
			buttonWidth: "15em",
			buttonBorder: "1px solid #666",
			buttonPadding: "0.3em 1em",
			buttonBorderRadius: "3px",
			buttonLabel: "Select ...",
			buttonCleanColor: "#666",
			buttonCleanBackground: "#f6f6f6",
			buttonHoverColor: "#000",
			buttonHoverBackground: "#fffefc",
			containerColor: "#000",
			containerWidth: "16.5em",
			containerBackground: "#fff",
			containerBorder: "1px solid #666",
			containerPadding: "0.5em 0.2em",
			containerBorderRadius: "3px",
			containerZIndex: "9",
			containerMaxHeight: "9em",
			selectorCleanColor: "#555",
			selectorHoverColor: "#000",
			selectorHoverBackground: "#f0f0f0",
			selectorPadding: "0.2em 0.7em",
			selectorSelectedColor: "#eee",
			selectorSelectedBackground: "#7090b0",
			selectorSelectedHoverColor: "#fff",
			selectorSelectedHoverBackground: "#86a6c0",
			// Alternatively, use classes 
			buttonCleanClass: "",
			buttonHoverClass: "",
			containerClass: "",
			selectorCleanClass: "",
			selectorHoverClass: "",
			selectorSelectedClass: "",
			// An array containing all of the values for all of the options. Matches Labels.
			values: [],
			// An array containing all of the labels for all of the options. Matches values. If empty, values is used.
			labels: [],
			// If the first (index 0) item is selected, this clears all other selections. true/false. (NOT YET USED)
			zeroClears: true
        }, args );
		
		// Add all the CSS rules to the document
		addCSSRules();
		
		// Style the passed element as the button
		jQuery( myButton ).addClass( "checkList-button" );
		// Place the label into the button
		myButton.html( settings.buttonLabel );
		// Add the click function to the button. Hide or Show the container as required.
		myButton.click( function() {
			if( jQuery( this.container ).is(":hidden") ) {
				jQuery( this.container ).show();
			} else {
				jQuery( this.container ).hide();
			}
		});
		settings.buttonId = myButton['0'].id;
		

		// Build the selector container and add all the selectors
		buildContainer();
		jQuery( myContainer ).mouseleave( function() {
			jQuery( myContainer ).hide();
		});
		myButton[0].container = myContainer;

		
		////
		// Support functions
		////
		
		// Build the container that holds the list of selectable items
		function buildContainer() {
			if( settings.values.length > 0 ) {
				myContainer = jQuery( "<div class='checkList-container' id='" + settings.buttonId + "_container' buttonId='" + settings.buttonId + "'></div>" );
				// add selectable elements
				var myIndex = 0;
				settings.values.forEach( function() {
					var selector = buildSelector( myIndex );
					myContainer.append( selector );
					myIndex++;
				});
				// Add the container to the document, immediately following the button
				myContainer.insertAfter( myButton );
				jQuery( myContainer ).hide();
				jQuery( myContainer ).css( "left", jQuery( myButton ).position().left );
				jQuery( ".checkList-tickbox" ).click( function( el ) {
					// We don't want to be able to select the checkbox separately
					el.preventDefault();		
				});
				jQuery( ".checkList-selector" ).unbind().click( function( el ) {
					// A selector has been clicked. Select or Deselect it as required
//					var selIndex = el.target.attributes.index.value;
					var selected = jQuery( el.target );
					var checkbox = jQuery( selected ).children( ".checkList-tickbox" );
					if( jQuery( selected).hasClass( "checkList-selected" ) ) {
						// Item is already selected. Deselect it
						jQuery( checkbox ).prop("checked", false );
						jQuery( selected ).removeClass( "checkList-selected" );
						jQuery( selected ).addClass( "checkList-Clean" );
					} else {
						// Item is not selected. Select it.
						jQuery( checkbox ).prop("checked", true );
						jQuery( selected ).addClass( "checkList-selected" );
						jQuery( selected ).removeClass( "checkList-Clean" );
					}
				});
			} else {
//				console.log( "No values to add." );
			}
		}

		// Create the selector element
		function buildSelector( myIndex ) {
			var mySelector = null;
			var myLabel = ( typeof settings.labels[ myIndex ] !== 'undefined') ? settings.labels[ myIndex ] : settings.values[ myIndex ];
			mySelector = jQuery( "<div class='checkList-selector checkList-Clean' containerId='" + settings.buttonId + "_container' buttonId='" + settings.buttonId + "' index='" + myIndex + "' value='" + settings.values[ myIndex ] + "'><input type='checkbox' class='checkList-tickbox' index='" + myIndex + "'>" + myLabel + "</div>" );
			return mySelector;
		}
						
		// Add all the required CSS rules to the document
		function addCSSRules() {
			addCSSRule( ".checkList-selected", {
				"color": settings.selectorSelectedColor,
				"background": settings.selectorSelectedBackground
			});
			addCSSRule( ".checkList-selected:hover", {
				"color": settings.selectorSelectedHoverColor,
				"background": settings.selectorSelectedHoverBackground
			});
			addCSSRule( ".checkList-button", {
				"color": settings.buttonCleanColor,
				"background": settings.buttonCleanBackground,
				"width": settings.buttonWidth,
				"cursor": "pointer",
				"display": "inline-block",
				"border": settings.buttonBorder,
				"border-radius": settings.buttonBorderRadius,
				"padding": settings.buttonPadding
			});
			addCSSRule( ".checkList-button:hover", {
				"color": settings.buttonHoverColor,
				"background-color": settings.buttonHoverBackground
			});
			addCSSRule( ".checkList-selector", {
				"padding": settings.selectorPadding,
				"cursor": "pointer"
			});
			addCSSRule( ".checkList-Clean:hover", {
				"color": settings.selectorCleanColor
			});
			addCSSRule( ".checkList-Clean:hover", {
				"color": settings.selectorHoverColor,
				"background": settings.selectorHoverBackground
			});
			addCSSRule( ".checkList-container", {
				"position": "absolute",
				"overflow-x": "hidden",
				"overflow-y": "auto",
				"max-height": settings.containerMaxHeight,
				"color": settings.containerColor,
				"min-width": settings.containerWidth,
				"background": settings.containerBackground,
				"border": settings.containerBorder,
				"padding": settings.containerPadding,
				"border-radius": settings.containerBorderRadius,
				"z-index": settings.containerZIndex
			});
			var ticked = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="5"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>';
			var unticked = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="5"/></svg>';	
			addCSSRule( ".checkList-tickbox", {
				"height": "1.5em",
				"width": "1.5em",
				"outline": "0",
				"cursor": "default",
				"border": "0",
				"-webkit-appearance": "none",
				"-moz-appearance": "none",
				"appearance": "none",
				"padding-right": "1em"
			});
			addCSSRule( ".checkList-tickbox:focus", {
				"outline": "none"
			});
			addCSSRule( ".checkList-tickbox:after", {
				"content": "url( " + unticked + " )"
			});
			addCSSRule( ".checkList-tickbox:checked:after", {
				"content": "url( " + ticked + " )"
			});
			addCSSRule( "input[type='checkbox']:focus", {
				"outline": "none",
				"outline-style": "none"
			});
			addCSSRule( "input[type='checkbox']", {
				"outline": "none",
				"outline-style": "none"
			});
		}
				
		// Add a new CSS rule to the document
		function addCSSRule( rule, css ) {
			css = JSON.stringify(css).replace(/"/g, "").replace(/,/g, ";");
			jQuery("<style>").prop("type", "text/css").html(rule + css).appendTo("head");
		}

		// Get an array of the values of the selected items
		this.getSelectionValues = function() {
			// Identify the container for this button
			var container = jQuery( this.prop( 'container') );
			var containerId = container['0'].id;
			var mySelector = "#" + containerId + " > .checkList-selected";
			var selected = jQuery( mySelector );
			var results = [];
			// Loop through the selectors, and add any selected ones to the results array
			jQuery( selected ).each( function() {
				results.push( this.attributes.value.value );
			});
			return results;
		}
		
		// Get an array of the indices (index numbers) of the selected items
		this.getSelectionIndices = function() {
			// Identify the container for this button
			var container = jQuery( this.prop( 'container') );
			var containerId = container['0'].id;
			var mySelector = "#" + containerId + " > .checkList-selected";
			var selected = jQuery( mySelector );
			var results = [];
			// Loop through the selectors, and add any selected ones to the results array
			jQuery( selected ).each( function() {
				results.push( this.attributes.index.value );
			});
			return results;
		}
		
		// Set selectors based on the content of a passed array
		// (Does not deselect selectors NOT included in the array.)
		this.setByValues = function( vals ) {
			// Identify the container for this button
			var container = jQuery( this.prop( 'container') );
			var containerId = container['0'].id;
			var mySelector = "#" + containerId + " > .checkList-selector";
			// Loop through the selectors; if the value exists in the array, select the selector
			jQuery( mySelector ).each( function( temp ) {
				if( jQuery.inArray( this.attributes.value.value, vals ) >= 0 ) {
					// The value of the selector exists in the array, so set it as selected
					jQuery( this ).addClass( "checkList-selected" );
					var checkbox = jQuery( this ).children( ".checkList-tickbox" );
					jQuery( checkbox ).prop("checked", true );
				}
			});
		}
		
		
		return this;

	}

});


