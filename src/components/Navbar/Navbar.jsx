import React from 'react'

import './Navbar.css'
import rocket from '../../assets/rocket.png'
import star from '../../assets/glowing-star.png'
import idButton from '../../assets/id-button.png'
import memo from '../../assets/memo.png'
import order from '../../assets/package.png'
import lock from '../../assets/locked.png'
import LinkWithIcon from './LinkWithIcon'

const Navbar = () => {
  return (
    <nav className="align_center navbar">
        <div className='align_center'>
        <h1 className="navbar_heading">
            Shopping Website
        </h1>

        <form action="" className="align_center navbar_form">
            <input type="text" 
            className="navbar_search" 
            placeholder='Search Products'/>
            <button type='submit' className="search_button">Search</button>
        </form>
        </div>

        <div className="align_center navbar_links">
        <LinkWithIcon title="Home" Link="/" emoji={rocket}/>
        <LinkWithIcon title="Products" Link="/products" emoji={star}/>
        <LinkWithIcon title="LogIn" Link="/login" emoji={idButton}/>
        <LinkWithIcon title="SignUp" Link="/signup" emoji={memo}/>
        <LinkWithIcon title="My Orders" Link="/myorders" emoji={order}/>
        <LinkWithIcon title="Logout" Link="/logout" emoji={lock}/>
            <a href="/cart" className="align_center"></a>
            Cart <p href="" className="align_center cart_counts">0</p>
        </div>
    </nav>
  )
}

export default Navbar