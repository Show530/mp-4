import {BookEntry} from '@/new-types';

export default function BookPreview({bookData}:{bookData:BookEntry}) {

    return(
        <div className="bg-sky-300 round-xl p-4 m-2 w-100 justify-center">
            <h2 className="font-bold text-3xl text-center">Finished: {bookData.last_read_date}</h2>

            <div className="text-center items-center justify-center">
                <img loading="lazy"
                     className="object-cover w-50 h-85 block m-auto"
                     src={bookData.book.default_cover_edition?.cached_image?.url ?? "/Rickroll.jpg"}
                     alt={"Cover of " + bookData.book.title}/>
                <h3 className="font-bold">{bookData.book.title}</h3>
                <h3 className="font-bold">By {bookData.book.cached_contributors[0]?.author?.name ?? "Author Unknown"}</h3>
            </div>
        </div>
    );
}