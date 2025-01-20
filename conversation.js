exec = require('cordova/exec');
var conversations = {
  open: function(callTo,token,succ,fail) {
	//mock
	if (succ) {
		return succ(true);
	}
	return true;
  },
  checkPermissions: function(succ,fail) {
	//mock
	if (succ) {
		return succ(true);
	}
	return true;
  },
  requestPermissions: function(succ,fail) {
	//mock
	if (succ) {
		return succ(true);
	}
	return true;
  },
  isDummyPlugin: true
};

module.exports = conversations;