
function checkAnswer() {

    const answers = document.querySelectorAll(
        'input[name="answer"]:checked'
    );

    const result = document.getElementById("result");

    const selected = Array.from(answers).map(
        answer => answer.value
    );

    // Jawaban benar adalah opsi 1 dan 4
    if (
        selected.length === 2 &&
        selected.includes("1") &&
        selected.includes("4")
    ) {

        result.innerHTML =
            "✓ BENAR! Kedua jawaban kamu tepat.";

        result.style.color = "green";

    } else {

        result.innerHTML =
            "✗ Jawaban belum tepat. Silakan coba lagi!";

        result.style.color = "red";

    }
}
