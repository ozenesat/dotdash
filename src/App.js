import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'
import BookReviews from './BookReviews';
import NewsLetter from './NewsLetter';
import ButtonsPopups from './ButtonsPopups';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <main className="container-fluid" style={{ padding: '0px' }}>
        <Route exact path='/bookreviews' render={() => (
          <BookReviews />
        )} />
        <Route exact path='/newsletter' render={() => (
          <NewsLetter/>
        )} />
        <Route path='/buttonspopups' render={() => (
          <ButtonsPopups/>
        )} />
      </main>
    </Fragment>
  );
}

export default withRouter(App);
