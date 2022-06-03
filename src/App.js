
import { useState, useEffect } from 'react'
 
/* 
usetState is simply the ability to encapsulate local state to a functional component
 And the way to use that for example is going to inspect on google write the following

var arr = [2, 4];
var [a, b] = arr;

a output = 2
That essentially what am doing by applying the useState

## useEffect hook 
 - impure functions 
*/

import CardList from './components/cards-list/cards-list.components'
import SearchBox from './components/search-box/search-box.components'
import './App.css';


const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  // useEffect takes to properties the first is going to be a callFunction and the second is going
  // an array of dependencies
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
     .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
     const searchFieldString = event.target.value.toLowerCase();
     this.setState(() => {
       setSearchField(searchFieldString);
     })
  }

  return(
    <div className="App">
       <h1 className="app-title">Monsters Rolodex</h1>

       <SearchBox
           className='monsters-search-box'
           onChangeHandler={onSearchChange}
           placeholder='search monsters'
         />
         <CardList monsters={filteredMonsters}/>
    </div>
    );
  };


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//    // ComponentDidMount is method itself and its Mounts once the our app is loaded and it only reMount
//    // completely once we did totally remove it from the DOM.
//   componentDidMount() {
//     console.log('componentDidMount')
//     // Using the native fetch()
//     fetch('https://jsonplaceholder.typicode.com/users')
//     // Once we fetch this - this is going to be a promise. and promise is asynchronous in JavaScript
//     .then((response) => response.json()) // Every .then will return a promise that resolves
//     .then((users) => this.setState(() => {
//         return {monsters: users}
//     }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }


//   render() {
    
//     // I did use the destructuring in order to make code much shorter since this what ES6 gives huge benefits in
//     // making my code shorter 
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//    });

//     return(
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//       <SearchBox
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;


/*
Now am going to start with the functionality of my app as I want to create a search box that's 
filters whatever keyword is selected to look for what I did fetch from the API place holder
*/
