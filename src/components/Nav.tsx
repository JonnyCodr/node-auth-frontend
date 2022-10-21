import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {User} from "../models/User";


const Nav = () => {

  const [user, setUser] = useState( new User() )

  useEffect(() => {
    (
      async () => {
        const { data } = await axios.get('/user')
        console.log(data)
        setUser(new User(data.id, data.firstName, data.lastName, data.email))
      }
    )()
  }, [])

  const logout = async () => {
    await axios.post('/logout',{})
  }

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company Name</a>
      <ul className='my-2 my-md-0 mr-md-3'>
        <Link to='/profile' className='p-2 text-white text-decoration-none'>{user.name}</Link>
        <Link to='/login' className='p-2 text-white text-decoration-none' onClick={logout}>Sign Out</Link>
      </ul>
    </nav>
  );
}

export default Nav;
