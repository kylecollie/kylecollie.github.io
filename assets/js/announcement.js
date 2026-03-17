// Function to get the next Tuesday date
function getNextTuesday()
{
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysUntilTuesday = (2 - dayOfWeek + 7) % 7 || 7; // If today is Tuesday, get next Tuesday
    const nextTuesday = new Date(today);
    nextTuesday.setDate(today.getDate() + daysUntilTuesday);
    return nextTuesday;
}

// Function to format date as "Month Day, Year"
function formatDate(date)
{
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Load announcement data and update the page
fetch('assets/data/announcement.json')
    .then(response => response.json())
    .then(data =>
    {
        const announcementElement = document.getElementById('meeting-announcement');
        if (data.meeting)
        {
            const nextTuesday = getNextTuesday();
            const dateStr = formatDate(nextTuesday);
            announcementElement.textContent = `We will be meeting this Tuesday, ${dateStr} at 7:00 PM.`;
        } else
        {
            announcementElement.textContent = data.customMessage || 'No meeting this week.';
            if (data.customMessage && data.customMessage.includes('NOT'))
            {
                // If it's a cancellation, add the styling
                announcementElement.innerHTML = data.customMessage.replace('<strong class="not">NOT</strong>', '<strong class="not">NOT</strong>');
            }
        }
    })
    .catch(error =>
    {
        console.error('Error loading announcement:', error);
        document.getElementById('meeting-announcement').textContent = 'Announcement loading failed.';
    });