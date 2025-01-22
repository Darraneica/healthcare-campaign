// Sample patient data
const patients = [
    { name: "Sarah Johnson", lastCheckup: "2023-10", clinic: "Main", email: "sarah@example.com" },
    { name: "Michael Smith", lastCheckup: "2023-08", clinic: "West", email: "michael@example.com" },
    { name: "Emma Davis", lastCheckup: "2023-12", clinic: "East", email: "emma@example.com" },
    { name: "James Wilson", lastCheckup: "2023-11", clinic: "Main", email: "james@example.com" },
    { name: "Olivia Brown", lastCheckup: "2023-09", clinic: "West", email: "olivia@example.com" }
];

// Default email template
const defaultTemplate = `Dear [Patient Name],

We hope this email finds you well. At [Healthcare Provider], your health is our top priority.

🏥 Your Personalized Health Update:
- Last checkup: [Last Checkup Date]
- Preferred location: [Clinic] Clinic

🗓️ Why Schedule Now?
- Start the year with a comprehensive health assessment
- Get personalized preventive care recommendations
- Update your vaccinations and screenings
- Discuss any health concerns with your provider

✨ New in 2024:
- Extended evening hours
- Telehealth options available
- Same-day appointments for urgent needs
- Comprehensive wellness programs

📱 Easy Scheduling Options:
- Call: (555) 123-4567
- Online: www.healthcareprovider.com/schedule
- Mobile App: Download our new patient app

Your wellness journey matters to us. Schedule your appointment today and take the first step towards a healthier 2024.

Best regards,
Your Healthcare Team`;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set default email content
    document.getElementById('emailContent').value = defaultTemplate;
    
    // Load recipients
    loadRecipients();
    
    // Initialize tooltips and popovers
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function loadRecipients() {
    const recipientContainer = document.getElementById("recipientsList");
    patients.forEach(patient => {
        const recipientCard = document.createElement("div");
        recipientCard.classList.add("col-md-4", "recipient-card", "p-3", "border", "rounded", "bg-white");
        recipientCard.innerHTML = `
            <h5 class="fw-bold">${patient.name}</h5>
            <p><strong>Last Checkup:</strong> ${patient.lastCheckup}</p>
            <p><strong>Clinic:</strong> ${patient.clinic}</p>
            <button class="btn btn-sm btn-outline-primary hover-scale mt-3" onclick="sendIndividualEmail('${patient.email}')">Send Email</button>
        `;
        recipientContainer.appendChild(recipientCard);
    });
}

function previewEmail() {
    const previewContent = document.getElementById("previewContent");
    previewContent.innerHTML = document.getElementById("emailContent").value;
}

function sendCampaign() {
    setTimeout(function () {
        const toast = new bootstrap.Toast(document.getElementById('successToast'));
        toast.show();
    }, 2000);
}

function sendIndividualEmail(email) {
    alert(`Sending email to ${email}`);
}