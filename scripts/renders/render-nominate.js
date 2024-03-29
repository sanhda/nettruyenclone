import {comics} from "../comics.js";
import {next} from "../nominate.js"

// get an amount of random comic from comics
function getRandomComics(comics, amount=5) {
    let randomComic = []

    while (randomComic.length < amount) {
        let comic = comics[Math.floor(Math.random()*comics.length)];
        if (randomComic.indexOf(comic) === -1) {
            randomComic.push(comic);
        }
    }
    return randomComic
}

export function renderNominate() {
    let nominateHtml = ''
    getRandomComics(comics, 10).forEach((comic) => {
            nominateHtml += `
    <div class="nominate-item">
        <a href="">
            <img class="nominate-image" src="../../images/comics/${comic.image}"/>
        </a>
        <div class="slide-caption">
            <a style="font-size: 15px" href="">${comic.name}</a>
            <div style="margin-top: 8px" class="slide-caption-chapter">
                <a style="font-size: 13px" href="${comic.link}">Chapter ${[...comic.chapters].reverse()[0].number}</a>
                <i style="font-size: 11px" class="time chapter-time">11 phút trước</i>
            </div>
        </div>
    </div>`
        }
    )

    nominateHtml += `<a class="prev" href="#" onclick="prev()"></a>
                <a class="next" href="#" onclick="next()"></a>`

    document.querySelector('.nominate-items').innerHTML = nominateHtml;
}
