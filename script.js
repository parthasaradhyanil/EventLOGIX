/* --- 1. THE DATA STRUCTURE --- */
/* An array holding all event objects (our static database) */
  const events = [
       {
                            id: 1,
                            title: "Entrepreneurship Summit",
                            club: "Entrepreneurship Cell CET",
                            date: "2026-07-15",
                            location: "Auditorium",
                            isFree: false,
                            costText: "Paid (₹350)",
                            dutyLeave: false,
                            formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
                        },
            {
                id: 2,
                title: "Cybersecurity Bootcamp",
                club: "TinkerHub CET",
                date: "2026-04-18",
                location: "CS Dept Seminar Hall",
                isFree: false,
                costText: "Paid (₹150)",
                dutyLeave: false,
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
            },

            {
                id: 3,
                title: "Eco Car Final Assembly",
                club: "Eco Car Club",
                date: "2026-04-25",
                location: "Mechanical Workshop",
                isFree: true,
                costText: "Free",
                dutyLeave: true,
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
            },
            {
                id: 4,
                title: "AI & ML Workshop",
                club: "AI Club CET",
                date: "2026-05-05",
                location: "CS Dept Lab 2",
                isFree: false,
                costText: "Paid (₹200)",
                dutyLeave: false,
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
            },{
                id: 5,
                title: "Robotics Challenge",
                club: "Robotics Club",
                date: "2026-05-15",
                location: "main block",
                isFree: true,
                costText: "Free",
                dutyLeave: true,
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
            },
                {
                    id: 6,
                    title: "Hackathon 2026",
                    club: "Coding Club CET",
                    date: "2026-05-20",
                    location: "CS Dept Seminar Hall",
                    isFree: false,
                    costText: "Paid (₹300)",
                    dutyLeave: false,
                    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
                },
                    {
                        id: 7,
                        title: "Sustainability Symposium",
                        club: "Environment Club",
                        date: "2026-06-10",
                        location: "Auditorium",
                        isFree: true,
                        costText: "Free",
                        dutyLeave: true,
                        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
                    },
                    {
                        id: 8,
                        title: "Data Science Workshop",
                        club: "Data Science Club CET",
                        date: "2026-06-20",
                        location: "CS Dept Lab 1",
                        isFree: false,
                        costText: "Paid (₹250)",
                        dutyLeave: false,
                        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
                    },
                        {
                            id: 9,
                            title: "Cultural Fest",
                            club: "Cultural Club CET",
                            date: "2026-07-05",
                            location: "Open Grounds",
                            isFree: true,
                            costText: "Free",
                            dutyLeave: true,
                            formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
                        },
                        {
                            id: 10,
                            title: "Entrepreneurship Summit",
                            club: "Entrepreneurship Cell CET",
                            date: "2026-07-15",
                            location: "Auditorium",
                            isFree: false,
                            costText: "Paid (₹350)",
                            dutyLeave: false,
                            formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_j4WMgxHCGVYMTfJOaY2FZp9O6i1pUC7nRls2keED-490Xw/viewform?usp=publish-editor"
                        }









        ];
/* --- 2. GLOBAL VARIABLES --- */
/* Creates a Date object set to today's exact date and time. Used by the calendar. */
let currentDate = new Date(); 

/* --- 3. VIEW SWITCHING LOGIC --- */
/* Function triggered when a user clicks 'List View' or 'Calendar View' */
function switchView(view) {
    /* Saves their choice in the browser's memory so it survives a page refresh */
    localStorage.setItem('preferredView', view);

    /* Grab the main HTML containers using their IDs */
    const listView = document.getElementById('list-view');
    const calendarView = document.getElementById('calendar-view');
    const btnList = document.getElementById('btn-list');
    const btnCalendar = document.getElementById('btn-calendar');

    /* Step 1: Remove the 'active' class from everything to reset the view */
    listView.classList.remove('active');
    calendarView.classList.remove('active');
    btnList.classList.remove('active');
    btnCalendar.classList.remove('active');

    /* Step 2: Add the 'active' class ONLY to the elements requested */
    if(view === 'list') {
        /* If list was clicked, show the list div and highlight the list button */
        listView.classList.add('active');
        btnList.classList.add('active');
    } else {
        /* If calendar was clicked, show calendar div and highlight calendar button */
        calendarView.classList.add('active');
        btnCalendar.classList.add('active');
        /* Call the function to draw the calendar grid now that it is visible */
        renderCalendar();
    }
}

