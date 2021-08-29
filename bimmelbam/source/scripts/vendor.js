// import bootstrap components from node_modules folder
// see https://getbootstrap.com/docs/5.1/getting-started/webpack/
import { Tooltip } from 'bootstrap';

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
});
