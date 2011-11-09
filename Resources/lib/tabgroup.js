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
    
    
	

	
	
}(Ti.App));
