import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import {Link} from "react-router-dom";
import {Role} from "../../models/Role";

const Roles = () => {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get('/roles');
        setRoles(data);
      }
    )()
  })

  const deleteRole = async (roleId: number) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      await axios.delete(`/roles/${roleId}`);

      setRoles(roles.filter((r: Role) => r.id !== roleId));
    }
  }

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to='/roles/create' className='btn btn-sm btn-outline-secondary'>Add Role</Link>
      </div>
      <div className="table-responsive pt-5">
        <table className="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          {roles.map((r: any) => {
            return (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>
                  <div className="btn-group mr-2">
                    <Link to={`/roles/edit/${r.id}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                  </div>
                  <div className="btn-group mr-2">
                    <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => deleteRole(r.id)}>Delete</a>
                  </div>
                </td>
              </tr>
              )
          })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Roles;
