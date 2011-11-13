(function($) {
	$.createHomeIndex = function() {
		var win2 = Titanium.UI.createWindow({  
		    title:'Tab 2',
		    backgroundColor:'#fff'
		});
                var label2 = new Label({id: ""});	

		var label2 = Titanium.UI.createLabel({
                        id: '',
			color:'#999',
			text:'I am Window 2',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win2.add(label2);
		return win2;
	}
}(Ti.App.views))
