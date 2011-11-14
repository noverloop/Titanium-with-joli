
views['Accounts'] = function(params) {
	    var args = redux.fn.style('Window', { id: 'Account' });
		var win = Titanium.UI.createWindow(args);
		win.addEventListener("focus", function() {
			var data = [];
			var accounts = Ti.App.models.accounts.all();
			for(i=0;i<accounts.length;i++) {
				lrow = Titanium.UI.createTableViewRow();
				lifetimeLabel = Titanium.UI.createLabel({
					text: "" + accounts[i].firstName,
					font: {fontSize:16,fontWeight:'bold'},
					color:'#888',
					width: 200,
					textAlign:'left',
					left:30
				});
				lrow.origin = accounts[i];
				lrow.hasChild=true;
				lrow.add(lifetimeLabel);
				lrow.addEventListener('click',function(e){
					Ti.App.tabGroup.activeTab.open(Ti.App.views['AccountShow']({ 'id': e.rowData.origin.id}),{
						animated : true
					});
				})
				data.push(lrow);
			}
			// populate tableview from database
			tv = Titanium.UI.createTableView({
				data: data
			});
			win.add(tv);
		});
		return win;
};

//
// create base UI tab and root window
//
views['AccountShow'] = function(params) {
	    var args = redux.fn.style('Window', { className: 'Account' });

		var win = Titanium.UI.createWindow(args);
	
		var label1 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 3 with id:' + params['id'],
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win.add(label1);
		return win;
};

//
// create base UI tab and root window
//
views['AccountNew'] = function(params) {
	    includeRJSS("/views/layout/AccountNew.rjss");
	    var args = redux.fn.style('Window', { id:'NewAccount', className: 'Account' });
		var win = Titanium.UI.createWindow(args);
		var label1 = new Label({id: "firstName"});
		var fnTextField = new TextField({id: "firstNameField"});
		
		var fnButton = new Button({ id: "createButton"});
		
		win.addEventListener("open", function() {
			Ti.API.debug("tabGroup: " + Ti.App.tabGroup.activeTab);
		    fnButton.addEventListener('click', function(e) {
				m = Ti.App.models.accounts.newRecord({firstName: fnTextField.value });
				m.save();
				Ti.App.tabGroup.setActiveTab(1);
			});
		});
		
		win.add(label1);
		win.add(fnTextField);
		win.add(fnButton);
		return win;
};


