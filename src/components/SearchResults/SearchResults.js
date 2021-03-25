import { useEffect } from 'react';
import { SwapiService } from '../../services/swapi.service';
import PersonDetails from './PersonDetails/PersonDetails';

function SearchResults({ people, species, planets }) {
  if (people.length) {
    const searchResultCards = people.map((person, i) => {
      const personHomeworld = planets.length ? planets.find(planet => planet.url === person.homeworld) : null;
      const personSpecies = species.length ? species.find(spec => spec.url === person.species[0]) : null;

      return (
        <article key={i} className="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src="http://tachyons.io/img/avatar_1.jpg" alt="avatar" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
            <h1 className="f4">{person.name}</h1>
            <h3 className="f6 ttu">{personSpecies ? personSpecies.name : 'Human' } From {personHomeworld ? personHomeworld?.name : null}</h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <PersonDetails person={person}/>
        </article>
      );
    });
  
    return (
      <div className="pa3 ph5-l flex flex-wrap justify-around">
        {searchResultCards}
      </div>
    );
  }

  return (
    <div className="pa3 ph5-l flex flex-wrap justify-around">
      <p className="white">Loading...</p>
    </div>
  );
}

export default SearchResults;
