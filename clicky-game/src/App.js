import React from 'react';
// import Wrapper from './components/Wrapper'
import Main from './components/Main';
import Navbar from './components/NavBar.js';
import Header from './components/Header';
import ClickItem from './components/ClickItem';
import characters from './characters.json';
import './App.css';
// import ClickItem from './components/ClickItem';

class App extends React.Component {
  state = {
    characters: [],
    score: 0,
    topScore: 0


  };

  componentDidMount() {

    this.setState({ characters: characters })
    console.log(this.state.characters)
  }


  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Main />
        {this.state.characters.map(person => (
          <ClickItem
            src={person.image}
            name={person.name}
            id={person.key}
            clicked={person.clicked}
            clickHandler={this.handleClick}
          />

        ))}
      </div>
    )
  }
}

export default App;
