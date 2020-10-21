function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector('#avatar');
const coin = document.querySelector('#coin');
const result = document.querySelector('#result');
const btn = document.querySelector('#btn');
btn.style.visibility = 'hidden';

window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowUp' || e.key === 'Up') {
        arrowUpDown(avatar, -50);
    }
    else if (e.key === 'ArrowDown' || e.key === 'Down') {
        arrowUpDown(avatar, 50);
    }
    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        arrowLeftRight(avatar, -50);
    }
    else if (e.key === 'ArrowRight' || e.key === 'Right') {
        arrowLeftRight(avatar, 50);
    }

    if (isTouching(avatar, coin)) {
        moveCoin();
        let parsedResult = parseInt(result.innerText);
        parsedResult = parsedResult + 1
        result.innerText = parsedResult
        btn.style.visibility = 'hidden';
        if (result.innerText == 10) {
            document.body.style.backgroundImage = "url('images/last_thumb1477530443-removebg-preview.png')";
            document.body.style.backgroundColor = 'Gold'
            coin.style.visibility = 'hidden';
            result.style.visibility = 'hidden';
            btn.style.visibility = 'visible';
        }
        if (btn.addEventListener('click', function () {
            moveCoin();
            document.body.style.backgroundImage = "url('')";
            document.body.style.backgroundColor = 'white'
            coin.style.visibility = 'visible';
            result.innerText = 0
            result.style.visibility = 'visible';
        }));
    }
});

const arrowUpDown = (avatar, amount) => {
    const currValue = extractNum(avatar.style.top);
    avatar.style.top = `${currValue + amount}px`
}
const arrowLeftRight = (avatar, amount) => {
    const currValue = extractNum(avatar.style.left);
    avatar.style.left = `${currValue + amount}px`
}

const extractNum = (string) => {
    if (!string) return 200;
    return parseInt(string.slice(0, -2));
}

const moveCoin = () => {
    const randomWidth = Math.floor(Math.random() * window.innerWidth);
    const randomHeight = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${randomHeight}px`
    coin.style.left = `${randomWidth}px`
}
moveCoin();

