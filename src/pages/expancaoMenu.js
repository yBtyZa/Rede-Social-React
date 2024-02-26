// Define as funções de expansão e contração do menu

export function expandirMenu() {
    const menuLateral = document.getElementById('header');
    const fontMenuLateral = document.querySelectorAll('.dplNone');
    const sectionPerfil = document.getElementById('main');
    const footer = document.getElementById('footer');

    if (menuLateral) {
        menuLateral.style.width = '15vw';
        sectionPerfil.style.marginLeft = '10%';
        sectionPerfil.style.width = 'auto'
        footer.style.marginLeft = '9%';
        
    }

    if (fontMenuLateral) {
        fontMenuLateral.forEach(element => {
            element.style.display = 'initial';
        });
    }
}

export function contrairMenu() {
    const menuLateral = document.getElementById('header');
    const fontMenuLateral = document.querySelectorAll('.dplNone');
    const sectionPerfil = document.getElementById('main');
    const footer = document.getElementById('footer');


    if (menuLateral) {
        menuLateral.style.width = '6vw';
        sectionPerfil.style.marginLeft = '5.5vw';
        footer.style.marginLeft = '0%';
    }

    if (fontMenuLateral) {
        fontMenuLateral.forEach(element => {
            element.style.display = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    expandirMenu();
});
