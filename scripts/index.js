import {renderComics, renderPagesNavigation} from "./renders/render-comics.js";
import {renderTopComics} from "./renders/render-top-comics.js";
import {renderNominate} from "./renders/render-nominate.js"
import {renderHistory} from "./renders/render-history.js";

function myFunction() {
    // Get the header
    let header = document.querySelector(".nav-main-menu-container");

    // Get the offset position of the navbar
    let sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
window.myFunction = myFunction

function getActivePage() {
    const searchParams = new URLSearchParams(window.location.search);

    let pageIndex=0;
    if (searchParams.has('page')) {
        pageIndex = searchParams.get('page')-1
    }

    return pageIndex;
}

function changeActivePage(pageIndex) {

    //remove class
    let activePage = document.querySelector('.page-active');
    if (activePage) {activePage.classList.remove('page-active')}

    //add class
    document.querySelector('.page' + (pageIndex+1)).classList.add('page-active')
}

function renderAllContents() {

    //find active page
    renderPagesNavigation()
    let pageIndex = getActivePage();
    changeActivePage(pageIndex)

    //render contents
    renderNominate()
    renderComics(pageIndex)
    renderHistory()
    renderTopComics()
}

renderAllContents();

