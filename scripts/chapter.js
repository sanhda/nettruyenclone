import {addHistoryComic, removeHistoryComic} from "./history.js";
import {renderAllContents} from "./index.js"

export class Chapter {
    constructor(id, comicId, number, time, link='') {
        this.id = id;
        this.comicId = comicId;
        this.number = number;
        this.time = time;
        this.link = link;
    }
}

export function chapterClicked(event) {
    addHistoryComic(event.target.dataset.comicId, event.target.dataset.chapterId);
    renderAllContents();
}

// get target chapter from comic id
export function getChapterById(comic, chapterId) {
    for (let chapter of comic.chapters) {
        if (chapterId === chapter.id) {
            return chapter;
        }
    }

    return null;
}

//get chapters by ids
export function getChapterByIds(comic, chapterIds) {
    let chapters = [];
    chapterIds.forEach((chapterId) => {
        let chapter = getChapterById(comic, chapterId);
        if (chapter) {chapters.push(chapter)}
    })

    return chapters;
}

//get last chapters
export function getLastChapter(chapters) {
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

//delete chapter
export function chapterDeleted(event) {
    removeHistoryComic(event.target.dataset.comicId);
    renderAllContents();
}