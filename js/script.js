$(document).ready(function(){
    /* ---- Countdown timer ---- */

    // Calcula la fecha de finalización (por ejemplo, 2023-12-31).
    var endDate = new Date("2023-11-25T21:00:00");

    // Calcula la diferencia en milisegundos entre la fecha final y la fecha actual.
    var timeDiffMilliseconds = endDate - new Date();

    // Inicializa el contador con la diferencia de tiempo calculada.
    $('#counter').countdown({
        timestamp: (new Date()).getTime() + timeDiffMilliseconds
    });
});
