export type NewBookProps = BookEntry[];

export interface BookEntry {
    // "me": Array<{
    //     "user_books": Array<{
            "book": {
                "title": string,
                "rating": number,
                "default_cover_edition": {
                    "cached_image": {
                        "id": number,
                        "url": string,
                        "color": string,
                        "width": number,
                        "height": number,
                        "color_name": string
                    }
                },
                "cached_contributors": Array<{
                    "author": {
                        "id": number,
                        "slug": string,
                        "name": string,
                        "image": {
                            "id": number,
                            "url": string,
                            "color": string,
                            "width": number,
                            "height": number,
                            "color_name": string
                        }
                    },
                }>
                id: string,
            },
            "last_read_date": string
        // }>
    // }>
}