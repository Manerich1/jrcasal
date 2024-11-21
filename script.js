// Função para abrir o modal
function openModal(imgSrc, title, description) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = "images/" + imgSrc;
    captionText.innerHTML = "<h2>" + title + "</h2><p>" + description + "</p>";

    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
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