/*
 * Not sure if this is necessary
 * The routes are internally used only and they map to views
 * It might be used to register before and after filters for a window creation
 * It will have use when you want to display views with runtime models?
 * let's leave it empty
 * 
 * Alright, routes is going to be a misnomer for this one.
 * Basically we want a route to lead to a view in Ti.App.views (or rather to its generating function) and we want to include a controller which will be loaded with the URL parameter
 * The router needs to instantiate the correct model and attach it to the window
 */

var routes = {
	
}
