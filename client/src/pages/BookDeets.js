import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';


// title = { book.volumeInfo.title }
// subtitle = { book.volumeInfo.subtitle }
// authors = { book.volumeInfo.authors }
// image = { book.volumeInfo.imageLinks.thumbnail }
// description = { book.volumeInfo.description }
const BookDeets = (props) => {
    const {title, authors, image, subtitle, description } = props.book;
    const authorsList = authors.join(", ");
    return (
        <Container>
            <Row className="clearfix">
                <Col className="float-left">
                    <strong>{title}</strong><br/>
                    {subtitle}<br/>
                    By: {authorsList}
                </Col>
                <Col className="float-right">
                    <Button>View</Button>
                    <Button onClick={props.onSave}>Save</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={(image) ? image : "placehold.it/250x250"} alt={title} />
                </Col>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </Container>
    );
}


export default BookDeets;
