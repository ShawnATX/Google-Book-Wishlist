import React, { useState } from 'react';
import API from '../utils/API';
import { Jumbotron, Container, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import BookDeets from './BookDeets';


const Search = (props) => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchGoogle(search).then((res) => {
            console.log(res.data.items);
            setBooks(res.data.items);
        })
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    };

    const handleSave = (book) => {
        API.saveBook(book).then((res) => console.log("Book Saved!"));
    }


    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Google Books Wishlist</h1>
                <p className="lead">Search and save your favorite books!</p>
            </Jumbotron>
            <Container>
                <Form onSubmit={handleFormSubmit}>
                    <h3>Search for books here!</h3>
                    <FormGroup>
                        <Label for="bookSearch">Book</Label>
                        <Input name="book" id="bookSearch" placeholder="Cat's Cradle" onChange={handleInputChange} />
                    </FormGroup>
                    <Button>Search</Button>
                </Form>
            </Container>
            <Container>

                {books.length ? (
                    <ListGroup>
                        {books.map(book => {
                            let newBook = {
                                title: book.volumeInfo.title,
                                subtitle: book.volumeInfo.subtitle,
                                authors: (book.volumeInfo.authors) ? book.volumeInfo.authors : [],
                                image: (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.previewLink,
                                description: (book.volumeInfo.description) ? book.volumeInfo.description : "",
                                link: book.volumeInfo.previewLink
                            }
                               return (
                                <ListGroupItem key={book.id}>
                                <BookDeets 
                                    book={newBook} 
                                    onSave={() => handleSave(newBook)} />
                            </ListGroupItem>
                        )} )}
                        </ListGroup>
                ) : (
                        <h3>No Results to Display</h3>
                    )
                }
            </Container>
        </div>
    );
}

export default Search;
