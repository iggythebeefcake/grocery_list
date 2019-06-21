import React from 'react';
import Grocery from './Grocery';

const GroceriesList = ({ groceries, update, deleteGrocery }) => (
  <div>
    { groceries.map( grocery => 
      <Grocery 
        key={grocery.id}
        {...grocery}
        update={update}
        deleteGrocery={deleteGrocery}
      />
    )
    }
  </div>

)


export default GroceriesList;