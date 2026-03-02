// Membuat efek balon melayang
function createBalloons() {
    const container = document.getElementById('balloonContainer');
    const colors = ['🎈', '✨', '☁️']
    
    for (let i = 0; i < 35; i++) {
        let b = document.createElement('div');
        b.className = 'balloon';
        b.innerText = colors[Math.floor(Math.random() * colors.length)];
        b.style.left = Math.random() * 100 + 'vw';
        b.style.animationDuration = (Math.random() * 5 + 7) + 's';
        b.style.animationDelay = (Math.random() * 10) + 's';
        b.style.fontSize = (Math.random() * 20 + 20) + 'px';
        container.appendChild(b);
    }
}

const openBtn = document.getElementById('openBtn');
const flash = document.getElementById('flash');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
    // Efek Sinar Terang
    flash.classList.add('flash-active');
    
    setTimeout(() => {
        modal.style.display = 'flex';
        setTimeout(() => {
            flash.classList.remove('flash-active');
        }, 300);
    }, 400); 
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

createBalloons();