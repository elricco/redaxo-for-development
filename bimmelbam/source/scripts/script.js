
// import demo module
import fooFighters from './demo-modules/foo-fighters';

// on document ready
$(function() {
    // enable bootstrap tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Learn to Fly!
    console.dir(fooFighters);
});
