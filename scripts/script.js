document.getElementById('menuToggle').addEventListener('click', function() {
    var navItems = document.getElementById('navbar').querySelector('ul');
    navItems.style.display = navItems.style.display === 'block'? 'none' : 'block';
}
);