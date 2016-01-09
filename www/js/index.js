var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    	if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.UNKNOWN){
    		alert('This app is only available online.');
    		navigator.app.exitApp();
    	}
        // TODO: Notification Code
    }
};
