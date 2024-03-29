function saveMode(mode) {
    localStorage.setItem("Mode", mode);
}

function lightMode() {
    let mainContent = $('.main-content');
    mainContent.css('--text-color', 'black');
    mainContent.css('--background-color', 'white');
    mainContent.css('--second-background-color', '#ddd');
    mainContent.css('--title-color', 'blue');
    saveMode('light')
}

function darkMode() {
    let mainContent = $('.main-content');
    mainContent.css('--text-color', 'white');
    mainContent.css('--background-color', '#1a1a1a');
    mainContent.css('--second-background-color', 'black');
    mainContent.css('--title-color', '#ff9601');
    saveMode('dark')
}

export function toggleDarkMode() {
    if ($('.main-content').css('--background-color') === 'white') {
        darkMode();
    } else {lightMode();}
}

export function loadDarkMode() {
    if (localStorage.getItem("Mode") === 'dark') {
        darkMode();
    } else {lightMode();}
}
