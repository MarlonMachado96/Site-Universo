document.addEventListener('DOMContentLoaded', () => {
    
    const addContentButton = document.getElementById('addContent');
    const changeColorButton = document.getElementById('changeColor');
    const hoverEffectButton = document.getElementById('hoverEffect');
    const toggleImageButton = document.getElementById('toggleImage');
    const dynamicContentDiv = document.getElementById('dynamicContent');
    const imagem1 = document.getElementById('dragaosinho');

    addContentButton.addEventListener('click', () => {
        const newContent = document.createElement('p');
        newContent.textContent = 'Conteúdo adicionado dinamicamente!';
        dynamicContentDiv.appendChild(newContent);
    });

    hoverEffectButton.addEventListener('mouseover', () => {
        hoverEffectButton.classList.add('hovered');
    });

    hoverEffectButton.addEventListener('mouseout', () => {
        hoverEffectButton.classList.remove('hovered');
    });

    

    toggleImageButton.addEventListener('click', () => {
        if (dragaosinho.style.display === 'none') {
            dragaosinho.style.display = 'block';
        } else {
            dragaosinho.style.display = 'none';
        }
    });
});

