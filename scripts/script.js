document.getElementById('menuToggle').addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobileMenu');
    console.log("got event");
    event.stopPropagation();
    console.log("stopped prop");
    mobileMenu.classList.toggle('mobileMenuVisible');
    //mobileMenu.style.display = (mobileMenu.stylwhitee.display === 'block' ? 'none' : 'block');
}
);

window.addEventListener('click', function(event) {
    var mobileMenu = document.getElementById('mobileMenu');
    console.log("got window event");
    if (mobileMenu.classList.contains('mobileMenuVisible') && event.target !== mobileMenu && !mobileMenu.contains(event.target)) {
        console.log("removing settings");
        mobileMenu.classList.remove('mobileMenuVisible');
    }
});