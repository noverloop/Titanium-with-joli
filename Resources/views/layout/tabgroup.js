(function(v) {
    // Create the 'Home' object if it doesn't already exist
    if(!v.tabGroup) {
        v.tabGroup = Titanium.UI.createTabGroup();
    }
 
    Ti.include("views/layouts/tabs.js");
    
    /*
     * tabs variable contains
     */
    for(i=0;i<tabs.length;i++) {
    	tc = tabs[i];
    	win = v.route(tc.route);
    	tc.window = win;
    	tabs[i] = Titanium.UI.createTab(tc);
    }
    
    v.tabGroup.tabs = tabs;
    
    
    //
	// create base UI tab and root window
	//
    var args = redux.fn.style('Window', { id: 'Home' });
	var win1 = Titanium.UI.createWindow(args);



	var tab1 = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Tab 1',
	    window:win1
	});
	
	var label1 = Titanium.UI.createLabel({
		color:'#999',
		text:'I am Window 1',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	
	win1.add(label1);
	
	//
	// create controls tab and root window
	//
	var win2 = Titanium.UI.createWindow({  
	    title:'Tab 2',
	    backgroundColor:'#fff'
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Tab 2',
	    window:win2
	});
	
	var label2 = Titanium.UI.createLabel({
		color:'#999',
		text:'I am Window 2',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	
	win2.add(label2);
	
	
	
	//
	//  add tabs
	//
	v.tabGroup.tabs = [tab1,tab2];  
	// v.tabGroup.addTab(tab2); 
}(Ti.App));
