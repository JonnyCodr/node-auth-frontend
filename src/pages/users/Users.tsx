import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import {User} from "../../models/User";
import {Link} from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get(`/users?page=${page}` );

        setUsers(data);
        setLastPage(data.meta.lastPage);
      }
    )()
  }, [page])

  const next = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  }

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const deleteUser = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await axios.delete(`/users/${userId}`);

      setUsers(users.filter((u: User) => u.userId !== userId));
    }
  }

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to='/users/create' className='btn btn-sm btn-outline-secondary'>Add User</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user: User) => {
            return (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role?.name}</td>
                <td>
                  <div className="btn-group mr-2">
                    <Link to={`/users/edit/${user.userId}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                  </div>
                  <div className="btn-group mr-2">
                    <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => deleteUser(user.userId)}>Delete</a>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={prev}>Previous</a>
          </li>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={next}>Next</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Users;
