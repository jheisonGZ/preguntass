const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

// Acción al hacer clic en el botón 'SI'
yesBtn.addEventListener('click', function () {
    alert('¡Si! ¡Yo también quiero salir contigo! ');
    alert('¡Que tengas un día maravilloso! ');
});

// Movimiento aleatorio del botón 'NO' al pasar el mouse
noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 80; // Movimiento en X
    const randomY = Math.random() * 80; // Movimiento en Y
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
