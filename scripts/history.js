import {getComicById} from "./comics.js";
import {getChapterByIds} from "./chapter.js";

export class HistoryComic {
    chapterIds = [];

    constructor(comicId, chapterIds=[]) {
        this.comicId = comicId;
        this.chapterIds = chapterIds;
    }

    addNewChapter(chapterId) {
        this.chapterIds.push(chapterId);
    }

    getLastChapter(comic) {
        let chapters = getChapterByIds(comic, this.chapterIds)
        if (!chapters.length) return null;
        let lastChapter = chapters[0];

        chapters.forEach(
            (chapter) => {
                if (chapter.number > lastChapter.number) {
                    lastChapter = chapter;
                }
            })

        return lastChapter;
    }
}

function getTargetHistoryComic(historyComics, comicId) {
    for (let historyComic of historyComics) {
        if (historyComic.comicId === comicId) {
            return historyComic
        }
    }

    return null
}

export function getHistoryComics() {
    let historyComics = [];

    let historyJsons = JSON.parse(localStorage.getItem("historyComics"));

    if (historyJsons) {
        Array.from(historyJsons).forEach((historyJson) => {
            historyComics.push(new HistoryComic(historyJson.comicId, historyJson.chapterIds))
        });
    }

    return historyComics;
}

export function saveHistoryComics(historyComics) {
    localStorage.setItem("historyComics", JSON.stringify(historyComics));
}

export function addHistoryComic(comicId, chapterId) {
    // get from local
    let historyComics = getHistoryComics();

    // get target comic
    let historyComic = getTargetHistoryComic(historyComics, comicId);
    if (!historyComic) {
        historyComic = new HistoryComic(comicId);
        historyComics.push(historyComic);
    }

    // add chapter to comics
    historyComic.addNewChapter(chapterId);

    // save to local
    saveHistoryComics(historyComics);
}

export function removeHistoryComic(comicId) {
    // get from local
    let historyComics = getHistoryComics();

    // get target comic
    let historyComic = getTargetHistoryComic(historyComics, comicId);

    if (historyComic) {
        historyComics.splice(historyComics.indexOf(historyComic), 1)
        // save to local
        saveHistoryComics(historyComics);
    }
}
