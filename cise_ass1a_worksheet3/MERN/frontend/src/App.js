import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './Components/CreateBook';
import ShowBookList from './Components/ShowBookList';
import ShowBookDetails from './Components/ShowBookDetails';
import UpdateBookInfo from './Components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;