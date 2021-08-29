export function smoothscroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionTo = this.getAttribute('href');
            const offsetTop = document.querySelector(sectionTo).offsetTop;
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // *only* if we have anchor on the url
    if (window.location.hash) {
        window.scroll(0, 0);
        // smooth scroll to the anchor id
        const sectionTo = this.getAttribute(window.location.hash);
        const offsetTop = document.querySelector(sectionTo).offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
