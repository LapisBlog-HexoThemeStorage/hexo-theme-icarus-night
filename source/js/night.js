/**
 * Icarus 夜间模式 by iMaeGoo
 * https://www.imaegoo.com/
 */ 
var isNight = localStorage.getItem('night');
var nightNav;
var nightIcon;

function applyNight(value) {
    if (value) {
        document.body.className += ' night'
        if (nightIcon) {
            nightIcon.className = nightIcon.className.replace(/ fa-moon/g, '') + ' fa-lightbulb'
        }
    } else {
        document.body.className = document.body.className.replace(/ night/g, '')
        if (nightIcon) {
            nightIcon.className = nightIcon.className.replace(/ fa-lightbulb/g, '') + ' fa-moon'
        }
    }
}

function findNightIcon() {
    nightNav = document.getElementById('night-nav');
    nightIcon = document.getElementById('night-icon');
    if (!nightNav || !nightIcon) {
        setTimeout(findNightIcon, 100);
    } else {
        nightNav.addEventListener('click', switchNight);
        if (isNight) {
            nightIcon.className = nightIcon.className.replace(/ fa-moon/g, '') + ' fa-lightbulb'
        } else {
            nightIcon.className = nightIcon.className.replace(/ fa-lightbulb/g, '') + ' fa-moon'
        }
    }
}

function switchNight() {
    isNight = !isNight;
    applyNight(isNight);
    localStorage.setItem('night', isNight);
}

findNightIcon();
applyNight(isNight);
