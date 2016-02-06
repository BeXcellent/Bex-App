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

        var Fetcher = window.plugins.backgroundFetch;

        var fetchCallback = function() {


        }

        Fetcher.configure(fetchCallback);        
    },

    getNotifications: function(){

        $.get('http://forum.bexcellent.org.uk/notifications.json', function(data){
            if (data.errors !== undefined){
                navigator.notification.alert('Error getting notifications!');
            }else{
                for (notification in data.notifications){
                    if (!notification.read){
                        // TODO: Display notification properly
                        navigator.notification.alert('You have a notification!');
                    }
                }            
            }
        });
    }


};
