import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import CartItem from './cartitem';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { Rating } from 'react-star-rating-element';


function App() {
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);
  const [products, setproducts] = useState([ 
    {
      id : 1,
      title : "iPhone",
      price : 40000,
      rating:"5.0",
      // imageUrl:"iphone 12.jpg",
    },
    {
      id : 2,
      title : "iMac",
      price : 50000,
      rating:"3.0",
      // imageUrl:"macbook1.jpg"
     
    },
    {
      id : 3,
      title : "iWatch",
      price : 60000,
      rating:"3.0",
      // imageUrl:"ipad.jpg"
    },
        {
          id : 4,
      title : "iPen",
      price : 90000,
      rating:"4.0",
      // imageUrl:"iwatch.jpg",
    },
    {
      id : 5,
      title : "iCloth",
      price : 30000,
      rating:"2.0",
      // imageUrl:"applecover.jpg",
    }
  ]);
   
  let addToCart = (item) => {
    setcart([...cart,item]);
    settotal(total + item.price);
      };
let removeFromCart = (item) => {
  // alert("hello")
let index = cart.findIndex((obj) => obj.id === item.id);
cart.splice(index,1);
setcart([...cart]);
settotal(total - item.price);
}

        return (
    <div className="container">
    {/* <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} /> */}
      <div className="row">
      <div className="col-lg-8">
        <div className="row">
          {
            products.map((item) => {
              return <Card item={item} cartItems={cart} 
              handleAddToCart = {addToCart}></Card>
            })
          }
          </div>
        </div>
        <div className="col-lg-4">
          {
            cart.length === 0 ? ( 
            <div>No items in cart</div> 
            ) : ( 
            <div className="row">
            <ol className="list-group list-group-numbered">
              {
                cart.map((cartItem) => {
                  return<CartItem cartItem={cartItem} 
                  removeFromCart={removeFromCart}></CartItem>
                })
              }
      
      
            </ol>
            <h1>
              {/* Total - {total} */}
            {
                cart.length==0?"No items in cart":`Total-${total}`
              }
              </h1>
            </div>
         ) }
         
        </div>
        </div>
    </div>
  );
}

export default App;
