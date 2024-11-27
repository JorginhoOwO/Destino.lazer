function filtrarDestinos() {
    const valorInput = document.getElementById('valor').value;
    const destinos = document.querySelectorAll('.destino');

    destinos.forEach(destino => {
        const preco = parseInt(destino.getAttribute('data-preco'), 10);
        if (valorInput && preco <= valorInput) {
            destino.style.display = 'block';
        } else {
            destino.style.display = 'none';
        }
    });
}
