const router = require("express").Router();


const queryUrl = "https://www.googleapis.com/books/v1/volumes?q="; //&key=yourAPIKey
const key="yourAPIKey";

// Matches with "/api/google"
router.route("/:query")
  .get();