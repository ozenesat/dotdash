import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import ShowBookReview from './ShowBookReview';

const ListBookReviews = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searched, setSearched] = useState(false);

  // update the keyword with user's input
  const handleChange = (event) => {
    event.persist();
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("keyword: ", keyword);
    axios({
      url: `https://goodreads-server-express--dotdash.repl.co/search/${keyword}`,
      method: "GET",
    })
      .then((res) => {
        console.log("res: ", res);
        setSearchResult(res.data.list);
        setSearched(true);
        setKeyword("");
      })
      .catch((err) => console.err);
  };

  // Show the result of search
  const bookJsx = searchResult.map((book) => 
    <ShowBookReview
      key = {book.title}
      author = {book.authorName}
      title = {book.title}
      image = {book.imageUrl}
    />);

  // Search Bar
  const searchJsx = (
    <Fragment>
      <h3 style={{ marginTop: '2em', padding: '1em', textAlign: 'center' }}>
        What would you like to search today?
      </h3>
      <Form onSubmit={handleSubmit} style={{ textAlign: 'center', justifyContent: 'center' }}>
        <Form.Group size="lg" controlId="keyword">
          <Form.Control
            type="text"
            name="keyword"
            placeholder="Keyword"
            value={keyword}
            onChange={handleChange}
            style={{ display: 'unset', maxWidth: '50em', textAlign: 'center' }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Fragment>
  );

  // Return the search results with search bar after search requested
  if (searchResult.length > 0) {
    return (
      < >
        {searchJsx}
        <div className="row row-cols-6" style={{ justifyContent: 'center' }}>
        {bookJsx}
        </div>
      </>
    );
  } else if (searched) {
    return (
      <div>
        {searchJsx}
        <h5>
          {" "}
          There are no books related to that keyword. Please try with another
          one!
        </h5>
      </div>
    );
  }
  return searchJsx;
}

export default ListBookReviews;