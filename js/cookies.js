document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault()
    let notification = document.getElementById("cookiesNotification");
    
    if (!localStorage.getItem("cookiesAccepted")) {
        notification.classList.remove("hidden");
    } else {
        notification.classList.add("hidden");
    }
});

function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookiesNotification").classList.add("hidden");
}