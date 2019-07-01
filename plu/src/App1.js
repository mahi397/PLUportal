import React from 'react';
import './App.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('APS: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Label>
              Enter APS Number: 
            </Form.Label>
            <Form.Control placeholder="APS Number" value={this.state.value} onChange={this.handleChange} />
          </Col>
        </Form.Row>  
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>  
    );
  }
}

export default NameForm;