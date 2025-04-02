import { BookProps } from '@/types';

export default function BookPreview({book}:{book:BookProps}) {
    return(
        <div className=" bg-sky-300 round-xl p-4 m-2 w-100">
            <img className="object-cover w-100 h-170" src={book.default_cover} alt={"Cover of " + book.title}/>
            <h3 className="font-bold text-3xl">{book.title}</h3>
            <h3 className="font-bold text-3xl">By {book.author}</h3>
            <div>
                {book.description.includes("\\n\\n")
                ? book.description.split(/\\n\\n+/).map((text, key) => (
                            <p key={key}>{text}</p>
                ))
                :
                book.description.split(/\\r?\\n/).map((text, key) => (
                    <p key={key}>{text}</p>
                ))}
            </div>
        </div>
    );
}