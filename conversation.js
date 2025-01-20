exec = require('cordova/exec');
var conversations = {
  open: function(callTo,token,succ,fail) {
	//mock
	return true;
  },
  checkPermissions: function(succ,fail) {
	//mock
	return true;
  },
  requestPermissions: function(succ,fail) {
	//mock
	return true;
  },
  isDummyPlugin: true
};

module.exports = conversations;