function openSupport() {
    var supportChat = document.getElementById("supportChat");
    supportChat.style.display = "block";
    supportChat.classList.add("chat-open");

    var openButton = document.querySelector(".open-button");
    openButton.classList.add("hidden");
}

function closeSupport() {
    var supportChat = document.getElementById("supportChat");
    supportChat.classList.remove("chat-open");
    
    setTimeout(function() {
        supportChat.style.display = "none";
    }, 300); // Задержка, соответствующая времени анимации (0.3 секунды)

    var openButton = document.querySelector(".open-button");
    openButton.classList.remove("hidden");
}
