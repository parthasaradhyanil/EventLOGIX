// 1. Data: Add your CET events here
const events = [
    { title: "Entrepreneurship Summit", date: "2026-07-15", club: "E-Cell", link: "#" },
    { title: "Cybersecurity Bootcamp", date: "2026-04-18", club: "TinkerHub", link: "#" },
    { title: "Eco Car Assembly", date: "2026-04-25", club: "Eco Car Club", link: "#" }
];

let viewDate = new Date(2026, 3, 1); // April 2026

// 2. Switch between List and Calendar
function switchView(view) {
    document.getElementById('list-view').className = (view === 'list' ? 'active' : '');
    document.getElementById('calendar-view').className = (view === 'calendar' ? 'active' : '');
    
    document.getElementById('btn-list').classList.toggle('active', view === 'list');
    document.getElementById('btn-calendar').classList.toggle('active', view === 'calendar');

    if(view === 'calendar') renderCalendar();
}

// 3. Create the Cards
function renderList() {
    const container = document.getElementById('event-container');
    container.innerHTML = events.map(e => `
        <div class="card">
            <h3>${e.title}</h3>
            <p><b>Club:</b> ${e.club}</p>
            <p><b>Date:</b> ${e.date}</p>
            <a href="${e.link}" class="btn-reg">Register</a>
        </div>
    `).join('');
}

// 4. Create the Calendar
function renderCalendar() {
    const grid = document.getElementById('cal-grid');
    const label = document.getElementById('cal-label');
    grid.innerHTML = "";
    
    label.textContent = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Days Header
    ['S','M','T','W','T','F','S'].forEach(d => grid.innerHTML += `<div class="cal-header">${d}</div>`);

    const startDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

    // Empty cells for previous month days
    for (let i = 0; i < startDay; i++) grid.innerHTML += `<div class="cal-cell"></div>`;

    // Actual days
    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `2026-04-${d.toString().padStart(2, '0')}`; // Simplified for April
        const dayEvents = events.filter(e => e.date === dateStr);
        
        grid.innerHTML += `
            <div class="cal-cell">
                ${d}
                ${dayEvents.map(e => `<a href="${e.link}" class="cal-event">${e.title}</a>`).join('')}
            </div>`;
    }
}

function changeMonth(dir) {
    viewDate.setMonth(viewDate.getMonth() + dir);
    renderCalendar();
}

// Start by rendering the list
renderList();
