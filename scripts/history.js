import {comics} from "./comics.js";

export function getHistoryComics() {
    let history = []
    history = comics.splice(0, 3)
    return history;
}