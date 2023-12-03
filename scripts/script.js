document.getElementById('menuToggle').addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobileMenu');

    event.stopPropagation();
    return;
    mobileMenu.style.display = (mobileMenu.style.display === 'block' ? 'none' : 'block');
}
);

window.addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobileMenu');
    console.log("got window event");
    return;
    if (mobileMenu.style.display === 'block' && event.target !== mobileMenu && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
    }
});