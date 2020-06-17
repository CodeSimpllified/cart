import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component{
      constructor(){
        super();
        this.state = {products:[    
          {
              price: 99,
              title: 'Watch',
              qty: 1,
              img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              id: 1
          },
          {
              price: 999,
              title: 'Mobile Phone',
              qty: 10,
              img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
              id: 2
          },
          {
              price: 999,
              title: 'Laptop',
              qty: 4,
              img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
              id: 3
          }
          ]}
      }
      handleIncreaseQuantity = (product) => {
          //console.log('Heyy please increse the quantity of ', product);
          const { products } = this.state;
          const index = products.indexOf(product);
          products[index].qty += 1;
          console.log(index);
          this.setState({
              products
          })
      }
      handleDecreaseQuantity = (product) => {
          //console.log('Heyy please increse the quantity of ', product);
          const { products } = this.state;
          const index = products.indexOf(product);
          if(products[index].qty === 0)
              return;
          products[index].qty -= 1;
          this.setState({
              products
          })
      }
      handleDeleteProduct = (id) => {
          const { products } = this.state;
          const items = products.filter((item) => item.id !== id);
          this.setState({
              products : items
          })
      }
      getCartCount = () => {
        const { products } = this.state;
        let count = 0;
        products.forEach((product) => {
          count += product.qty;
        });
        return count;
      }
      getCartTotal = () => {
          const {products} = this.state;
          let cartTotal = 0;
          products.map((product) => {
              cartTotal += product.price * product.qty;
          });
          return cartTotal;
      }
      render(){
        const {products} = this.state
        return (
          <div className="App">
              <Navbar count={this.getCartCount()}/>
              <Cart products = {products} 
                    onIncreaseQuantity = {this.handleIncreaseQuantity} 
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct} 
              />
              <div style={{fontSize: 20, padding: 10}}> TOTAL: {this.getCartTotal()} </div>
          </div>
        );
      }
}

export default App;
