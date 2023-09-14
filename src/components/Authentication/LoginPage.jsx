import React, { useRef } from 'react'

import "./LoginPage.css"

const LoginPage = () => {
    const nameRef = useRef(null)
    const phoneRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {name:"", phone: 0}
        user.name = (nameRef.current.value);
        user.phone = parseInt(phoneRef.current.value);
        console.log(user)
    }

  return (
    <section className="align_center form_page">
        <form action="" className="authentication_form" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div className="form_inputs">
                <div className="">
                    <label htmlFor="name" className="">Name</label>
                    <input 
                    type="text" 
                    ref={nameRef}
                    id='name'
                    className="form_text_input" 
                    placeholder="Enter your name"/>
                </div>
                <div className="">
                    <label htmlFor="phone" className="">Phone Number</label>
                    <input 
                    type="number" 
                    ref={phoneRef}
                    id='phone'
                    className="form_text_input" 
                    placeholder="Enter your phone number"/>
                   
                </div>
                <button type="submit" className="search_button form_submit">Submit</button>
            </div>
        </form>
    </section>
  )
}

export default LoginPage