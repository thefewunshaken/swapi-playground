import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Scroll from './components/Scroll/Scroll';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SearchResults from './components/SearchResults/SearchResults';
import { SwapiService } from './services/swapi.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      species: [],
      planets: [],
      searchField: ''
    };

    this.updateSearchField = this.updateSearchField.bind(this);
  }

  updateSearchField(e) {
    this.setState({searchField: e.target.value});
  }

  componentDidMount() {
    // fetch first page of data for fast initial load
    SwapiService.getDataByType('people', 1, false)
      .then(swapiPeople => {
        this.setState({ people: [...swapiPeople]})
      })
    // fetch the rest of the data
    SwapiService.getDataByType('people', 2)
      .then(swapiPeople => {
        this.setState({ people: [...this.state.people, ...swapiPeople]})
      })

    SwapiService.getDataByType('species')
      .then(swapiSpecies => {
        this.setState({ species: [...this.state.species, ...swapiSpecies]})
      })

    SwapiService.getDataByType('planets')
      .then(swapiPlanets => {
        this.setState({ planets: [...this.state.planets, ...swapiPlanets]})
      })
  }
  
  render() {
    const { people, species, planets, searchField } = this.state;
    const filteredPeople = people.filter(p => {
      if (searchField) {
        return p.name.toLowerCase().includes(searchField.toLowerCase().trim());
      }
      return p;
    });

    return (
      <section className="">
        <header className="bg-white sans-serif">
          <div className="mw9 center pa4 pt5-ns ph7-l">
            <time className="f6 mb2 dib ttu tracked">
              <small>All thanks to <a className="black" href="https://swapi.dev" target="_blank" rel="noreferrer">swapi</a></small>
            </time>
            <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                Intergalactic Personnel Database
              </span>
            </h3>
            <h4 className="f3 fw1 georgia i">The definitive guide to the galaxy.</h4>
          </div>
        </header>
        <SearchBar updateSearchField={this.updateSearchField}/>
        <Scroll>
          <ErrorBoundary>
            <SearchResults people={filteredPeople} species={species} planets={planets} searchField={searchField}/>
          </ErrorBoundary>
        </Scroll>
      </section>
    );
  }
}

export default App;
