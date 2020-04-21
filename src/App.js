import React, {useEffect, useState} from 'react';
import Header from './header/Header';
import Table from './table/Table'
import Search from './search/Search'
import axios from 'axios'


import './App.css';


function App() {
  // Declare a new state variable to set all employees
  const [employees, setEmployees] = useState([]);

  // Declare a new state to filter 
  const [filterText, setFilterText] = useState('');
  const filteredEmployees = employees.filter((e) => {
    // By first name
    if(e.name.first.toLowerCase().includes(filterText.toLowerCase()) ) {
      return true;
    }
     // By lame name
    else if(e.name.last.toLowerCase().includes(filterText.toLowerCase()) ) {
      return true;
    }
     // By email
    else if(e.email.toLowerCase().includes(filterText.toLowerCase()) ) {
      return true;
    }
    // By Cell Number
    else if(e.cell.includes(filterText) ) {
      return true;
    }
    else {
      return false
    }
  })

  

  useEffect(()=> {  
    // Make a request for a user with a given ID
    axios.get('https://randomuser.me/api/?results=50&nat=us')
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
      <Search setFilterText={setFilterText} />
      <Table employees={filteredEmployees} />
    </div>
  );
}

export default App;
