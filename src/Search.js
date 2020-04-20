import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Search() {
    return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Filter by First Name" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>)
};


export default Search

