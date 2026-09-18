const EventEmitter = require("events");

const studentSystem = new EventEmitter();

// studentJoined event
studentSystem.on("studentJoined", (studentName) => {
    console.log(`Student ${studentName} joined the session.`);
});

// courseSelected event
studentSystem.on("courseSelected", (courseName) => {
    console.log(`Course selected: ${courseName}`);
});

// sessionEnded event
studentSystem.on("sessionEnded", (sessionCode) => {
    console.log(`Session ended. Code: ${sessionCode}`);
});

// Trigger events
studentSystem.emit("studentJoined", "Rahul");
studentSystem.emit("courseSelected", "Full Stack Development");
studentSystem.emit("sessionEnded", 0);