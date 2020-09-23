import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './search.css'

function Search(props) {
    return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail"></Label>
        <Input style={{textAlign: 'center'}} onChange={(e) => props.setFilterText(e.target.value)} type="text" placeholder="Filter by first/last Name, email, or number..." />
      </FormGroup>
    </Form>)
};


export default Search

