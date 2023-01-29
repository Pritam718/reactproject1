import React, { useState } from "react";
const Contact = () => {

  const [data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:''
  });

  const InputEvent=(event)=>{
        const {name,value}=event.target;
        

        setData((preval)=>{
            return{
              ...preval,[name]: value
            }
        })
  }

  const Submit=()=>{
    alert(`Your Fullname: ${data.fullname} , Phone Number: ${data.phone} , Email: ${data.email} , And Your Message: ${data.msg}`);
  }
  return (
    <>
      <div className="my-5">
        <div className="text-center">
            <h1 className=""> Contact Us </h1>
        </div>
        
      </div>
      <div className="container contac_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                name='fullname'
                value={data.fullname}
                onChange={InputEvent}
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control"
                name='phone'
                value={data.phone}
                onChange={InputEvent}
                id="exampleFormControlInput1"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                name='email'
                value={data.email}
                onChange={InputEvent}
                id="exampleFormControlInput1"
                placeholder="Enter your Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
              name='msg'
              value={data.msg}
              onChange={InputEvent}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit" onClick={Submit}>Submit form</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
