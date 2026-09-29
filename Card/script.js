/* =========================================================
   ALPINIST - script.js
   ---------------------------------------------------------
   This JavaScript controls the mobile navigation menu.

   MANUAL CHANGE:
   - mobile-menu-btn = the mobile menu button ID.
   - mobile-menu = the mobile navigation ID.
   - Keep these IDs matching the HTML.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }
});