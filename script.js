// Track Tabs Switching

const trackTabs = document.querySelectorAll('.track-tabs .tab');
const trackForms = document.querySelectorAll('.track-form');

trackTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    trackTabs.forEach(t => t.classList.remove('active'));

    // Add active class to the clicked tab
    tab.classList.add('active');

    // Hide all forms
    trackForms.forEach(form => form.style.display = 'none');

    // Show the target form
    const targetFormId = tab.getAttribute('data-target');
    const targetForm = document.getElementById(targetFormId);

    if (targetForm) {
      targetForm.style.display = 'flex';
    }
  });
});

// EXTERNAL PAGE JS: //
// 1. Custom function
function showTrackingMessage() {
  const message = document.createElement('p');
  message.textContent = "✅ Tracking information loaded!";
  message.className = 'tracking-message';
  document.getElementById('dynamicMessage').appendChild(message);
}
setTimeout(showTrackingMessage, 1000); // Call after delay

// 2. Key-based event
document.getElementById('keyCapture').addEventListener('keydown', (e) => {
  console.log("Key pressed:", e.key);
});

// ✅ 3. Mouse events + DOM navigation
const rows = document.querySelectorAll('.tracking-table tbody tr');
rows.forEach(row => {
  row.addEventListener('mouseover', () => {
    row.style.backgroundColor = '#f9f9f9';
  });
  row.addEventListener('mouseout', () => {
    row.style.backgroundColor = 'transparent';
  });

  row.addEventListener('click', (e) => {
    const parentRow = e.target.parentElement;
    const date = parentRow.children[0].textContent;
    alert("You clicked a row from date: " + date);
  });
});

//SECOND PAGE JS IN EXTERNAL HTML AS INTERNAL JS //
