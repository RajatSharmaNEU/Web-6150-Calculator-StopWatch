$(document).ready(() => {
    let displayHours = 0, displayMinutes = 0, displaySeconds = 0;
    let hours = 0, minutes = 0, seconds = 0;
    let timeoutId = null;

    const stop = $('#stop');
    const start = $('#start');
    const reset = $('#reset');
    const stopwatch = $('#stopwatch');

    const timer = () => {
        seconds++;
        if (seconds / 60 === 1) {
            minutes++;
            seconds = 0;

            if (minutes / 60 === 1) {
                hours++;
                minutes = 0;
            }
        }

        if (seconds < 10) {
            displaySeconds = "0" + seconds.toString();
        } else {
            displaySeconds = seconds.toString();
        }

        if (minutes < 59) {
            displayMinutes = "0" + minutes.toString();
        } else {
            displayMinutes = minutes.toString();
        }

        if (hours < 59) {
            displayHours = "0" + hours.toString();
        } else {
            displayHours = hours.toString();
        }

        stopwatch.text(displayHours + ":" + displayMinutes + ":" + displaySeconds);
    }


    start.click(() => {
        timeoutId = window.setInterval(timer, 1000);
        start.prop("disabled", true);
        stop.prop("disabled", false);
    })

    stop.click(() => {
        timeoutId = window.clearInterval(timeoutId);
        start.prop("disabled", false);
        stop.prop("disabled", true);
    })

    reset.click(() => {
        window.clearInterval(timeoutId);
        seconds = 0;
        minutes = 0;
        hours = 0;

        stopwatch.text("00:00:00");

        start.prop("disabled", false);
        stop.prop("disabled", true);
    })
});