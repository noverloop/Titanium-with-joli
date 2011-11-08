// This file sets up Ti.App.init()
/*
 * The goal is to load the joli models
 * Create a windowFactory
 * 
 * A decent implementation should support a simple settings singleton
 * 
 */

// load includes
var include_dir = "includes/"
var dfo = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + include_dir);
var files = dfo.getDirectoryListing();
for(var i = 0;  i < files.length; i++) {
		Ti.include("../" + include_dir + files[i]);
}

// load database config

Ti.include("database.js");


// load models
Ti.App.models = {};
var model_dir = "models/"
var dfo = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + model_dir);
var files = dfo.getDirectoryListing();
for(var i = 0;  i < files.length; i++) {
		Ti.include("../" + model_dir + files[i]);
}


Ti.App.start = function init() {
  inc('views/layout/tabgroup.js');
  // open tab group
  Ti.App.tabGroup.open();
};