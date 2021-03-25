import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { singleCharacter } from './apiCharacter';

class Character extends Component {
  state = {
    character: '',
    errorMessage: '',
    loading: true,
  };

  componentDidMount = () => {
    const characterId = this.props.match.params.characterId;
    singleCharacter(characterId).then((data) => {
      if (data.error) {
        this.setState({ errorMessage: data.error });
      } else {
        this.setState({ character: data, loading: false });
      }
    });
  };

  renderCharacter = (character) => {
    return (
      <div className="profile">
        <h1>{character.name}</h1>
        <div className="character-details">
          <div>
            <span style={{ color: '#5ec3ed' }}>Birth Year:</span> {character.birth_year}
          </div>
          <div>
            <span style={{ color: '#5ec3ed' }}>Gender:</span> {character.gender}
          </div>
          <div>
            <span style={{ color: '#5ec3ed' }}>Height:</span> {character.height}
          </div>
          <div>
            <span style={{ color: '#5ec3ed' }}>Mass:</span> {character.mass}
          </div>
          <div>
            <span style={{ color: '#5ec3ed' }}>Eye Color:</span> {character.eye_color}
          </div>
          <div>
            <span style={{ color: '#5ec3ed' }}>Hair Color:</span> {character.hair_color}
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { character, loading } = this.state;
    return (
      <div className="container">
        <Link to="/characters" className="shadow">
          <div id="back-btn">Back to Characters</div>
        </Link>
        {loading ? (
          <div className="loading">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"
              width="5%"
              className="mr-4"
            />
            Loading...
          </div>
        ) : (
          ''
        )}
        {this.renderCharacter(character)}
      </div>
    );
  }
}

export default Character;
