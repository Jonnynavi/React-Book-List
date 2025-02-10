import { useState, useContext } from "react";
import BooksContext from "../context/book";

function BookEdit({book, onSubmit}){
    const [title, setTitle] = useState(book.title);
    const {editBook} = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBook(book.id, title);
    }
    return (
        <div className="book-edit">
            <h3>Edit Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button is-primary">Save</button>
            </form>
        </div>
    );
}

export default BookEdit;