document.getElementById('signin').style.display = "none"

function showform() {
    if (document.getElementById('signin').style.display == "none") {
        document.getElementById('show').style.display = "none";
        document.getElementById('signin').style.display = "block";
    }
    else {
        document.getElementById('show').style.display = "block";
        document.getElementById('signin').style.display = "none";
    }
}

document.getElementById('show').addEventListener('click', () => showform())
document.getElementById('hidebtn').addEventListener('click', () => showform())

var sbutton_dom = document.getElementById('sbutton');
sbutton_dom.onclick = fsubmit;

var form = document.getElementById("signin");

function fsubmit(event) {
    event.preventDefault();
    var usrReg = new RegExp("[a-zA-Z]+");
    username = document.getElementById("username").value;
    console.log(username.length)
    if (username.length == 0) {
        alert("Enter username");
        return;
    }
    else if (username.length > 15 || username.length < 2) {
        alert("Username too long or too short");
        return;
    }

    var pwd = document.getElementById("pwd").value;
    if (pwd.length < 8 || pwd.length > 15) {
        alert("Password too long or too short");
        return;
    }

    var email = document.getElementById("mail").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Not a valid e-mail address");
        return;
    }

    form.submit();
}

let buttonRun = document.getElementById("starttimer")
let timerShow = document.getElementById("timer");

var timer;
startedtimer = false;
buttonRun.addEventListener('click', function () {
    timeMinutes = 5 * 60;
    if (startedtimer) {
        clearInterval(timer);
        buttonRun.innerHTML = "Старт"
        startedtimer = false;
    }
    else {
        countdown();
        timer = setInterval(countdown, 1000);
        buttonRun.innerHTML = "Стоп"
        startedtimer = true;
    }
})

function countdown() {
    seconds = timeMinutes % 60
    minutes = timeMinutes / 60 % 60
    if (timeMinutes <= 0) {
        clearInterval(timer);
        alert("Час вийшов");
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinutes;
}

var popCanvas = document.getElementById("popChart");

var barChart = new Chart(popCanvas, {
    type: 'bar',
    options:{scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0
            }
        }]
    }},
    data: {
        labels: ["Пішки", "Офіцери", "Коні", "Тури", "Королеви", "Королі"],
        datasets: [{
            label: 'Фігури',
            data: [8, 1, 2, 2, 2, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ]
            
        }]
    }
});