import { smoothscroll } from './smoothscroll';

// import demo module
import fooFighters from './demo-modules/foo-fighters';

/* global alert */
export function testme() {
    alert('hi!');
}

// on document ready
document.addEventListener('DOMContentLoaded', function() {
    // Learn to Fly!
    console.dir(fooFighters);
});

smoothscroll();
