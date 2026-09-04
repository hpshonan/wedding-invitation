
const weddingDay = new Date("Sep 27, 2026 09:00:00").getTime();
const attendance = document.getElementById("attendance");
const guestCount = document.getElementById("guestCount");
setInterval(() => {

const now = new Date().getTime();
const gap = weddingDay - now;

const day = Math.floor(gap / (1000*60*60*24));
const hour = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
const minute = Math.floor((gap % (1000*60*60))/60000);
const second = Math.floor((gap % 60000)/1000);

document.getElementById("days").innerText = day;
document.getElementById("hours").innerText = hour;
document.getElementById("minutes").innerText = minute;
document.getElementById("seconds").innerText = second;

},1000);

document.getElementById("rsvpForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append(
        "entry.113888846",
        document.getElementById("fullName").value
    );

    formData.append(
        "entry.1176680824",
        document.getElementById("phoneNumber").value
    );

    formData.append(
        "entry.1782330916",
        document.getElementById("attendance").value
    );

    formData.append(
        "entry.407065062",
        document.getElementById("guestCount").value
    );

    formData.append(
        "entry.933396984",
        document.getElementById("message").value
    );

    await fetch(
        "https://docs.google.com/forms/d/e/FORM_ID/formResponse",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    );

    alert("Cảm ơn quý vị đã xác nhận tham dự ❤️");
});

attendance.addEventListener("change", () => {
    5
     
    6
    if (attendance.value === "Không tham dự") {
    7
    guestCount.parentElement.style.display = "none";
    8
    } else {
    9
    guestCount.parentElement.style.display = "block";
    10
    }
    11
     
    12
    });