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
    cards: [],
    score: 0,
    topScore: 0,
    clicked: [],
    message: "Try your luck!"


  };

  componentDidMount() {
    this.setState({ cards: characters });
  }

  clickedImage = (id) => { 
    const shuffled = this.shuffleCards(this.state.cards);
    this.setState({ cards: shuffled})
    if (this.state.clicked.includes(id)) {
      this.setState({score: 0, clicked: [], message: "Ouch inccorrect! Better luck next time"})
    } 
    else {
      this.setState({score: this.state.score +1, message: "Good job! Go again!", clicked: [id]})
    }

    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }


    this.setState(this.state.clicked, ()=> this.state.clicked.push(id));
   
    console.log('here', this.state.clicked)
    console.log(this.state.score);

  }




  shuffleCards = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  }


  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Main />
        <h2 className='mx-auto text-center'>{this.state.message}</h2>
        {characters.map(person => (

          <ClickItem
            key={person.key}
            src={person.image}
            name={person.name}
            id={person.key}
            clicked={person.clicked}
            clickHandler={this.clickedImage}
          />

        ))}
      </div>    
    )
  }
}

export default App;
