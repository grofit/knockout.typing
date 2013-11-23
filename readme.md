# Knockout.Typing

A simple binding for knockout 2.3+ to allow you to check if a user is typing or not in an element.

## Installing

Add knockout-2.3.js to your project, then knockout.typing.js..

## Example

A simple example of checking when a user has started and stopped typing:
```
<input type="text" id="some-input-element" data-bind="typing: { started: onStartedTyping, stopped: onStoppedTyping }" /> 
<script>
	var onStartedTyping = function(inputtedText) {
		// Do something with text
	}
	
	var onStoppedTyping = function(inputtedText) {
		// Do something with the text
	}
</script>
```

Another example with a custom timeout
```
<input id="some-input-element" data-bind="typing: { started: onStartedTyping, stopped: onStoppedTyping, timeout: 5000 }" />
```

As shown above you can hook into any of the file loading events and get access to the data to display things like progress bars, and custom file filters, which although the accepts attribute should enforce this for you but does not currently work in all browsers. So in this case you can constrain loaded files and just ignore ones that dont match the pattern. Finally it is loading the data as a binary string in the above example, however this can be converted to use other supported types.

The available options for this binding are:

* **started** - The callback for when typing begins
* **stopped** - The callback for when typing ends
* **timeout** - The amount of time to wait for a user to stop tippy tappying before declaring the typing finished (default is: 3000 milliseconds)

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.typing/master/example.html)