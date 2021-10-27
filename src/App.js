import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Main_page from './components/pages/main_page/main_page';
import Characters from './components/pages/characters_page_main/characters';
import Books from './components/pages/books_page/books_page';

import "./background.css";

function App() {

  return (
  <>
    <Router>
        <Switch>
          <Route exact path = "/" component = {Main_page}/>
          <Route path = "/characters" component = {Characters}/>
          {/* <Route exact path = "/spells" component = {Spells}/> */}
          <Route exact path = "/books" component = {Books}/>
          {/* <Route exact path = "/films" component = {Films}/> */}
        </Switch>
    </Router>

  </>
  );
}

export default App;
