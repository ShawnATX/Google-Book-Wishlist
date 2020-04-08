import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import BookDeets from "./pages/BookDeets";
import Nav from "./components/Nav/";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Nav />
      <Switch>
          <Route exact path={["/", "/books"]} >
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/books/:id">
            <BookDeets />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
