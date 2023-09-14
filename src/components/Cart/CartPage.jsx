import React from 'react'

import './CartPage.css'
import remove from '../../assets/remove.png'
import user from '../../assets/user.webp'
import Table from '../Common/Table'
import QuantityInput from '../SingleProduct/QuantityInput'

const CartPage = () => {
  return (
    <section className="align_center cart_page">
        <div className="align_center user_info">
            <img src={user} alt="user profile" className="" />
            <div className="">
                <p className="user_name">Harley</p>
                <p className="user_email">harley@gmail.com</p>
            </div>
        </div>

        <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
            <tbody>
                <tr>
                    <td>iPhone 14</td>
                    <td>$999</td>
                    <td className='align_center table_quantity_input'>
                        <QuantityInput />
                    </td>
                    <td>$999</td>
                    <td> 
                        <img src={remove} 
                        alt="remove icon" 
                        className="cart_remove_icon" />
                    </td>
                </tr>
            </tbody>
        </Table>

        <table className="cart_bill">
            <tbody className="">
                <tr className="">
                    <td className="">Subtotal</td>
                    <td className="">$999</td>
                </tr>
                <tr className="">
                    <td className="">Shipping Charge</td>
                    <td className="">$5</td>
                </tr>
                <tr className="cart_bill_final">
                    <td className="">Total</td>
                    <td className="">$1004</td>
                </tr>
            </tbody>
        </table>

        <button className="search_button checkout_button">Checkout</button>
    </section>
  )
}

export default CartPage