/* --- 4. LIST RENDERING LOGIC --- */
/* Function that loops through data and draws the HTML cards */
function renderList() {
    /* Grab the empty container where cards will go */
    const container = document.getElementById('event-container');
    /* Clear out any old HTML inside the container */
    container.innerHTML = ""; 

    /* Create a copy of the events array and sort it chronologically (earliest first) */
    /* It subtracts the millisecond value of Date B from Date A */
    const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

    /* Loop through every single event in the newly sorted list */
    sortedEvents.forEach(event => {
        /* Logic: Check if it's free. If true, assign green class. If false, assign red class. */
        const costClass = event.isFree ? "bg-free" : "bg-paid";
        
        /* Logic: Check if duty leave is provided. Build the appropriate HTML span tag. */
        const leaveBadge = event.dutyLeave 
            ? `<span class="badge bg-leave">Duty Leave: Provided</span>` 
            : `<span class="badge bg-no-leave">Duty Leave: None</span>`;
        
        /* Logic: Convert raw date string into a human-readable format (e.g., 'Mon, 18 Apr 2026') */
        const dateObj = new Date(event.date);
        const formattedDate = dateObj.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

        /* Template Literal: Build the HTML block for the card, injecting JS variables using ${} */
        const cardHTML = `
            <div class="card">
                <h3>${event.title}</h3>
                <p class="club-name">Organized by: ${event.club}</p>
                <div class="detail-row"><strong>Date:</strong> <span>${formattedDate}</span></div>
                <div class="detail-row"><strong>Venue:</strong> <span>${event.location}</span></div>
                <div class="badges">
                    <span class="badge ${costClass}">${event.costText}</span>
                    ${leaveBadge}
                </div>
                <a href="${event.formLink}" target="_blank" class="btn-register">Register via Google Form</a>
            </div>
        `;
        
        /* Append (add) this newly created card HTML to the end of the container */
        container.innerHTML += cardHTML;
    });
}

/* --- 5. CALENDAR MATH AND RENDERING --- */
/* Function triggered by the Prev (-1) and Next (1) buttons */
function changeMonth(dir) {
    /* Get current month, add or subtract 1, and set it as the new month */
    currentDate.setMonth(currentDate.getMonth() + dir);
    /* Redraw the calendar with the new dates */
    renderCalendar(); 
}

/* Function to build the 7-column calendar grid */
function renderCalendar() {
    /* Grab the header text element */
    const monthYear = document.getElementById('calendar-month-year');
    /* Grab the empty calendar grid container */
    const grid = document.getElementById('calendar-grid');
    /* Clear out previous month's HTML */
    grid.innerHTML = ""; 

    /* Extract the specific year and month from our global currentDate variable */
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    /* Update the header text (e.g., turns "4" into "April 2026") */
    monthYear.textContent = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    /* Draw the weekday headers across the top */
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        grid.innerHTML += `<div class="calendar-day-header">${day}</div>`;
    });

    /* Find out what day of the week the 1st of the month falls on (0 = Sun, 6 = Sat) */
    const firstDay = new Date(year, month, 1).getDay();
    /* Find out how many total days are in the current month using the 'Day 0' trick */
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    /* Loop: Draw invisible padding squares until we reach the starting day */
    for (let i = 0; i < firstDay; i++) {
        grid.innerHTML += `<div class="calendar-day empty"></div>`;
    }

    /* Loop: Count from 1 up to the total days in the month */
    for (let day = 1; day <= daysInMonth; day++) {
        /* Format the current loop numbers into a strict YYYY-MM-DD string */
        /* padStart(2, '0') ensures single digits become double (e.g., '4' becomes '04') */
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        /* Filter the events array: keep only events where the date exactly matches dateString */
        const daysEvents = events.filter(e => e.date === dateString);
        
        /* Create an empty string to hold the event tags for this specific day */
        let eventsHTML = "";
        
        /* Loop through any matching events found */
        daysEvents.forEach(e => {
            /* If the event costs money, add the 'paid' class (makes it red) */
            const eventClass = e.isFree ? '' : 'paid';
            /* Create an anchor tag (link) styled like a colored bar */
            eventsHTML += `<a href="${e.formLink}" target="_blank" class="calendar-event ${eventClass}" style="display: block; text-decoration: none;">${e.title}</a>`;
        });

        /* Build the HTML for the calendar square, injecting the day number and any event tags */
        grid.innerHTML += `
            <div class="calendar-day">
                <span class="day-number">${day}</span>
                ${eventsHTML}
            </div>
        `;
    }
}

/* --- 6. INITIALIZATION --- */
/* This event listener waits for the entire HTML document to finish loading */
window.onload = () => {
    /* Immediately generate the cards for the List View */
    renderList(); 
    
    /* Check if the user previously clicked 'calendar' and saved it in localStorage */
    const savedPreference = localStorage.getItem('preferredView');
    
    /* If a preference exists, use it. If null (first visit), default to 'list' view */
    switchView(savedPreference || 'list'); 
};