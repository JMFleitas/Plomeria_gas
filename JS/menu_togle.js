const d = document;


export default function collapseMenu(id) {
    const bsCollapse = new bootstrap.Collapse(id, {
        toggle: false
    })
    d.addEventListener('click', e => {

        if (!e.target.matches(".navbar .nav-link || .navbar .dropdown-item")) return false

        bsCollapse.hide();

    })
};