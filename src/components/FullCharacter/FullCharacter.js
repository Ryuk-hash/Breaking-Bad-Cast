import React, { Component } from 'react';
import axios from 'axios';

import './FullCharacter.css';

import Spinner from '../UI/Spinner/Spinner';

class FullCharacter extends Component {
  state = {
    loadedChar: null,
    characterQuotes: null,
  };

  async componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedChar ||
        (this.state.loadedChar && this.state.loadedChar.char_id !== this.props.id)
      ) {
        try {
          let loadedCharObj, characterQuotesObj;

          const getCharacters = await axios.get(
            'https://www.breakingbadapi.com/api/characters/' + this.props.id
          );

          loadedCharObj = getCharacters.data[0];

          let author = getCharacters.data[0].name;
          author = author.split(' ').join('+');

          const getQuotes = await axios.get(
            `https://www.breakingbadapi.com/api/quote?author=${author}`
          );

          characterQuotesObj = getQuotes.data;

          this.setState({
            loadedChar: loadedCharObj,
            characterQuotes: characterQuotesObj,
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  render() {
    let char = <p className="center">Please select a character!</p>;

    if (this.props.id) {
      char = <Spinner />;
    }

    if (this.state.loadedChar) {
      let appearances;

      if (this.state.loadedChar.appearance) {
        appearances = this.state.loadedChar.appearance.map((appearance, index) => {
          return (
            <div key={index} className="appearance">
              {appearance}
            </div>
          );
        });
      }

      let occupations = this.state.loadedChar.occupation.map((occupation, index) => {
        return (
          <p key={index} className="occupation">
            {occupation}
          </p>
        );
      });

      let quotes = this.state.characterQuotes.map((q) => {
        return (
          <li key={q.quote_id} className="quote">
            {q.quote}
          </li>
        );
      });

      char = (
        <div className="FullCharacter">
          <div className="row">
            <h2>Character Details</h2>
          </div>

          <div className="contents">
            <div className="images">
              <img src={this.state.loadedChar.img} alt="" />
            </div>

            <p className="spacing">Appearances:</p>

            <div className="appearances">
              {appearances && appearances.length >= 1 ? (
                appearances
              ) : (
                <div className="appearance">No appearances</div>
              )}
            </div>

            <div className="character">
              <p>"{this.state.loadedChar.nickname}"</p>
              <h1>{this.state.loadedChar.name}</h1>
              <h3>{this.state.loadedChar.birthday}</h3>
              <div className="occupations">
                <p className="main-para">Occupations:</p>
                {occupations.length >= 1 ? occupations : <p className="occupation">Unemployed.</p>}
              </div>
              <div className="buttons">
                <button className="add">{this.state.loadedChar.status}</button>
              </div>
            </div>

            <p className="spacing">Quotes:</p>
            <div className="quotes">
              <ul>
                {quotes.length >= 1 ? (
                  quotes
                ) : (
                  <li key={0} className="quote">
                    No quotes present!
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <section id="fullcharacter" className="section-fullcharacter">
        {char}
      </section>
    );
  }
}

export default FullCharacter;
