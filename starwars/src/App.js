import React, { Component } from "react";
import styled from "styled-components";
import Char from "./components/Char";
import "./App.css";

const Header = styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  text-align: center;
  font-size: 35px;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Header>React Wars </Header>
        <div className="char-list">
          {this.state.starwarsChars.map(charFromMap => (
            <Char charOnProps={charFromMap} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
