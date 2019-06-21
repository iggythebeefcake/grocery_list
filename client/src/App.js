import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import GroceriesForm from './components/groceries/GroceriesForm';
import GroceriesList from './components/groceries/GroceriesList';
import axios from 'axios';

class App extends Component {
  state = { groceries: [] }


  componentDidMount() {
    axios.get('/api/items') 
      .then ( res => {
        this.setState({ groceries: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addItem = (item) => {
    axios.post('/api/items', { item })
      .then( res => {
        const { groceries } = this.state
        this.setState ({ groceries: [...groceries, res.data] })
      })
  }

  updateGroceries = (id) => {
    axios.put('/api/items/${id}')
      .then( res => {
        const groceries = this.state.groceries.map( t => {
          if (t.id === id)
            return res.data
          return t
        this.setState({ groceries })
        })
      })
  }

  deleteGroceries = (id) => {
    axios.delete('/api/items/${id}')
      .then( res => {
        const { groceries } = this.state
        this.setState({ groceries: groceries.filter( t => t.id !== id )})
      })
  }

  render() {
    const { groceries } = this.state
    return(
      <Container>
        <GroceriesForm add={this.addItem} />
        <GroceriesList 
          groceries={groceries} 
          update={this.updateGrocery} 
          deleteGroceries={this.deleteGrocery} />
      </Container>
    )
  }
}

export default App;
