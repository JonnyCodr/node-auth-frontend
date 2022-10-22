import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import {Role} from "../../models/Role";
import {Navigate, useParams} from "react-router-dom";

const UserEdit = () => {
  const { userId } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId,  setRoleId] = useState('');
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (
      async () => {
        const resp = await axios.get('/roles');
        setRoles(resp.data);

        const {data} = await axios.get(`/users/${userId}`);

        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setRoleId(data.role.id);
      }
    )()
  },[])

  console.log(roleId)

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await axios.put(`/users/${userId}`, {
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
          <input type="text" className="form-control"
                 defaultValue={firstName}
                 onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control"
                 defaultValue={lastName}
                 onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="text" className="form-control"
                 defaultValue={email}
                 onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select className="form-select"
                  value={roleId}
                  onChange={e => setRoleId(e.target.value)}>
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

export default UserEdit;
