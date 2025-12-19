
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const body = document.body;

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenuIcon.textContent = 'menu';
    } else {
        mobileMenuIcon.textContent = 'close';
    }
});
