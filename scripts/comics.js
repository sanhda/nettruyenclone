import {Chapter} from "./chapter.js";

export class Comic {
    chapters = []
    constructor(id, name, image, link='') {
        this.id = id;
        this.name = name;
        this.image = image;
        this.link = link;
    }

    addChapter(chapter) {
        this.chapters.push(chapter);
    }

    sortChapters() {
        this.chapters = this.chapters.sort((chapterA, chapterB) => {
            return chapterA.number - chapterB.number;
        })
    }

    addChapters(chapters) {
        this.chapters.concat(chapters);
    }

    removeChapter(chapter) {
        if (this.chapters.includes(chapter)) {
            this.chapters.remove(chapter)
        }
    }

}

function randomId() {
    return "id" + Math.random().toString(16).slice(2)
}

// resetLocalStorage();
export let comics = getAllComics();
if (!comics.length) {manuallyAddComics()}

// this function use to define default comics with 4 chapters.
// note: This function use for testing only
function addDefaultComic(name, image, link='dai-quan-gia-la-ma-hoang-219482') {
    let default_comic = new Comic(randomId(), name, image, link)

    let number = Math.floor(Math.random()*500);
    for (let i = 1; i < 5; i++) {
        default_comic.addChapter(new Chapter(randomId(), default_comic.id, number++, '20 phút trước',
            'dai-quan-gia-la-ma-hoang/chap-0/459973'))
    }

    default_comic.sortChapters();
    comics.push(default_comic);
}

// get target comic from comic id
export function getComicById(comicId) {
    for (let comic of comics) {
        if (comicId === comic.id) {
            return comic;
        }
    }

    return null;
}

//manually add comics
function manuallyAddComics() {
    for (let i = 0; i < 19; i++) {
        addDefaultComic( 'Đại Tượng Vô Hình', 'dai-tuong-vo-hinh-4411.jpg')

        addDefaultComic( 'Lạn Kha Kỳ Duyên', 'lan-kha-ky-duyen.jpg')

        addDefaultComic( 'Đại Quản Gia Là Ma Hoàng', 'dai-quan-gia-la-ma-hoang-904.jpg')

        addDefaultComic( 'Thiên Quỷ Chẳng Sống Nổi Cuộc Đời Bình Thường',
            'thien-quy-chang-song-noi-cuoc-doi-binh-t-4774.jpg')

        addDefaultComic( 'Anh Hùng Onepunch', 'anh-hung-onepunch-5074.jpg')

        addDefaultComic( 'Người Trên Vạn Người', 'nguoi-tren-van-nguoi.jpg')

        addDefaultComic( 'Vạn Cổ Tối Cường Tông', 'van-co-toi-cuong-tong.jpg')

        addDefaultComic( 'Cường Giả Đến Từ Trại Tâm Thần', 'cuong-gia-den-tu-trai-tam-than.jpg')

        addDefaultComic( 'Đăng Nhập Murim', 'dang-nhap-murim.jpg')

        addDefaultComic( 'Ta Là Tà Đế', 'ta-la-ta-de-3254.jpg')

        addDefaultComic( 'Nguyên Tôn', 'nguyen-ton.jpg')

        addDefaultComic( 'Tinh Giáp Hồn Tướng', 'tinh-giap-hon-tuong-9306.jpg')

        addDefaultComic( 'Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm',
            'dinh-cap-khi-van-lang-le-tu-luyen-ngan-n-4183.jpg')

        addDefaultComic( 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện',
            'ta-troi-sinh-da-la-nhan-vat-phan-dien-2184.jpg')

        addDefaultComic( 'Người Nuôi Rồng', 'nguoi-nuoi-rong.jpg')

        addDefaultComic( 'Chưởng Môn Khiêm Tốn Chút', 'chuong-mon-khiem-ton-chut.jpg')

        addDefaultComic( 'Chuyển Sinh Thành Liễu Đột Biến',
            'chuyen-sinh-thanh-lieu-dot-bien-4066.jpg')

        addDefaultComic( 'Hoa Sơn Tái Xuất', 'hoa-son-tai-xuat.jpg')

        addDefaultComic( 'Võ Luyện Đỉnh Phong', 'vo-luyen-dinh-phong-9068.jpg')
    }

    saveAllComics(comics);
}

export function getAllComics() {
    let allComics = JSON.parse(localStorage.getItem("AllComics"));
    if (!allComics) {
        allComics = []
    }
    return allComics;
}

export function saveAllComics() {
    localStorage.setItem("AllComics", JSON.stringify(comics));
}

function resetLocalStorage() {
    localStorage.removeItem("AllComics");
    localStorage.removeItem("historyComics");
}

export let topComics = comics.slice(0, 10)

