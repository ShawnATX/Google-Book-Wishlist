import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap';


const Saved = (props) => {
    //books array holds information on users saved books for displaying and manipulating
    const [books, setBooks] = useState([]);

    //load saved book on component initialization
    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

    return (
        <Container>

            {books.length ? (
                <ListGroup>
                    {books.map(book => (
                        <ListGroupItem key={book._id}>
                            <Link to={"/books/" + book._id}>
                                {/* <strong>
                  {book.title} by {book.author}
                </strong> */}

                            </Link>
                            <Button onClick={() => deleteBook(book._id)} />
                        </ListGroupItem>
                    ))}
                </ListGroup>
            ) : (
                    <h3>No Results to Display</h3>
                )
            }
        </Container>
    );
}

export default Saved;
