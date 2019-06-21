import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class GroceriesForm extends Component {
  state = { name: '', price: 0.0 }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  // handleChangePhone = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ name: '' })
  }

  render() {
    const { name, price } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label='Grocery Items'
          placeholder="Add a grocery item"
          required
          name='name'
          value={name}
          onChange={this.handleChange}
        />

        <Form.Input 
          type="number"
          label='Item Price'
          placeholder="How much is the item?"
          required
          name='price'
          value={price}
          onChange={this.handleChange}
        />

        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default GroceriesForm;