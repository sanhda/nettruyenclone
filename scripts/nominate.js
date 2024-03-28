const getNominateIndex = ()=>{
    let root = document.querySelector(':root');
    let style = getComputedStyle(root);
    return style.getPropertyValue('--nominate-index')
}

const setNominateIndex = (value) => {
    let root = document.querySelector(':root');
    root.style.setProperty('--nominate-index', value);
}

const getItemRatio = () => {
    let itemList = document.querySelector('.nominate-items');
    let item = document.querySelector('.nominate-item');
    return itemList.clientWidth/2/item.clientWidth
}

export function prev() {
    // get nominate index variable from root
    let nominateIndex = getNominateIndex();

    // check nominate index value
    nominateIndex--;
    if (nominateIndex <= 0) {nominateIndex=0}

    // set nominate index
    setNominateIndex(nominateIndex)

}

export function next() {
    // get nominate index variable from root
    let nominateIndex = getNominateIndex();

    // check nominate index value
    if (nominateIndex >= getItemRatio()-1) {
        nominateIndex = 0;
    } else {
        nominateIndex++;
    }

    // set nominate index
    setNominateIndex(nominateIndex)

}

window.prev = prev;
window.next = next
setInterval(next, 2000);