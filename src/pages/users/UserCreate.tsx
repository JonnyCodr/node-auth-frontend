import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import {Role} from "../../models/Role";
import {Navigate} from "react-router-dom";

const UserCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId,  setRoleId] = useState('');
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get('/roles');

        setRoles(data);
      }
    )()
  },[])

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await axios.post('/users', {
        firstName,
        lastName,
        email,
        role_id: roleId
      })

      setRedirect(true);
    } catch (e) {
      console.log(e)
    }
  }

  if (redirect) {
    return <Navigate to={'/users'} />
  }

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select className="form-select" onChange={e => setRoleId(e.target.value)}>
            {roles.map((r: Role) => {
              return (
                <option key={r.id} value={r.id}>{r.name}</option>
              )
            })}
          </select>
        </div>
        <button className='btn btn-outline-secondary'>Save</button>
      </form>
    </Wrapper>
  );
};

export default UserCreate;
