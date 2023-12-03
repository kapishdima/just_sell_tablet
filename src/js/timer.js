window.onload = function() {
    var timerDisplay = document.getElementById('timer');
    var seconds = 59;

    function countdown() {
        timerDisplay.textContent = seconds;

        if (seconds > 0) {
            seconds--;
        } else {
            clearInterval(intervalId);
        }
    }

    countdown();
    var intervalId = setInterval(countdown, 1000);
};