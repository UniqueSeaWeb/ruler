// 画面幅を取得する関数
function getScreenWidth() {
    return document.documentElement.clientWidth;
}

// 画面高を取得する関数
function getScreenHeight() {
    return document.documentElement.clientHeight;
}

function displayScreenSize(screenWidth, screenHeight) {
    const horizontal_size = document.getElementById('horizontal_size');
    const vertical_size = document.getElementById('vertical_size');

    horizontal_size.innerText = screenWidth;
    vertical_size.innerText = screenHeight;
}

function displayRuler(screenWidth, screenHeight) {
    const horizontal = document.getElementById('horizontal');
    const vertical = document.getElementById('vertical');

    for (let i = 0; i < Math.floor(screenWidth / 10); i++) {
        const horizontal_square = document.createElement('div');
        horizontal_square.classList.add('square');
        horizontal.appendChild(horizontal_square);

        if (i % 5 == 4) {
            const ruler_num = document.createElement('p');
            ruler_num.classList.add('ruler_num');
            ruler_num.innerText = (i + 1) * 10;
            horizontal_square.appendChild(ruler_num);
        }
    }

    for (let j = 0; j < Math.floor(screenHeight / 10); j++) {
        const vertical_square = document.createElement('div');
        vertical_square.classList.add('square');
        vertical.appendChild(vertical_square);

        if (j % 5 == 4) {
            const ruler_num = document.createElement('p');
            ruler_num.classList.add('ruler_num');
            ruler_num.innerText = (j + 1) * 10;
            vertical_square.appendChild(ruler_num);
        }
    }
}

function resetRuler() {
    const horizontal = document.getElementById('horizontal');
    const vertical = document.getElementById('vertical');

    horizontal.innerHTML = '';
    vertical.innerHTML = '';
}

// 画面読込時の処理
window.addEventListener('load', function () {
    const screenWidth = getScreenWidth();
    const screenHeight = getScreenHeight();

    displayScreenSize(screenWidth, screenHeight);
    displayRuler(screenWidth, screenHeight);
});

// 画面リサイズ時の処理
window.addEventListener('resize', function () {
    const screenWidth = getScreenWidth();
    const screenHeight = getScreenHeight();

    displayScreenSize(screenWidth, screenHeight);
    resetRuler();
    displayRuler(screenWidth, screenHeight);
});