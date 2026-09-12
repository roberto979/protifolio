function showYear() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("current-year").textContent = year;
}
function WelcomeVisitor() {
    var visitorName = prompt("Please enter your name:");
    console.log("Visitor name entered: " + visitorName);
    alert("Welcome to Cape Connect, " + visitorName + "!");
}
function initpage() {
    showYear();
    WelcomeVisitor();
}
function SetActive(link) {
    //set the clicked link as active and remove the active class from other links
    console.log("Nav link clicked: " + link.textContent);
    var navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function(oneLink) {
        oneLink.classList.remove('active-link');
    });
    link.classList.add('active-link');
}
function toggleEventDetails(Id) {
    var eventDetails = document.getElementById(Id);
    if (eventDetails.style.display === "none") {
        eventDetails.style.display = "block";
    } else {
        eventDetails.style.display = "none";
    }
}
function toggleDetaills(Id) {
    //toggle the display of the details section with the given Id
    var details = document.getElementById(Id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
function validateForm() {
    var name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    } else {
        alert("Thank you for joining Cape Connect, " + name + "!");
        return true;
    }
}

