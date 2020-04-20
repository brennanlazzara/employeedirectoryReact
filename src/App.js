import React, {useEffect} from 'react';
import Header from './Header';
import Table from './Table'
import Search from './Search'
import axios from 'axios'

import './App.css';


function App() {
  useEffect(()=> {  
    // Make a request for a user with a given ID
    axios.get('https://randomuser.me/api/')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
  }) 


  return (
    <div className="App">
      <Header />
      <Search />
      <Table />
    </div>
  );
}

export default App;
