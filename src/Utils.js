export const setNavContainerSize = () => {
    let nav_container = document.getElementsByClassName("sidenav---sidenav---_2tBP")[0];
    let page_container_height = document.getElementsByClassName("page-container")[0].clientHeight;
    let nav_container_height = nav_container.clientHeight;
    // + 64 to make up the margin that the function bar pushes the page content down by
    let new_height = nav_container_height + (page_container_height - nav_container_height) + 64
    nav_container.setAttribute("style","height: " + new_height + "px");
}

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

export const setPageResponsiveCSSValues = () => {
    setPageContentMargin();
    setNavContainerSize();
}