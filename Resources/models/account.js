
models.accounts = new joli.model({
		table : 'Accounts',
		columns : {
			id : 'INTEGER PRIMARY KEY AUTOINCREMENT',
			firstName : 'TEXT',
			lastName : 'TEXT',
			email : 'TEXT',
		},
		objectMethods: {
			addChangeListener: function(obj) {
				if(!self.changeListeners) self.changeListeners = [];
				if(!_.include(self.changeListeners,obj)) self.changeListeners.push(obj);
			},
			
			fireStateChanged: function(){
				if(!self.changeListeners) { 
					self.changeListeners = [];
				}
				
				if(self.changeListeners.length > 0) {
					for(i=0;i< self.changeListeners.length;i++) {
						self.changeListeners[i].stateChanged(self);
					}
				}
			}
		}
	});
