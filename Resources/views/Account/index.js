(function($) {
	//
	// create base UI tab and root window
	//
	$.createAccountIndex = function() {
	    var args = redux.fn.style('Window', { id: 'Home' });
		var win1 = Titanium.UI.createWindow(args);
	
		var label1 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 1',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win1.add(label1);
		return win1;
	}
}(Ti.App.Views))