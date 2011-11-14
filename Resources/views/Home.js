(function($) {
	$['Home'] = function() {
		var args = redux.fn.style('Window', { id: 'Home' });
		var win = Titanium.UI.createWindow(args);
                //var label2 = new Label({id: ""});	

		var label2 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 1',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win.add(label2);
		return win;
	}
}(views))
