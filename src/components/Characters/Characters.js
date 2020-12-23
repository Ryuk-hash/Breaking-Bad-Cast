import React from 'react';

import './Characters.css';

import Character from './Character/Character';
import Spinner from '../UI/Spinner/Spinner';

const Characters = (props) => {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <section
      style={{ paddingBottom: '0' }}
      id="characters"
      className="js--section-characters"
    >
      <div className="row">
        <h2>Breaking Bad Characters</h2>
      </div>

      <div className="cards">
        {props.characters.map((item) => (
          <Character
            key={item.char_id}
            char={item}
            clicked={() => props.clicked(item.char_id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Characters;
