// This file sets up Ti.App.init()
/*
 * The goal is to load the joli models
 * Create a windowFactory
 * 
 * A decent implementation should support a simple settings singleton
 * 
 */

// load includes
// Simple problem: Titanium does not include files which are not referenced.
// Unless I can disable this behaviour, the existing approach yields no benefits on top of what is out there.

var include_dir = "includes/";
Ti.include("/includes/redux.js");
inc("/includes/joli.js");
includeRJSSGlobal("/views/layout/common.rjss");

// load database config
Ti.include("database.js");


// load models
var models = {};
inc("/models/account.js");

Ti.App.models = models;
// models have been setup. initialize the database
joli.models.initialize();


// load view factory methods
var views = {};
inc("/views/Account.js");
inc("/views/Home.js");
Ti.App.views = views;
// Load tab config
inc("/lib/tabgroup.js");

Ti.App.start = function init() {
  
  // open tab group
  Ti.App.tabGroup.open();
};
