import {comics} from "../comics.js";

let pageIndex = 0;
function getChaptersHtml(chapters) {
    let html='';

    chapters.forEach((chapter)=>{
        html += `<li class="chapter">
                <a class="chapter-name" href="https://www.nettruyenff.com/truyen-tranh/${chapter.link}">
                Chapter ${chapter.number}</a>
                <i class="time chapter-time-black">${chapter.time}</i>
            </li>`
    })

    return html
}

export function renderComics(pageIndex) {
    let itemsHtml = ''
    comics.splice(pageIndex, 36).forEach((comic)=>{
        let html =
            `<div class="item">
        <div>
            <a class="comic-image-container" href="https://www.nettruyenff.com/truyen-tranh/${comic.link}">
                <img class="comic-image" src="../../images/comics/${comic.image}"/>
                <div class="view">
                    <div class="view-panel">
                        <i class="fa fa-eye"> 53M</i>
                        <i class="fa fa-comment"> 17K</i>
                        <i class="fa fa-heart"> 83k</i>
                    </div>
                </div>
            </a>
        </div>

        <h3 class="comic-name-title"><a class="comic-name" 
        href="https://www.nettruyenff.com/truyen-tranh/${comic.link}">${comic.name}</a></h3>

        <ul class="comic-item">
            ${getChaptersHtml(comic.chapters.reverse().splice(0, 3))}
        </ul>

    </div>`

        itemsHtml += html;
    })

    document.querySelector('.items').innerHTML = itemsHtml;
}

export function renderPagesNavigation(pageIndex) {
    let pageHtml = ''
    for (let i = 1; i < comics.length/36+1; i++) {
        pageHtml +=`<li><a class="page${i}" href="../../nettruyenclone/index.html?page=${i}">${i}</a></li>`
    }

    document.querySelector('.pages').innerHTML = pageHtml;
}