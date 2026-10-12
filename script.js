
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const travelDate = document.getElementById("travelDate").value;
        const travellers = Number(document.getElementById("travellers").value);

        if (fullName === "" || email === "" || travelDate === "" || travellers < 1) {
            alert("Please complete all required fields correctly.");
            return;
        }

        const selectedDate = new Date(travelDate + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("Please choose a travel date that is today or in the future.");
            return;
        }

        alert("Thank you, " + fullName + "! Your journey request has passed validation. We are excited to help you explore Lesotho!");
        
        bookingForm.reset();
    });
}



const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {
            alert("Please complete all fields before sending your message.");
            return;
        }

        alert("Thank you, " + name + "! Your message has passed validation.");

        contactForm.reset();
    });
}



const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* Maletsunyane & Thaba-Bosiu javascript */

function toggleDestinationInfo(infoId, button) {
    const info = document.getElementById(infoId);

    if (info.hidden) {
        info.hidden = false;
        button.textContent = "Discover Less −";
    } else {
        info.hidden = true;
        button.textContent = "Discover More +";
    }
}