import React, { useState } from 'react';
import API from '../utils/API';
import { Jumbotron, Container, Card, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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
                        {books.map(book => (
                            <ListGroupItem key={book._id}>
                                <Card>
                                    <strong>
                                        {book.volumeInfo.title}
                                        {book.volumeInfo.subtitle}
                                    </strong>
                                </Card>
                            </ListGroupItem>
                        ))}
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
