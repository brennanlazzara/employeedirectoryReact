import React, {useEffect, useState} from 'react';
import Header from './header/Header';
import Table from './table/Table'
import Search from './search/Search'
import axios from 'axios'


import './App.css';


function App() {
  // Declare a new state variable, which we'll call "count"
  const [employees, setEmployees] = useState([]);

  useEffect(()=> {  
    // Make a request for a user with a given ID
    axios.get('https://randomuser.me/api/?results=50')
.then(function (response) {
  // handle success
  setEmployees(response.data.results)
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
  },[]) 



  return (
    <div className="App">
      <Header />
      <Search />
      <Table employees={employees} />
    </div>
  );
}

export default App;
