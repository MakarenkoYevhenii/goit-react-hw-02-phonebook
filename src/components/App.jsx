import ContactForm from './contactForm/ContactForm';
import { Component } from 'react';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter:'',
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.name,this.state.number);
    this.addContact(this.state.name, this.state.number);
    this.resetForm()
  };
  handleChange = e => {
    const { name, value } = e.target;
    // console.log(name);
    this.setState({
      [name]: value,
    });
  };
  
  addContact = (name, number) => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    if (result) {
        alert(`${name} уже есть в списке`);
        return;
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const newBook = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newBook],
      };
    });
  };
  getFilteredPeople() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    
    const filterStr = filter.toLowerCase()
    console.log(filterStr);
    const result = contacts.filter(item => {
        const title = item.name.toLowerCase();
        return title.includes(filterStr);
    });
    return result;
}
removeHuman = (bookId) => {
  this.setState(prevState => {
      const { contacts } = prevState;
      const newItems = contacts.filter(item => item.id !== bookId);
      return {
        contacts: newItems
      }
  })
}
  render() {
    
    const { filter } = this.state;
    const getFilteredPeople = this.getFilteredPeople();
    return (
      <div className='registration__form'>
        <h1>Phonebook</h1>
        <ContactForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter}  />
        <ContactList names={getFilteredPeople} removeHuman={this.removeHuman} />
      </div>
    );
  }
}

export default App;

