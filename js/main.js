
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
    try {
        await fetch(
            "https://docs.google.com/forms/d/e/FORM_ID/formResponse",
            {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        );
        alert("Cảm ơn quý vị đã xác nhận tham dự ❤️");

        document.getElementById("rsvpForm").reset();
        guestSection.style.display = "none";
    } catch (error) {
        alert("Có lỗi xảy ra, vui lòng thử lại.");
        }
});

attendance.addEventListener("change", () => {
    if (attendance.value === "Có tham dự") {
        guestCount.parentElement.style.display = "block";
        document.getElementById("guestCount").value = "";
    } else {
        guestSection.style.display = "none";
    }
});

const galleryImages = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery4.jpg",
    "images/gallery5.jpg",
    "images/gallery6.jpg",
    "images/gallery7.jpg",
    "images/gallery8.jpg",
    "images/gallery9.jpg",
    "images/gallery10.jpg",
    "images/gallery11.jpg",
    "images/gallery12.jpg",
    "images/gallery13.jpg",
    "images/gallery15.jpg",
    "images/gallery16.jpg",
    "images/gallery17.jpg",
    "images/gallery18.jpg",
    "images/gallery19.jpg",
    "images/gallery20.jpg",
    "images/gallery21.jpg",
    "images/gallery22.jpg",
    "images/gallery23.jpg",
    "images/gallery24.jpg",
    "images/gallery25.jpg",
    "images/gallery26.jpg",
    "images/gallery27.jpg",
    "images/gallery28.jpg",
    "images/gallery29.jpg",
    "images/gallery30.jpg"
];

const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const galleryCounter = document.getElementById("galleryCounter");
let currentImage = 0;

function showGalleryImage(index) {
    currentImage = (index + galleryImages.length) % galleryImages.length;
    galleryImage.src = galleryImages[currentImage];
    galleryCounter.textContent = `${currentImage + 1} / ${galleryImages.length}`;
}

function closeGallery() {
    galleryModal.classList.remove("is-open");
    galleryModal.setAttribute("aria-hidden", "true");
}

document.getElementById("openGallery").addEventListener("click", () => {
    galleryModal.classList.add("is-open");
    galleryModal.setAttribute("aria-hidden", "false");
    showGalleryImage(0);
});

document.querySelectorAll(".gallery-preview img").forEach((image, index) => {
    image.addEventListener("click", () => {
        galleryModal.classList.add("is-open");
        galleryModal.setAttribute("aria-hidden", "false");
        showGalleryImage(index);
    });
});

document.getElementById("closeGallery").addEventListener("click", closeGallery);
document.getElementById("previousImage").addEventListener("click", () => {
    showGalleryImage(currentImage - 1);
});
document.getElementById("nextImage").addEventListener("click", () => {
    showGalleryImage(currentImage + 1);
});

galleryModal.addEventListener("click", (event) => {
    if (event.target === galleryModal) {
        closeGallery();
    }
});

document.addEventListener("keydown", (event) => {
    if (!galleryModal.classList.contains("is-open")) {
        return;
    }

    if (event.key === "ArrowLeft") {
        showGalleryImage(currentImage - 1);
    } else if (event.key === "ArrowRight") {
        showGalleryImage(currentImage + 1);
    } else if (event.key === "Escape") {
        closeGallery();
    }
});

const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

function updateMusicToggle() {
    const isPlaying = !weddingMusic.paused;
    musicToggle.innerHTML = isPlaying ? "&#128266;" : "&#128263;";
    musicToggle.setAttribute("aria-label", isPlaying ? "Tắt nhạc" : "Bật nhạc");
    musicToggle.title = isPlaying ? "Tắt nhạc" : "Bật nhạc";
}

function playWeddingMusic() {
    weddingMusic.play().catch(() => {
        updateMusicToggle();
    });
}

playWeddingMusic();

document.addEventListener("click", (event) => {
    if (event.target !== musicToggle) {
        playWeddingMusic();
    }
}, { once: true });

musicToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (weddingMusic.paused) {
        playWeddingMusic();
    } else {
        weddingMusic.pause();
    }

    updateMusicToggle();
});

weddingMusic.addEventListener("play", updateMusicToggle);
weddingMusic.addEventListener("pause", updateMusicToggle);
updateMusicToggle();