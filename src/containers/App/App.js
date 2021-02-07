import React, { Component } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';

import './App.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/UI/Header/Header';
import Characters from '../../components/Characters/Characters';
import Search from '../../components/UI/SearchBar/SearchBar';
import FullCharacter from '../../components/FullCharacter/FullCharacter';
import Reviews from '../../components/UI/Reviews/Reviews';

function debounce(fn, d) {
  let timer;

  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true,
      currentPage: 1,
      perPageResults: 10,
      searchVal: '',
      selectedCharacterId: null,
    };

    this.handleAPIdebounced = debounce(this.getCharacters, 400);
  }

  getCharacters() {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${this.state.searchVal}`)
      .then((res) => {
        this.setState({ characters: res.data, isLoading: false });
      });
  }

  componentDidMount() {
    this.getCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchVal !== this.state.searchVal) {
      this.handleAPIdebounced();
    }
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  nameChangedHandler = (event) => {
    this.setState({ searchVal: event.target.value });
  };

  selectedCharacterHandler = (id) => {
    this.setState({ selectedCharacterId: id });
  };

  render() {
    // Display only required characters per page
    const indexOfLastChar = this.state.currentPage * this.state.perPageResults;
    const indexOfFirstChar = indexOfLastChar - this.state.perPageResults;

    const currentChars = this.state.characters.slice(indexOfFirstChar, indexOfLastChar);

    return (
      <Aux>
        <Header />

        <Search changed={this.nameChangedHandler} text={this.state.searchVal} />

        <Characters
          isLoading={this.state.isLoading}
          characters={currentChars}
          clicked={this.selectedCharacterHandler}
        />

        <div className="mb-5">
          <Pagination
            innerClass="pagination pagination-lg center"
            activePage={this.state.currentPage}
            itemsCountPerPage={10}
            totalItemsCount={this.state.characters.length}
            pageRangeDisplayed={10}
            prevPageText="Prev"
            nextPageText="Next"
            hideFirstLastPages
            onChange={this.handlePageChange.bind(this)}
          />
        </div>

        <FullCharacter id={this.state.selectedCharacterId} />

        <Reviews />
      </Aux>
    );
  }
}

export default App;
