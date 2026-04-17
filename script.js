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
/**
 * CALENDAR & EVENT LISTER SYSTEM
 * Current date state initialized to April 2026.
 */
let current = new Date(2026, 3, 1); 

/**
 * Toggles visibility between the List View and the Calendar View.
 * @param {string} view - Either 'list' or 'calendar'
 */
function switchView(view) {
    // Toggle CSS classes to show/hide the appropriate containers
    document.getElementById('list-view').classList.toggle('active', view === 'list');
    document.getElementById('calendar-view').classList.toggle('active', view === 'calendar');
    
    // Update button styling to show which view is currently selected
    document.getElementById('btn-list').classList.toggle('active', view === 'list');
    document.getElementById('btn-calendar').classList.toggle('active', view === 'calendar');
    
    // Re-render calendar logic if switching to calendar view
    if(view === 'calendar') renderCalendar();
}

/**
 * Iterates through the 'events' array and generates HTML cards for the list view.
 */
function renderList() {
    const container = document.getElementById('event-container');
    
    // Maps event data to HTML template strings
    container.innerHTML = events.map(e => `
        <div class="card">
            <h3>${e.title}</h3>
            <p class="club-tag">${e.club}</p>
            <div class="details"><b>Date:</b> ${e.date}</div>
            <div class="details"><b>Venue:</b> ${e.location}</div>
            <div class="badge-row">
                <span class="badge ${e.isFree ? 'bg-free' : 'bg-paid'}">${e.costText}</span>
                ${e.dutyLeave ? '<span class="badge bg-dl">Duty Leave</span>' : ''}
            </div>
            <a href="${e.formLink}" target="_blank" class="btn-reg">Register Now</a>
        </div>
    `).join('');
}

/**
 * Generates a dynamic 7-column calendar grid for the currently selected month.
 */
function renderCalendar() {
    const grid = document.getElementById('cal-grid');
    const label = document.getElementById('cal-label');
    grid.innerHTML = ""; // Clear existing grid
    
    const y = current.getFullYear();
    const m = current.getMonth();
    
    // Update the Month/Year display label
    label.textContent = current.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Add weekday headers (Sun-Sat)
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(d => {
        grid.innerHTML += `<div class="cal-header-cell">${d}</div>`;
    });

    // Calculate the day of the week the month starts on and total days in month
    const start = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();

    // Create empty cells for days from the previous month
    for (let i = 0; i < start; i++) {
        // Updated background color to use standard color name 'whitesmoke'
        grid.innerHTML += `<div class="cal-cell" style="background: whitesmoke;"></div>`;
    }

    // Generate cells for each day of the current month
    for (let d = 1; d <= days; d++) {
        // Format date string to match event data format (YYYY-MM-DD)
        const ds = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        
        // Filter the events array for items matching this specific day
        const dayEvents = events.filter(e => e.date === ds);
        
        grid.innerHTML += `
            <div class="cal-cell">
                <span style="font-size:0.75rem; color: lightgray; font-weight:bold;">${d}</span>
                ${dayEvents.map(e => `
                    <a href="${e.formLink}" target="_blank" class="cal-ev-link">
                        ${e.title}
                    </a>
                `).join('')}
            </div>`;
    }
}

/**
 * Updates the 'current' date state by adding/subtracting months.
 * @param {number} dir - Use 1 for next month, -1 for previous month.
 */
function changeMonth(dir) {
    current.setMonth(current.getMonth() + dir);
    renderCalendar();
}

/**
 * Initialization: Trigger the list view rendering as soon as the page loads.
 */
window.onload = renderList;
