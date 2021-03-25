import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Characters() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading Page</div>;
  } else {
    console.log(data.results);
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
        </div>
      );
    } else {
      return <div>Loading API Response</div>;
    }
  }
}

export default Characters;
