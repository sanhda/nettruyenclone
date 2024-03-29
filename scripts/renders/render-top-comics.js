import {comics, topComics} from "../comics.js";

function formatRank(rank) {
    return (rank < 10) ? '0' + rank : rank
}
export function renderTopComics() {
    let topComicHtml = ''
    topComics.forEach((comic)=>{
        let html = `
    <ul class="top-comic-rows">
        <li class="top-comic">
            <span class="txt-rank rank-${topComics.indexOf(comic)+1}">
                ${formatRank(topComics.indexOf(comic)+1)}</span>
            <div class="top-comic-item">
                <a href="https://www.nettruyenff.com/truyen-tranh/${comic.link}">
                    <img class="comic-image-small" src="../../images/comics/${comic.image}"/>
                </a>
                <div class="top-comic-detail">
                    <a href="https://www.nettruyenff.com/truyen-tranh/${comic.link}" class="top-comic-name">${comic.name}</a>
                    <div class="top-comic-chapter-container">
                        <a class="top-comic-chapter" 
                        href="https://www.nettruyenff.com/truyen-tranh/${[...comic.chapters].reverse()[0].link}">
                            Chapter ${[...comic.chapters].reverse()[0].number}</a>
                        <i class="fa fa-eye black-icon"> 22M</i>
                    </div>
                </div>
            </div>
        </li>
    </ul>`

        topComicHtml += html;
    })

    document.querySelector('.top-comic-container').innerHTML = topComicHtml;
}
