// Função para abrir o modal
function openModal(imgSrc, title, description) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = "images/" + imgSrc;
    document.getElementById("caption").innerHTML = `<strong>${title}</strong><br>${description}`;
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Função para rolar até o topo
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave até o topo
    });
});