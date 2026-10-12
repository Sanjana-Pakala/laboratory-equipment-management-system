
// LABORATORY TIMETABLE MANAGEMENT SYSTEM

// VARIABLES

let selectedRoom = "3005";
let selectedDay = getToday();

// TIME SLOTS

const timeSlots = {

    "9:10-10:10": {
        start: "09:10",
        end: "10:10"
    },

    "10:10-11:00": {
        start: "10:10",
        end: "11:00"
    },

    "11:00-11:10": {
        start: "11:00",
        end: "11:10"
    },

    "11:10-12:00": {
        start: "11:10",
        end: "12:00"
    },

    "12:00-12:50": {
        start: "12:00",
        end: "12:50"
    },

    "12:50-1:40": {
        start: "12:50",
        end: "13:40"
    },

    "1:40-2:40": {
        start: "13:40",
        end: "14:40"
    },

    "2:40-3:30": {
        start: "14:40",
        end: "15:30"
    },

    "3:30-4:20": {
        start: "15:30",
        end: "16:20"
    }

};

// IT-A FULL TIMETABLE
// ROOM 3005

const timetable3005 = {

    Monday: [

        { time: "9:10-10:10", subject: "SEN", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "WTS", type: "subject" },

        { time: "12:00-12:50", subject: "CNS", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "MLG", type: "subject" },

        { time: "2:40-3:30", subject: "RMY", type: "subject" },

        { time: "3:30-4:20", subject: "TS", type: "subject" }

    ],


    Tuesday: [

        { time: "9:10-10:10", subject: "MLG", type: "subject" },

        { time: "10:10-11:00", subject: "WTS", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "MLL (3021-A) / RPL (3021-B)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "DSE / ETH / PME", type: "subject" },

        { time: "2:40-3:30", subject: "CNS", type: "subject" },

        { time: "3:30-4:20", subject: "No Session", type: "empty" }

    ],


    Wednesday: [

        { time: "9:10-10:10", subject: "MLG", type: "subject" },

        { time: "10:10-11:00", subject: "WTS", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "RPL (3021-B) / MLL (3021-A)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "DSE / ETH / PME", type: "subject" },

        { time: "2:40-3:30", subject: "SEN", type: "subject" },

        { time: "3:30-4:20", subject: "NWE", type: "subject" }

    ],


    Thursday: [

        {
            time: "9:10-11:00",
            subject: "MDL (3014-B) / WTL (3014-A)",
            type: "lab"
        },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "MLG", type: "subject" },

        { time: "12:00-12:50", subject: "SEN", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "WTS", type: "subject" },

        { time: "2:40-3:30", subject: "CNS", type: "subject" },

        { time: "3:30-4:20", subject: "No Session", type: "empty" }

    ],


    Friday: [

        {
            time: "9:10-10:10",
            subject: "MDL (3014-B)",
            type: "lab"
        },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "WTL (3014-A) / MDL (3014-B)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "MLG", type: "subject" },

        { time: "2:40-3:30", subject: "SEN", type: "subject" },

        { time: "3:30-4:20", subject: "WTS", type: "subject" }

    ],


    Saturday: [

        { time: "9:10-10:10", subject: "WTS", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "SEN*", type: "subject" },

        { time: "12:00-12:50", subject: "LSM", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "CNS", type: "subject" },

        { time: "2:40-3:30", subject: "MLG", type: "subject" },

        { time: "3:30-4:20", subject: "NWE", type: "subject" }

    ]

};

// IT-B FULL TIMETABLE
// ROOM 3006

const timetable3006 = {

    Monday: [

        { time: "9:10-10:10", subject: "MLG", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "MLL (3021-A) / RPL (3021-B)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "MLG", type: "subject" },

        { time: "2:40-3:30", subject: "SEN", type: "subject" },

        { time: "3:30-4:20", subject: "WTS", type: "subject" }

    ],


    Tuesday: [

        { time: "9:10-10:10", subject: "MLG", type: "subject" },

        { time: "10:10-11:00", subject: "CNS", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "WTL (3014-A) / MDL (3014-B)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "DSE / ETH / PME", type: "subject" },

        { time: "2:40-3:30", subject: "SEN*", type: "subject" },

        { time: "3:30-4:20", subject: "LSM", type: "subject" }

    ],


    Wednesday: [

        { time: "9:10-10:10", subject: "SEN", type: "subject" },

        { time: "10:10-11:00", subject: "NWE", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "MDL (3014-B) / WTL (3014-A)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "DSE / ETH / PME", type: "subject" },

        { time: "2:40-3:30", subject: "MLG", type: "subject" },

        { time: "3:30-4:20", subject: "No Session", type: "empty" }

    ],


    Thursday: [

        { time: "9:10-10:10", subject: "CNS", type: "subject" },

        { time: "10:10-11:00", subject: "NWE", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "RPL (3021-B) / MLL (3021-A)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "CNS (3012)", type: "subject" },

        { time: "2:40-3:30", subject: "SEN", type: "subject" },

        { time: "3:30-4:20", subject: "WTS", type: "subject" }

    ],


    Friday: [

        { time: "9:10-10:10", subject: "WTS", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "CNS", type: "subject" },

        { time: "12:00-12:50", subject: "WTS", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "WTS", type: "subject" },

        { time: "2:40-3:30", subject: "RMY", type: "subject" },

        { time: "3:30-4:20", subject: "TS", type: "subject" }

    ],


    Saturday: [

        { time: "9:10-10:10", subject: "SEN", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "CNS", type: "subject" },

        { time: "12:00-12:50", subject: "WTS", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "MAD", type: "subject" },

        { time: "2:40-3:30", subject: "WTS", type: "subject" },

        { time: "3:30-4:20", subject: "MLG", type: "subject" }

    ]

};

// IT-C FULL TIMETABLE
// ROOM 3011

const timetable3011 = {

    Monday: [

        { time: "9:10-10:10", subject: "SEN", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        {
            time: "11:10-12:50",
            subject: "WTL (3014-A) / MDL (3014-B)",
            type: "lab"
        },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-3:30", subject: "WTS* (Tutorial)", type: "subject" },

        { time: "3:30-4:20", subject: "MLG", type: "subject" }

    ],


    Tuesday: [

        {
            time: "9:10-11:00",
            subject: "MDL (3014-B) / WTL (3014-A)",
            type: "lab"
        },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "MLG", type: "subject" },

        { time: "12:00-12:50", subject: "WTS", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "DSE / ETH / PME", type: "subject" },

        { time: "2:40-3:30", subject: "SEN*", type: "subject" },

        { time: "3:30-4:20", subject: "LSM", type: "subject" }

    ],


    Wednesday: [

        {
            time: "9:10-11:00",
            subject: "MLL (3021-A) / RPL (3021-B)",
            type: "lab"
        },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "SEN", type: "subject" },

        { time: "12:00-12:50", subject: "WTS", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "DSE / ETH / PME", type: "subject" },

        { time: "2:40-4:20", subject: "CNS", type: "subject" }

    ],


    Thursday: [

        {
            time: "9:10-11:00",
            subject: "RPL (3021-B) / MLL (3021-A)",
            type: "lab"
        },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:50", subject: "NWE", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "CNS", type: "subject" },

        { time: "2:40-4:20", subject: "MLG* (Tutorial)", type: "subject" }

    ],


    Friday: [

        { time: "9:10-10:10", subject: "MLG", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:50", subject: "CNS", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "WTS", type: "subject" },

        { time: "2:40-4:20", subject: "SEN* (Tutorial)", type: "subject" }

    ],


    Saturday: [

        { time: "9:10-10:10", subject: "MAD", type: "subject" },

        { time: "10:10-11:00", subject: "DSE / ETH / PME", type: "subject" },

        { time: "11:00-11:10", subject: "Break", type: "break" },

        { time: "11:10-12:00", subject: "CNS*", type: "subject" },

        { time: "12:00-12:50", subject: "SEN", type: "subject" },

        { time: "12:50-1:40", subject: "Lunch", type: "lunch" },

        { time: "1:40-2:40", subject: "MLG", type: "subject" },

        { time: "2:40-3:30", subject: "RMY", type: "subject" },

        { time: "3:30-4:20", subject: "TS", type: "subject" }

    ]

};



// LABORATORY SCHEDULE

// IT-A LABS

const labs3005 = [

    {
        day: "Tuesday",
        time: "11:10 AM - 12:50 PM",
        lab: "MLL / RPL",
        room: "3021-A / 3021-B"
    },

    {
        day: "Wednesday",
        time: "11:10 AM - 12:50 PM",
        lab: "RPL / MLL",
        room: "3021-B / 3021-A"
    },

    {
        day: "Thursday",
        time: "9:10 AM - 11:00 AM",
        lab: "MDL / WTL",
        room: "3014-B / 3014-A"
    },

    {
        day: "Friday",
        time: "9:10 AM - 10:10 AM",
        lab: "MDL",
        room: "3014-B"
    },

    {
        day: "Friday",
        time: "11:10 AM - 12:50 PM",
        lab: "WTL / MDL",
        room: "3014-A / 3014-B"
    }

];


// IT-B LABS

const labs3006 = [

    {
        day: "Monday",
        time: "11:10 AM - 12:50 PM",
        lab: "MLL / RPL",
        room: "3021-A / 3021-B"
    },

    {
        day: "Tuesday",
        time: "11:10 AM - 12:50 PM",
        lab: "WTL / MDL",
        room: "3014-A / 3014-B"
    },

    {
        day: "Wednesday",
        time: "11:10 AM - 12:50 PM",
        lab: "MDL / WTL",
        room: "3014-B / 3014-A"
    },

    {
        day: "Thursday",
        time: "11:10 AM - 12:50 PM",
        lab: "RPL / MLL",
        room: "3021-B / 3021-A"
    }

];


// IT-C LABS

const labs3011 = [

    {
        day: "Monday",
        time: "11:10 AM - 12:50 PM",
        lab: "WTL / MDL",
        room: "3014-A / 3014-B"
    },

    {
        day: "Tuesday",
        time: "9:10 AM - 11:00 AM",
        lab: "MDL / WTL",
        room: "3014-B / 3014-A"
    },

    {
        day: "Wednesday",
        time: "9:10 AM - 11:00 AM",
        lab: "MLL / RPL",
        room: "3021-A / 3021-B"
    },

    {
        day: "Thursday",
        time: "9:10 AM - 11:00 AM",
        lab: "RPL / MLL",
        room: "3021-B / 3021-A"
    }

];

// GET CURRENT TIMETABLE


 // GET CURRENT TIMETABLE

function getCurrentTimetable() {
    const timetables = {
        "3005": timetable3005,
        "3006": timetable3006,
        "3011": timetable3011
    };

    return timetables[selectedRoom];
}

// GET CURRENT LAB SCHEDULE

function getCurrentLabs() {
    const labs = {
        "3005": labs3005,
        "3006": labs3006,
        "3011": labs3011
    };

    return labs[selectedRoom];
}

// ALL LABORATORY SCHEDULES

function getAllLabs() {
    return [...labs3005, ...labs3006, ...labs3011];
}

// ROOM SELECTION

function selectRoom(room) {
    selectedRoom = room;

    document.querySelectorAll(".room-btn").forEach(button => {
        button.classList.remove("active");
    });

    const activeButton = document.getElementById("room" + room + "Btn");
    if (activeButton) activeButton.classList.add("active");

    const roomNames = {
        "3005": "Room 3005 - IT-A",
        "3006": "Room 3006 - IT-B",
        "3011": "Room 3011 - IT-C"
    };

    document.getElementById("selectedRoomText").textContent =
        "Currently viewing: " + roomNames[room];

    document.getElementById("roomTitle").textContent = roomNames[room];

    updatePage();
}

// SELECT DAY

function showDay(day) {
    selectedDay = day;

    document.querySelectorAll(".day-buttons button").forEach(button => {
        button.classList.remove("active-day");
    });

    const activeButton = document.getElementById(day + "Btn");
    if (activeButton) activeButton.classList.add("active-day");

    updateSchedule();
    updateFreeLabs();
}

// GET TODAY

function getToday() {
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    return days[new Date().getDay()];
}

// CONVERT TIMETABLE TIME TO MINUTES
// Your timetable uses 1:40, 2:40, 3:30 and 4:20
// to represent afternoon times.

function convertToMinutes(time) {
    let [hour, minute] = time.trim().split(":").map(Number);

    if (hour >= 1 && hour <= 4) {
        hour += 12;
    }

    return hour * 60 + minute;
}

// PARSE A NORMAL AM/PM TIME

function parseClockTime(time) {
    const match = time.trim().match(
        /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i
    );

    if (!match) return null;

    let hour = Number(match[1]);
    const minute = Number(match[2]);
    const period = match[3].toUpperCase();

    if (period === "AM" && hour === 12) hour = 0;
    if (period === "PM" && hour !== 12) hour += 12;

    return hour * 60 + minute;
}

// GET TIME RANGE

function getTimeRange(timeRange) {
    const parts = timeRange.split("-");

    return {
        start: parts[0].trim(),
        end: parts[1].trim()
    };
}

// FORMAT TIME

function formatTime(time) {
    let [hour, minute] = time.split(":").map(Number);

    if (hour >= 1 && hour <= 4) hour += 12;

    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${hour}:${String(minute).padStart(2, "0")} ${period}`;
}

// FORMAT A TIMETABLE TIME RANGE

function formatScheduleTime(time) {
    const range = getTimeRange(time);

    return `${formatTime(range.start)} - ${formatTime(range.end)}`;
}

// UPDATE CURRENT STATUS

function updateCurrentStatus() {
    const timetable = getCurrentTimetable();
    const today = getToday();

    const currentElement = document.getElementById("currentActivity");
    const nextElement = document.getElementById("nextActivity");
    const remainingElement = document.getElementById("timeRemaining");

    // Sunday: no classes

    if (today === "Sunday" || !timetable[today]) {
        currentElement.textContent = "No classes today";
        nextElement.textContent = "No upcoming session";
        remainingElement.textContent = "--";
        return;
    }

    const schedule = timetable[today];
    const now = new Date();

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const currentSeconds = now.getSeconds();

    let current = null;
    let next = null;

    for (const slot of schedule) {
        const range = getTimeRange(slot.time);
        const start = convertToMinutes(range.start);
        const end = convertToMinutes(range.end);

        if (currentMinutes >= start && currentMinutes < end) {
            current = slot;
            break;
        }

        if (currentMinutes < start) {
            next = slot;
            break;
        }
    }

    if (current) {
        currentElement.textContent =
            current.subject + " (" + formatScheduleTime(current.time) + ")";

        const range = getTimeRange(current.time);
        const endMinutes = convertToMinutes(range.end);

        const secondsLeft =
            Math.max(0, (endMinutes - currentMinutes) * 60 - currentSeconds);

        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;

        remainingElement.textContent =
            `${minutes} min ${seconds} sec`;

        // Find the next session, skipping breaks and lunch

        const currentIndex = schedule.indexOf(current);

        next = schedule.slice(currentIndex + 1).find(slot =>
            slot.type !== "break" &&
            slot.type !== "lunch" &&
            slot.type !== "empty"
        ) || null;

        nextElement.textContent = next
            ? `${next.subject} (${formatScheduleTime(next.time)})`
            : "No more classes today";

    } else {
        currentElement.textContent =
            currentMinutes < convertToMinutes("9:10")
                ? "Classes have not started"
                : "No current session";

        remainingElement.textContent = "--";

        // Find the next actual class, skipping breaks and lunch

        if (!next) {
            next = schedule.find(slot =>
                convertToMinutes(getTimeRange(slot.time).start) > currentMinutes &&
                slot.type !== "break" &&
                slot.type !== "lunch" &&
                slot.type !== "empty"
            ) || null;
        }

        nextElement.textContent = next
            ? `${next.subject} (${formatScheduleTime(next.time)})`
            : "No more classes today";
    }
}

// UPDATE FULL TIMETABLE

function updateSchedule() {
    const timetable = getCurrentTimetable();
    const container = document.getElementById("scheduleContainer");

    document.getElementById("selectedDayTitle").textContent =
        selectedDay + " Timetable";

    container.innerHTML = "";

    const schedule = timetable[selectedDay];

    if (!schedule) {
        container.innerHTML =
            '<div class="empty-day">No timetable available for Sunday.</div>';
        return;
    }

    schedule.forEach(slot => {
        const card = document.createElement("div");
        card.className = "schedule-card " + slot.type;

        const time = document.createElement("div");
        time.className = "schedule-time";
        time.textContent = formatScheduleTime(slot.time);

        const subject = document.createElement("div");
        subject.className = "schedule-subject";
        subject.textContent = slot.subject;

        const type = document.createElement("div");
        type.className = "schedule-type";
        type.textContent = getTypeText(slot.type);

        card.append(time, subject, type);
        container.appendChild(card);
    });
}

// GET TYPE TEXT

function getTypeText(type) {
    const labels = {
        lab: "Laboratory Session",
        subject: "Class Session",
        break: "Short Break",
        lunch: "Lunch Break",
        empty: "No Scheduled Session"
    };

    return labels[type] || "";
}

// UPDATE LABORATORY SECTION

function updateLabSchedule() {
    const labs = getCurrentLabs();
    const container = document.getElementById("labScheduleContainer");

    const classNames = {
        "3005": "IT-A",
        "3006": "IT-B",
        "3011": "IT-C"
    };

    document.getElementById("labRoomTitle").textContent =
        classNames[selectedRoom] + " Laboratory Sessions";

    container.innerHTML = "";

    labs.forEach(lab => {
        const card = document.createElement("div");
        card.className = "lab-card";

        const day = document.createElement("div");
        day.className = "lab-day";
        day.textContent = lab.day;

        const time = document.createElement("div");
        time.className = "lab-time";
        time.textContent = "⏰ " + lab.time;

        const name = document.createElement("div");
        name.className = "lab-name";
        name.textContent = "🧪 " + lab.lab;

        const room = document.createElement("div");
        room.className = "lab-room";
        room.textContent = "📍 Lab Room: " + lab.room;

        card.append(day, time, name, room);
        container.appendChild(card);
    });
}

// FREE LABORATORY AVAILABILITY


function updateFreeLabs() {
    const container = document.getElementById("freeLabContainer");
    const title = document.getElementById("freeLabDayTitle");

    if (!container || !title) return;

    title.textContent = selectedDay + " Lab Availability";
    container.innerHTML = "";

    if (selectedDay === "Sunday") {
        container.textContent = "No scheduled laboratory sessions.";
        return;
    }

    // All laboratory rooms
    const allLabRooms = [
        "3014-A",
        "3014-B",
        "3021-A",
        "3021-B"
    ];

    // Full college timing: 9:10 AM to 4:20 PM
    const collegeStart = 9 * 60 + 10;
    const collegeEnd = 16 * 60 + 20;

    // Get all laboratory sessions for the selected day
    const dayLabs = getAllLabs().filter(
        lab => lab.day === selectedDay
    );

    // Parse time strings such as 9:10 AM
    const events = dayLabs.map(lab => {
        const [startText, endText] = lab.time.split(/\s*-\s*/);

        return {
            start: parseClockTime(startText),
            end: parseClockTime(endText),
            rooms: lab.room.split("/").map(room => room.trim())
        };
    }).filter(event =>
        event.start !== null &&
        event.end !== null &&
        event.end > event.start
    );

    // Include the start and end of the entire college day.
    // This ensures afternoon periods are also displayed.
    const boundaries = [
        collegeStart,
        collegeEnd,
        ...events.flatMap(event => [event.start, event.end])
    ]
    .filter(time => time >= collegeStart && time <= collegeEnd);

    // Sort and remove duplicate times
    const uniqueBoundaries = [...new Set(boundaries)]
        .sort((a, b) => a - b);

    // Check availability during every interval
    for (let i = 0; i < uniqueBoundaries.length - 1; i++) {
        const start = uniqueBoundaries[i];
        const end = uniqueBoundaries[i + 1];

        if (end <= start) continue;

        const occupiedRooms = new Set();

        events.forEach(event => {
            if (event.start < end && event.end > start) {
                event.rooms.forEach(room => {
                    occupiedRooms.add(room);
                });
            }
        });

        const freeRooms = allLabRooms.filter(
            room => !occupiedRooms.has(room)
        );

        const card = document.createElement("div");
        card.className = "free-lab-card";

        const time = document.createElement("div");
        time.className = "free-lab-time";
        time.textContent =
            formatTimeFromMinutes(start) + " - " +
            formatTimeFromMinutes(end);

        const status = document.createElement("div");
        status.className = "free-lab-status";

        if (freeRooms.length > 0) {
            status.textContent =
                "🟢 Free: " + freeRooms.join(", ");
        } else {
            status.textContent =
                "🔴 All listed labs are occupied";
        }

        card.appendChild(time);
        card.appendChild(status);
        container.appendChild(card);
    }
}

// FORMAT MINUTES AS A 12-HOUR CLOCK

function formatTimeFromMinutes(totalMinutes) {
    const hour24 = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    const period = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 || 12;

    return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

// UPDATE EVERYTHING

function updatePage() {
    updateSchedule();
    updateLabSchedule();
    updateFreeLabs();
    updateCurrentStatus();
}

// INITIAL LOAD

showDay(selectedDay);
updatePage();

// UPDATE LIVE STATUS EVERY SECOND

setInterval(updateCurrentStatus, 1000);
