document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // STOPWATCH VARIABLES
    // ==============================
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;
    let lapCount = 1;
    let isPaused = false;

    // DOM Elements
    const display = document.getElementById("display");
    const startBtn = document.getElementById("startBtn");
    const lapBtn = document.getElementById("lapBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const lapList = document.getElementById("lapList");

    // ==============================
    // FORMAT TIME (HH:MM:SS:MS)
    // ==============================
    function formatTime(ms) {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return (
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0") + ":" +
            String(milliseconds).padStart(2, "0")
        );
    }

    // ==============================
    // UPDATE DISPLAY (REAL TIME)
    // ==============================
    function updateDisplay() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }

    // ==============================
    // START / CONTINUE
    // ==============================
    startBtn.addEventListener("click", () => {
        if (timerInterval) return;

        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);

        startBtn.textContent = "Start";
        startBtn.disabled = true;
        lapBtn.disabled = false;
        pauseBtn.disabled = false;
        pauseBtn.textContent = "Pause";
        isPaused = false;
    });

    // ==============================
    // RECORD LAP
    // ==============================
    lapBtn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount++}: ${display.textContent}`;
        lapList.appendChild(li);
    });

    // ==============================
    // PAUSE / RESET
    // ==============================
    pauseBtn.addEventListener("click", () => {

        // PAUSE
        if (!isPaused) {
            clearInterval(timerInterval);
            timerInterval = null;
            isPaused = true;

            pauseBtn.textContent = "Reset";
            startBtn.textContent = "Continue";
            startBtn.disabled = false;
            lapBtn.disabled = true;
            return;
        }

        // RESET
        elapsedTime = 0;
        lapCount = 1;
        display.textContent = "00:00:00:00";
        lapList.innerHTML = "";

        pauseBtn.textContent = "Pause";
        pauseBtn.disabled = true;
        startBtn.textContent = "Start";
        startBtn.disabled = false;
        lapBtn.disabled = true;
        isPaused = false;
    });

});
