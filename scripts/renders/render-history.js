import {getHistoryComics} from "../history.js";
import {getComicById} from "../comics.js";
import {chapterDeleted} from "../chapter.js"

export function renderHistory(pageIndex) {
    let historyHtml = ''
    getHistoryComics().forEach((historyComic)=>{
        let comic = getComicById(historyComic.comicId);
        let lastChapter = historyComic.getLastChapter(comic);
        let lastChapterNumber = (lastChapter) ? lastChapter.number : 0;

        let html =
            `<div class="history-item">
                <a href="#">
                    <img class="comic-image-small" src="../../images/comics/${comic.image}"/>
                </a>

                <div class="history-item-info">
                    <div class="history-comic-detail">
                        <a href="#" class="top-comic-name">${comic.name}</a>
                        <a class="history-comic-chapter" href="#">
                            Đọc tiếp Chapter ${lastChapterNumber}</a>
                    </div>
                    <a class="delete-history-item" href="#" data-comic-id="${comic.id}">
                        <i class="fa fa-times"></i> Xóa
                    </a>
                </div>
            </div>`

        historyHtml += html;
    })

    document.querySelector('.history-items').innerHTML = historyHtml;

    addEventForDelete();

    if (!getHistoryComics().length) {
        document.querySelector('.history-container').style.display = 'none';
    }
}

function addEventForDelete() {
    document.querySelectorAll('.delete-history-item').forEach(
        (item) => {
            item.addEventListener('click', chapterDeleted);
        }
    )
}
