document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('postcard').style.bottom = "-999px"
    document.querySelector('#toggleSound').addEventListener('click', () => toggleSound());
    document.querySelector('#toggleCard').addEventListener('click', () => toggleCard());
    resizeImage();
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    var elem = document.getElementById('postcard');
    if (getComputedStyle(elem).bottom != "-999px") {
        var target = (Math.round(parseInt(getComputedStyle(document.querySelector('.content')).height)*0.1));
        document.getElementById('postcard').style.bottom = target + "px";
    }
    resizeImage()
});

$('.content').one("click", function () { 
    document.getElementById('audio').play();
    document.querySelector('#toggleSound').style.width = "40px";
    document.querySelector('#toggleSound').style.marginLeft = "18px";
    document.querySelector('#toggleSound').disabled = false;
});

document.querySelector('.content').addEventListener('click', () => {
    confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
        x: event.clientX/$(window).width() ,
        // since they fall down, start a bit higher than random
        y: event.clientY/$(window).height()
    }
    });
});

function toggleSound() {
    var audioElem = document.getElementById('audio');
    if (audioElem.muted == true) {
        document.querySelector('#toggleSound').innerHTML = `<i class='fas fa-volume-up'></i>`;
        audioElem.muted = false;
    } else {
        document.querySelector('#toggleSound').innerHTML = `<i class="fas fa-volume-mute"></i>`;
        audioElem.muted = true;
    }
}

function toggleCard() {
    var elem = document.getElementById('postcard');
    if (getComputedStyle(elem).bottom == "-999px") {
        var target = (Math.round(parseInt(getComputedStyle(document.querySelector('.content')).height)*0.1));
        elem.style.bottom = target + "px";
        document.querySelector('#message').innerHTML=`Merry Christmas!
                        <br><br>Panda is very happy to have experienced 2024 with the Platypus. Pandas and Platypuses did so many fun things this year, like building the gingerbread houses, going to the Christmas markets, and starting the Platypus and Panda bookclub! Panda looks forward to the next year of adventures and cuddles with the Platypus <3
                        <br><br>Love, the Qiwis`
    } else {
        elem.style.bottom= "-999px";
    }
}

function resizeImage() {
    if ($(window).width()/$(window).height() <= 2/3) {
        document.getElementById("hero").style.height = "auto";
        document.getElementById("hero").style.width = "85%";
    }
    else {
        document.getElementById("hero").style.width = "auto";
        document.getElementById("hero").style.height = "85%";
    }
}