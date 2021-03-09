document.getElementById('signin').style.display = "none"

function showform() {
    if (document.getElementById('show').style.display == "block") {
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