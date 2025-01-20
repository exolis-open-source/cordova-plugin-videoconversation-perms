exec = require('cordova/exec');
var conversations = {
  open: function(callTo,token,succ,fail) {
    exec(
      succ || function(){},
      fail || function(){},
      'VideoConversationPlugin',
      'open',
      [callTo,token]
    );
  },
  checkPermissions: function(succ,fail) {
    exec(
      succ || function(){},
      fail || function(){},
      'VideoConversationPlugin',
      'checkPermissions',
      []
    );
  },
  requestPermissions: function(succ,fail) {
    exec(
      succ || function(){},
      fail || function(){},
      'VideoConversationPlugin',
      'requestPermissions',
      []
    );
  }
};

module.exports = conversations;