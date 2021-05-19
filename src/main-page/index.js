import logo from './logo.svg';
import './main-page.css';
import Header from'./header';
import FeaturedHouse from './featured-houses'
import React, { Component } from 'react';

class App extends Component {
  state = {}

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeatureHouses();

    })

  }
  determineFeatureHouses = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse});
    };
  }
  render () {
    return (
      <div className="contaoner">
        <Header subtitle="Providing houses all over the world"/>
        <FeaturedHouse house={this.state.featuredHouse}/>
      </div>
    );
  }
}

export default App;
