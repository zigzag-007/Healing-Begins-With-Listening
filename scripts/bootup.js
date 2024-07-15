document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 1300); // Adjust the time (2000ms = 2 seconds) as needed
});
