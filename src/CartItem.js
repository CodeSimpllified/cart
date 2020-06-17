import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        this.setState((prevState) => {
            return{
                qty : prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty !== 0){
                return {
                    qty : prevState.qty - 1
                }
            }else{
                return {
                    qty : prevState.qty
                }
            }

        });
    }
   render(){
       const {price, title, qty} = this.state;
       return(
           <div className="cart-item">
               <div className="left-block">
                   <img style={styles.image} alt=""/>
               </div>
               <div className="right-block">
       <div style={{fontsize: 25}}>{title}</div>
       <div style={{color: '#777'}}>Rs {price}</div>
       <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        onClick={this.increaseQuantity}
                        />
                        <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                        onClick={this.decreaseQuantity}
                        />
                        <img
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />
                    </div>
                </div>
            </div>
       );
   } 
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;