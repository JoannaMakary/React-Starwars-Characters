import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Characters() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState([]);
  var [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=a&page=${page}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page]);

  function prevPage() {
    if (data.previous !== null) page -= 1;
    console.log(page);
  }

  function nextPage() {
    if (data.next !== null) page += 1;
    console.log(page);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"
          width="5%"
          className="mr-4"
        />
        Loading...
      </div>
    );
  } else {
    if (data.results) {
      return (
        <div className="container">
          <Link to="/" className="shadow">
            <div id="home-btn">Home</div>
          </Link>
          <h1>The Star Wars Characters</h1>
          <div id="characters" className="row">
            {data.results.map((person, i) => (
              <div className="col-lg-4 col-md-4" key={i}>
                <Link to={`/character/${i + 1}`}>
                  <h3>{person.name}</h3>
                  <div>Birth Year: {person.birth_year}</div>
                  <div>Height: {person.height}</div>
                  <div>Mass: {person.mass}</div>
                </Link>
              </div>
            ))}
          </div>
          <button className="prev-btn" onClick={() => prevPage()}>
            Previous
          </button>
          <button className="next-btn" onClick={() => nextPage()}>
            Next
          </button>
        </div>
      );
    } else {
      return (
        <div className="loading">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"
            width="5%"
            className="mr-4"
          />
          Loading...
        </div>
      );
    }
  }
}

export default Characters;
