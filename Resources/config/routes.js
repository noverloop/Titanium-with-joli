/*
 * basic idea: use view creation method and pass the other values as parameters.
 *
 */

var routes = {
   "Account/{id}": {
       "view" : "createAccountShow",
       "model": "Account",
       "action": "Show",
       "controller": "AccountShow",
       "id": "{id}"
  },

  "Home": {
       "view": "createHomeIndex",
       "model": "Home",
       "action": "index",
  }  
}
