import React, { Component } from 'react'

const ProductContext = React.createContext()
//Context comes with Provider and Consumer
//Provider encompases whole app.  Consumer will be placed where we want to use the Context API.  For more help look at the 1:30:00 timestamp
const ProductConsumer = ProductContext.Consumer

class ProductProvider extends Component {


  render() {
    return (
      <ProductContext.Provider value="Hello from phone app">
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

1:41:07


export {ProductConsumer, ProductProvider}