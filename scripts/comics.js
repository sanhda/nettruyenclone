export class Comic {
    constructor(id, name, image, chapters, link='') {
        this.id = id;
        this.name = name;
        this.image = image;
        this.chapters = chapters;
        this.link = link;
    }
}

export class Chapter {
    constructor(number, time, link='') {
        this.number = number;
        this.time = time;
        this.link = link;
    }
}

export let comics = [];

//manually add comics
let id = 1;
for (let i = 0; i < 19; i++) {
    comics.push(
        new Comic(id++, 'Đại Tượng Vô Hình', 'dai-tuong-vo-hinh-4411.jpg',
            [new Chapter(410, '20 phút trước'),
                new Chapter(411, '15 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(412, '11 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482'
        )
    )

    comics.push(
        new Comic(id++, 'Lạn Kha Kỳ Duyên', 'lan-kha-ky-duyen.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Đại Quản Gia Là Ma Hoàng', 'dai-quan-gia-la-ma-hoang-904.jpg',
            [
                new Chapter(1, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(2, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(3, '3 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Thiên Quỷ Chẳng Sống Nổi Cuộc Đời Bình Thường', 'thien-quy-chang-song-noi-cuoc-doi-binh-t-4774.jpg',
            [
                new Chapter(4, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(5, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(6, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Anh Hùng Onepunch', 'anh-hung-onepunch-5074.jpg',
            [new Chapter(410, '20 phút trước'),
                new Chapter(411, '15 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(412, '11 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482'
        )
    )

    comics.push(
        new Comic(id++, 'Người Trên Vạn Người', 'nguoi-tren-van-nguoi.jpg',
            [new Chapter(410, '20 phút trước'),
                new Chapter(411, '15 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(412, '11 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482'
        )
    )

    comics.push(
        new Comic(id++, 'Vạn Cổ Tối Cường Tông', 'van-co-toi-cuong-tong.jpg',
            [new Chapter(410, '20 phút trước'),
                new Chapter(411, '15 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(412, '11 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482'
        )
    )
    comics.push(
        new Comic(id++, 'Cường Giả Đến Từ Trại Tâm Thần', 'cuong-gia-den-tu-trai-tam-than.jpg',
            [new Chapter(410, '20 phút trước'),
                new Chapter(411, '15 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(412, '11 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482'
        )
    )

    comics.push(
        new Comic(id++, 'Đăng Nhập Murim', 'dang-nhap-murim.jpg',
            [new Chapter(410, '20 phút trước'),
                new Chapter(411, '15 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(412, '11 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482'
        )
    )

    comics.push(
        new Comic(id++, 'Ta Là Tà Đế', 'ta-la-ta-de-3254.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(403, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(404, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(405, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Nguyên Tôn', 'nguyen-ton.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(403, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(404, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(405, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Tinh Giáp Hồn Tướng', 'tinh-giap-hon-tuong-9306.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(403, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(404, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(405, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm',
            'dinh-cap-khi-van-lang-le-tu-luyen-ngan-n-4183.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(403, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(404, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(405, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Ta Trời Sinh Đã Là Nhân Vật Phản Diện', 'ta-troi-sinh-da-la-nhan-vat-phan-dien-2184.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(403, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(404, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(405, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Người Nuôi Rồng', 'nguoi-nuoi-rong.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(403, '2 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(404, '1 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(405, '1 phút trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Chưởng Môn Khiêm Tốn Chút', 'chuong-mon-khiem-ton-chut.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Chuyển Sinh Thành Liễu Đột Biến', 'chuyen-sinh-thanh-lieu-dot-bien-4066.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Hoa Sơn Tái Xuất', 'hoa-son-tai-xuat.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )

    comics.push(
        new Comic(id++, 'Võ Luyện Đỉnh Phong', 'vo-luyen-dinh-phong-9068.jpg',
            [
                new Chapter(400, '5 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(401, '4 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973'),
                new Chapter(402, '3 ngày trước',
                    'dai-quan-gia-la-ma-hoang/chap-0/459973')
            ],
            'dai-quan-gia-la-ma-hoang-219482')
    )
}
export let topComics = comics.splice(0, 10)
