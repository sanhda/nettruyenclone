import {getHistoryComics} from "../history.js";

export function renderHistory(pageIndex) {
    let historyHtml = ''
    getHistoryComics().forEach((comic)=>{
        let html =
            `<div class="history-item">
                <a href="#">
                    <img class="comic-image-small" src="../../images/comics/${comic.image}"/>
                </a>

                <div class="history-item-info">
                    <div class="history-comic-detail">
                        <a href="#" class="top-comic-name">${comic.name}</a>
                        <a class="history-comic-chapter" href="#">Đọc tiếp Chapter </a>
                    </div>
                    <a class="delete-history-item" href="#">
                        <i class="fa fa-times"></i> Xóa
                    </a>
                </div>
            </div>`

        historyHtml += html;
    })

    document.querySelector('.history-items').innerHTML = historyHtml;
}