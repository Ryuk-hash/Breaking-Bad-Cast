import React, { useState } from 'react';

import './Character.css';

const Character = ({ char, clicked }) => {
  const [isShown, setIsShown] = useState(false);

  let occupation = null;

  if (char.occupation.length >= 1) {
    occupation = char.occupation.map((occ, index) => {
      return index === 0 ? occ : ', ' + occ;
    });
  }

  const scrollDown = () => {
    document
      .getElementById('fullcharacter')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="card"
      onClick={() => {
        clicked();
        scrollDown();
      }}
    >
      <figure
        className="card-photo"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img src={char.img} alt="" />
      </figure>
      {isShown && (
        <div className="card-content">
          <h1>{char.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {char.portrayed}
            </li>
            <li>
              <strong>Occupation(s):</strong> {occupation}
            </li>
            <li>
              <strong>Birthday:</strong> {char.birthday}
            </li>
            <li>
              <strong>Status:</strong> {char.status}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Character;
