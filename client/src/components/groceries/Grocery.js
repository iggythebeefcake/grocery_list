import React from 'react';
import { Checkbox, Button, Icon } from 'semantic-ui-react';


const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  }
}

const Grocery = ({ id, name, price, complete, update, deleteGrocery }) => (
  <div>
    <div>
      <checkbox 
        defaultChecked={complete}
        onClick={() => update(id)}
      />
      <div style={complete ? styles.complete : {} }>
        {name} {price}
      </div>
    </div>
    <Button
    icon
    color='red'
    onClick={() => deleteGrocery(id)}
    >
      <Icon name='trash' />
    </Button>
  </div>

)


export default Grocery;