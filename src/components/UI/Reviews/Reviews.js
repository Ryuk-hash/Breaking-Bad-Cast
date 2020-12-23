import React from 'react';

import './Reviews.css';

import p1 from '../../../assets/images/p-1.jpg';
import p2 from '../../../assets/images/p-2.jpg';
import p3 from '../../../assets/images/p-3.jpg';

const Reviews = () => {
  return (
    <section id="reviews" className="section-reviews">
      <div className="row">
        <h2>Audience Reviews</h2>
      </div>

      <div className="container reviewsections">
        <div className="col">
          <blockquote>
            Amazing show. None of the other TV shows have matched up to the
            excellence of this one. Such an unconventional plot, also giving us
            a profound message! Screenplay, storyline, acting everything is
            nothing less than stellar. This series gives out a strong message of
            being less judgemental of anyone, even if they cross the
            conventional protocol of the society.
            <cite>
              <img src={p1} alt="Joanna Doe" />
              Joanna Doe
            </cite>
          </blockquote>
        </div>

        <div className="col">
          <blockquote>
            Seriously the best show I've ever seen, it has a slow burn effect,
            where it can *appear* slow, but once it hits you, it hits like a
            truck. The dynamics between the characters, the rich world that
            they've been put it, how it blends the lines of something sketchy
            that benefits Walter and his family, to a black hole of senseless
            crime and profit, it's addicting as all hell.
            <cite>
              <img src={p2} alt="John Doe" />
              John Doe
            </cite>
          </blockquote>
        </div>

        <div className="col">
          <blockquote>
            Every single character is compelling to watch, even the
            lesser-known/less memorable characters such as Skyler and Gale. So
            many fan favorite personalities have spawned from this show, Saul,
            Gus, Walter, Walter JR, Huell, Mike, Jessie, Gale. All of these
            characters carefully added to compelling storytelling. This show is
            a masterpiece!
            <cite>
              <img src={p3} alt="Joshua Doe" />
              Joshua Doe
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
