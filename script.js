function updateClock() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var year = now.getFullYear();
    var dateString = day + '/' + month + '/' + year;
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
}
setInterval(updateClock, 1000);
