

// Create the 'Home' object if it doesn't already exist
if(!Ti.App.tabGroup) {
    Ti.App.tabGroup = Titanium.UI.createTabGroup();
}

Ti.include("/views/layout/tabs.js");

/*
 * tabs variable contains
 */
var nTabs = [];
for(i=0;i<tabs.length;i++) {
	tc = tabs[i];
	win = views[tc.view](tc.params);
	tc.window = win;
	delete tc.params;
	delete tc.view; 
	Ti.App.tabGroup.addTab(Titanium.UI.createTab(tc));
}

