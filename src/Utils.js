export const setPageContentMargin = () => {
    //todo rather than setting the css values try adding different class names (might make the transition smoother)
    let menu_open = document.getElementsByClassName("sidenav---collapsed---LQDEv")[0];
    let page_container = document.getElementsByClassName('page-container')[0];

    if (menu_open === undefined) {
        page_container.style.marginLeft = "240px";
    } else {
        page_container.style.marginLeft = "64px";
    }
}