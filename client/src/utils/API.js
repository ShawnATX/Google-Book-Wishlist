import axios from "axios";

const queryUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const key="&key=AIzaSyB-FFC9zjAO1D-gzdx03Z4C1zt3Bq5KpaA";
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchGoogle: function(query) {
      return axios.get(`${queryUrl}${query}${key}`);
  }
};
