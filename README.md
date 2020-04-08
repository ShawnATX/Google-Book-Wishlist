Google Books API: https://developers.google.com/books/docs/overview

Major Features:
React Front-end design
Mongo/mongoose DB
Express/Node server
service worker/manifest for PWA
indexedDB for offline posting ability

React design:
Single Page Application with routing, 2 routed pages are Search and Saved
Search: perform a book search and view returned results. search form has input field and Search button. each result has title, subtitle(maybe), author, image, description, view button, save button
Saved: Page which renders all books that have been 'saved' by a user. These are delivered from the mongoDB with an API request.

