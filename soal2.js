
function checkAnswer(option) {
    const result = document.getElementById("result");

    if (option === 4) {
        result.innerHTML = "Benar! Jawabannya adalah Opsi 4. Hello, Bob!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Maaf, jawaban kamu salah. Silakan coba lagi!";
        result.style.color = "red";
    }
}
