const d = document;


export default function collapseMenu(id) {
    const bsCollapse = new bootstrap.Collapse(id, {
        toggle: false
    })
    d.addEventListener('click', e => {

        if (!e.target.matches(".navbar a")) return false

        bsCollapse.hide();

    })
};