import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
     const [{ basket, user }] = useStateValue();
     console.log(basket);

     const handleAuthenticaton = () => {
          if (user) {
            auth.signOut();
          }
        }

  return (
    <nav className='header'>
 
        <Link to='/'>
             <img  className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" /> 
        </Link>

        <div className='header__search'>
             <input className='header__searchInput' placeholder='Search' type="text" />
              <SearchIcon className='header__searchIcon' />
        </div>


        <div className='header__nav'>
            <Link to='/login' className='header__link'>
                 <div onClick={handleAuthenticaton} className='header__option'>
                      <span className='header__optionLine1'>Hello {!user ? 'Guest' : user.email}</span>
                      <span className='header__optionLine2'>{user ? 'Sign Out' : 'Sign In'}</span>
                 </div>
           </Link>
           <Link to='/' className='header__link'>
                 <div className='header__option'>
                      <span className='header__optionLine1'>Returns</span>
                      <span className='header__optionLine2'>& Orders</span>
                 </div>
           </Link>
           <Link to='/' className='header__link'>
                 <div className='header__option'>
                      <span className='header__optionLine1'>Your </span>
                      <span className='header__optionLine2'>Prime</span>
                 </div>
           </Link>
           <Link to='/checkout' className='header__link'>
               <div className='header__optionBasket'>
                     <ShoppingBasketIcon />
                     <span className='header__optionLine2 header__basketCount'>{basket?.length}</span>
               </div>
                
           </Link>
             
        </div>

            

    </nav>
  )
}

export default Header;