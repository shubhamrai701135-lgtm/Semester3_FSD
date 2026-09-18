const EventEmitter = require("events");

const application = new EventEmitter();

// Input event
application.on("input", (text) => {
    console.log(`Entered text: ${text}`);
});

// Button click event
application.on("buttonClick", (buttonName) => {
    console.log(`Button clicked: ${buttonName}`);
});

// Form submit event
application.on("formSubmit", (formName) => {
    console.log(`Form submitted successfully: ${formName}`);
});

// Challenge: Notification event
application.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Trigger events
application.emit("input", "Hello Node.js");
application.emit("buttonClick", "Login");
application.emit("formSubmit", "Student Registration Form");
application.emit("notification", "You have a new course update.");