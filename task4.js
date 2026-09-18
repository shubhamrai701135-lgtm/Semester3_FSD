const EventEmitter = require("events");

const studentTracker = new EventEmitter();

// Login event
studentTracker.on("login", (studentName) => {
    console.log(`Login successful: ${studentName}`);
});

// Course registration event
studentTracker.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});

// Notification event
studentTracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Logout event
studentTracker.on("logout", (studentName) => {
    console.log(`Logout successful: ${studentName}`);
});

// Activity sequence
console.log("----- Student Activity Tracker -----");

studentTracker.emit("login", "Rahul");

studentTracker.emit(
    "courseRegistration",
    "Full Stack Development"
);

studentTracker.emit(
    "notification",
    "Course registration completed successfully."
);

studentTracker.emit("logout", "Rahul");

console.log("----- Activity Completed -----");