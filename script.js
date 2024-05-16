function openSupport() {
    var supportChat = document.getElementById("supportChat");
    supportChat.classList.add("chat-open"); // Добавляем класс для плавного появления
    setTimeout(function() {
        supportChat.style.display = "block";
    }, 10); // Добавляем небольшую задержку перед показом окна
    document.querySelector(".open-button").classList.add("hidden"); // Скрываем кнопку открытия
}

function closeSupport() {
    var supportChat = document.getElementById("supportChat");
    supportChat.classList.remove("chat-open"); // Удаляем класс для плавного исчезновения
    setTimeout(function() {
        supportChat.style.display = "none";
    }, 300); // Добавляем задержку перед скрытием окна
    document.querySelector(".open-button").classList.remove("hidden"); // Показываем кнопку открытия
}
