import { imageListItemBarClasses } from '@mui/material';
import React from 'react';
import './Checkout.css';
import Header from './Header';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log('inside the checkout function');
  return (
    <div>
       <Header />   
    <div className='checkout'>
      <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
             {basket?.length === 0 ? (
               <div>
                 <h2>Your basket is empty</h2>
                    <p>You have no items in your basket. To add items to your basket, please click "Add to basket" under the item you would like to purchase.</p>
               </div>
             ) : (
               <div>
                 <h2>Your shopping basket</h2>
                 {basket?.map((item) => (
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}                
                     />
                 ))}
                   
               </div>
             )}
      </div>
      {basket?.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}

    </div>

  </div>
  )
}

export default Checkout