if(‘PushManager’ in window) {

//Push supported!

}

//check for support

if (‘serviceWorker’ in navigator) {

navigator.serviceWorker.register(‘serviceworker.js’).then(function(registration) {

// Registration was successful

}).catch(function(err) {

// registration failed

});

}

 Check Subscription :

window.onload = function() {

if (‘serviceWorker’ in navigator) {

navigator.serviceWorker.register(‘/sw.js’).then(function(registration) {

// Registration was successful, show interface

document.getElementById(‘not-status’).innerHTML = ‘<h4>mobiForge notifications</h4><input type=”checkbox” name=”pushStatus” id=”pushStatus” value=”false” /><label for=”pushStatus”>Receive push notifications for new content</label><div id=”pushStatusMsg”></div>’;

//Check subscription state

checkSubscription();

//Attach listener

document.getElementById(“pushStatus”).addEventListener(‘click’, function(){

subUnsubPush();

});

}).catch(function(err) {

// registration failed :(

console.log(‘ServiceWorker registration failed: ‘, err);

});

}

else {

console.log(“ServiceWorker not supported :-(“);

document.getElementById(‘not-status’).innerHTML = ‘ServiceWorker not supported :-(‘;

}

};

Get Subscription :

function checkSubscription() {

navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {

serviceWorkerRegistration.pushManager.getSubscription().then(

function(pushSubscription) {

if(!!pushSubscription) {

//Send subscription to application server

sendSub(pushSubscription);

//Manage interface

pushStatus = true;

document.getElementById(“pushStatus”).checked = true;

document.getElementById(“pushStatusMsg”).innerHTML = ‘<span>You are subscribed!</span>’;

}

else {

//Manage interface

pushStatus = false;

document.getElementById(“pushStatus”).checked = false;

document.getElementById(“pushStatusMsg”).innerHTML = ‘<span>You are not subscribed!</span>’;

}

}.bind(this)).catch(function(e) {

console.error(‘Error getting subscription’, e);

});

});

}


{

“name”: “databox.com”,

“short_name”: “Databox”,

“start_url”: “/”,

“display”: “standalone”,

“gcm_sender_id”: “343259482357”,

“gcm_user_visible_only”: true,

“permissions”: [“gcm”]

}

