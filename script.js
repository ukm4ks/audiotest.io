const numStars = 300;
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    document.getElementById('splash-screen').appendChild(star);
    const xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    const speed = Math.random() * 2 + 1;
    star.style.animation = `twinkle ${speed}s linear infinite`;
}

function getRandomPosition() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    return [y, x];
}


