ko.bindingHandlers.typing = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		var allBindings = allBindingsAccessor();
		var startedTypingCallback, stoppedTypingCallback, timeout;
		var typingBinding = allBindings.typing;
		
		startedTypingCallback = ko.unwrap(typingBinding.started); 
		stoppedTypingCallback = ko.unwrap(typingBinding.stopped);
		timeout = ko.unwrap(typingBinding.timeout);
		
		if(!startedTypingCallback || !stoppedTypingCallback)
		{ return; }
		
		if(!timeout)
		{ timeout = 3000; }
		
		var timeoutHandler;
		var currentlyTyping = false;
		
		var timeoutProxyCallback = function() {
			currentlyTyping = false;
			stoppedTypingCallback(element.value);
		};
		
		var onKeyPressedCallback = function() {
		
			if(!currentlyTyping) {
				currentlyTyping = true;
				startedTypingCallback(element.value);
			}
			
			if(timeoutHandler)
			{ clearTimeout(timeoutHandler); }
			
			timeoutHandler = setTimeout(timeoutProxyCallback, timeout);
		};
		
		element.onkeypress = onKeyPressedCallback;
    }
};