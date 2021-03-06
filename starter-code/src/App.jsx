import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    const contactsArray = contacts.filter((value, index) => {
      return index < 5 ? true : false;
    });
    this.state = {
      //contactsList: contacts.slice(0, 5)
      contactsList: [...contactsArray]
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContactsList = [...this.state.contactsList, randomContact];
    this.setState({
      contactsList: newContactsList
    });
    console.log('Random Contact');
  }

  sortByName() {
    const sortArr = [...this.state.contactsList].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({
      contactsList: sortArr
    });
  }

  sortByPopularity() {
    const sortArr = [...this.state.contactsList].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      } else if (a.popularity > b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({
      contactsList: sortArr
    });
  }

  deleteContact(id) {
    const deletedContact = this.state.contactsList.filter(value => {
      return value.id === id ? false : true;
    });
    this.setState({
      contactsList: [...deletedContact]
    });
    console.log(deletedContact);
  }

  render() {
    const contactsList = this.state.contactsList;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button class="button" onClick={this.addRandomContact}>
            Add Random Contact
          </button>
          <button class="button" onClick={this.sortByName}>
            Sort by Name
          </button>
          <button class="button" onClick={this.sortByPopularity}>
            Sort by Popularity
          </button>
        </header>
        <table>
          {contactsList.map(value => {
            return (
              <div>
                <tr key={value.id}>
                  <td>
                    <button onClick={() => this.deleteContact(value.id)}>
                      Delete Contact
                    </button>
                  </td>
                  <td>
                    <img
                      src={value.pictureUrl}
                      className="image-actor"
                      alt="logo"
                    />
                  </td>
                  <td>{value.name}</td>
                  <td>{value.popularity.toFixed(2)}</td>
                </tr>
              </div>
            );
          })}
        </table>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
