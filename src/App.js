import React from 'react';
import './App.css';
import { CardList } from './components/card-ist/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component{

   constructor (){
      super();
      this.state = {
        monsters: [],
        searchMonster: ''
     }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
   //   .then( users => console.log(users))
     .then( users => this.setState( {monsters:users} ))
    }

    handleEvent = e => {
        this.setState( {searchMonster: e.target.value} )
       } ;
      
render() {
  const { monsters, searchMonster } = this.state;
  const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()));

  return (
    <div className="App">
    <h1> Monster Rolodex </h1>
    <SearchBox placeholder='search monsters' handler= {this.handleEvent}  />
    <CardList monsters={filteredMonsters} />
    </div>
  );
}

}




export default App;
