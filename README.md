# editable-grid

> Editable Grid with dynamic components

[![NPM](https://img.shields.io/npm/v/editable-grid.svg)](https://www.npmjs.com/package/editable-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save loki-editable-grid
```

## Usage

```jsx
import React from 'react'

import { EditableGrid } from 'loki-editable-grid'
import 'loki-editable-grid/dist/index.css'

const formData = [
  { name: "firstName", label: "First Name", component: "inputText" },
  { name: "lastName", label: "LastName", component: "inputText" },
  { name: "age", label: "Age", component: "number" },
  {
    name: "gender", label: "Gender", component: "lov", lovData:
      [{ id: 1, key: "M", value: "Male" }, { id: 1, key: "F", value: "FeMale" }]
  }
]

/**
 * @author Palmurugan C
 * 
 * Example project to explain how to use editable-grid component
 */
class App extends React.Component {

  state = {
    lineItems: [
      { firstName: 'Pal', lastName: 'Murugan', age: 0, gender: 'M' },
    ]
  }

  /**
   * The handler to add new items. 
   * 
   * This will add new items in the state.
   */
  handleAddLineItem = () => {
    this.setState({
      lineItems: this.state.lineItems.concat(
        [{ firstName: '', lastName: '', age: 0, gender: '' }]
      )
    })
  }

  /**
   * The handler to update the state values.
   * 
   * This function will invoke for each changes in the components
   */
  handleLineItemChange = (elementIndex) => (event) => {
    console.log(event.target.name, elementIndex);
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) {
        return item
      } else {
        return { ...item, [event.target.name]: event.target.value }
      }
    })
    this.setState({ lineItems });
  }

  /**
   * The handler for remove items
   * 
   * This function will remove item from state and update the components
   */
  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => { return elementIndex !== i })
    });
  }

  render = () => {
    return (<EditableGrid formData={formData} lineItems={this.state.lineItems}
      addHandler={this.handleAddLineItem} deleteHandler={this.handleRemoveLineItem} changeHandler={this.handleLineItemChange} />);
  }
}

export default App
```
## Author

Palmurugan C

## License

MIT © [Palmurugan C](https://github.com/Palmurugan C)
