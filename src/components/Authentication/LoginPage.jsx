import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import "./LoginPage.css"

const LoginPage = () => {
    // const nameRef = useRef(null)
    // const phoneRef = useRef(null)
    const {register, handleSubmit, formState: {errors}} = useForm()
    // console.log(formState.errors)

    const onSubmit = (formData) => console.log(formData)
    // console.log(register("name"));
    // const [user, setUser] = useState({
    //     name: "",
    //     phone: ""
    // })

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const user = {name:"", phone: 0}
    //     user.name = (nameRef.current.value);
    //     user.phone = parseInt(phoneRef.current.value);
    //     console.log(user)
    // }

  return (
    <section className="align_center form_page">
        <form action="" className="authentication_form" onSubmit={handleSubmit(
            onSubmit
            // formData => console.log(formData)
        )}>
            <h2>Login Form</h2>
            <div className="form_inputs">
                <div className="">
                    <label htmlFor="name" className="">Name</label>
                    <input 
                    type="text" 
                    // ref={nameRef}
                    id='name'
                    className="form_text_input" 
                    placeholder="Enter your name"
                    // onChange={e => setUser({
                    //     ...user,
                    //     name: e.target.value
                    // })}
                    // value={user.name}
                    {...register("name", {
                        required: true,
                        minLength: 3
                    })}
                    />
                    {/* Usage of optional chaining with ?. syntax */}
                    {errors.name?.type === "required" &&(<em className="form_error">Please enter your name</em>)}
                    {errors.name?.type === "minLength" &&(<em className="form_error">Name should be 3 or more characters</em>)}
                </div>
                <div className="">
                    <label htmlFor="phone" className="">Phone Number</label>
                    <input 
                    type="number" 
                    // ref={phoneRef}
                    id='phone'
                    className="form_text_input" 
                    placeholder="Enter your phone number"
                    // onChange={e => setUser({
                    //     ...user,
                    //     phone: parseInt(e.target.value)
                    // })}
                    // value={user.phone}
                    {...register("phone", {valueAsNumber: true})}
                    />
                   
                </div>
                <button type="submit" className="search_button form_submit">Submit</button>
            </div>
        </form>
    </section>
  )
}

export default LoginPage