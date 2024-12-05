importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');


// Firebase configuration object
firebase.initializeApp({
    apiKey: "AIzaSyBQsSTdWUz4Je7-BWbIgVL7qjMR7iFRy0g",
    authDomain: "demofirebase-7ed8e.firebaseapp.com",
    projectId: "demofirebase-7ed8e",
    storageBucket: "demofirebase-7ed8e.firebasestorage.app",
    messagingSenderId: "725026213043",
    appId: "1:725026213043:web:c1dff80fbb9cc7dadb74c6",
    measurementId: "G-HG8GZZ806G"
});

// Initialize Firebase app

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
});
messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );

    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
