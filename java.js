document.addEventListener('DOMContentLoaded', () => {
    const distribButton = document.getElementById('nos-distrib-btn');
    const otherButtons = document.querySelectorAll('.other-btn');
    const distribElements = document.querySelectorAll('.distrib');
    const magasinElements = document.querySelectorAll('.magasin');

    distribButton.addEventListener('click', () => {
        distribElements.forEach(el => el.style.display = 'none');
        magasinElements.forEach(el => el.style.display = 'none');
    });

    otherButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            distribElements.forEach(el => el.style.display = 'none');
            magasinElements.forEach(el => el.style.display = '');
        });
    });
});