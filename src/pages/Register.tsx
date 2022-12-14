import React, {SyntheticEvent} from 'react';
import '../Login.css';
import axios from 'axios';
import {redirect} from "react-router";

const Register = () => {
  let firstName = ''
  let lastName = ''
  let email = ''
  let password = ''
  let confirmPassword = ''
  let state = {
    redirect: true
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    try {
      console.log({first_name: firstName, last_name: lastName, email, password, password_confirm: confirmPassword})
      const resp = await axios.post('/register', {
        first_name: firstName, last_name: lastName, email, password, password_confirm: confirmPassword
      })
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <input type="text" className="form-control" placeholder='First Name' required onChange={e => firstName = e.target.value }/>
        <input type="text" className="form-control" placeholder='Last Name' required onChange={e => lastName = e.target.value }/>
        <input type="email" className="form-control" placeholder='Email' required onChange={e => email = e.target.value }/>

        <input type="password" className="form-control" placeholder='Password' required onChange={e => password = e.target.value }/>
        <input type="password" className="form-control" placeholder='Confirm Password' required onChange={e => confirmPassword = e.target.value }/>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );


};

export default Register;
