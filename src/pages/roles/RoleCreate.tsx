import React, {SyntheticEvent, useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import {Permission} from "../../models/Permission";
import {Navigate} from "react-router-dom";

const RoleCreate = () => {
  const [permissions, setPermissions] = React.useState([]);
  const [selected, setSelected] = React.useState([] as number[]);
  const [name, setName] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get('/permissions');
        setPermissions(data);
      }
    )()
  }, [])

  const check = (id: number) => {
    if (selected.some(s => s === id)) {
      setSelected(selected.filter(s => s !== id))
      return;
    }

    setSelected([...selected, id])
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await axios.post('/roles', {
      name,
      permissions: selected
    })

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={'/roles'} />
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="mb-3 mt-3 row">
          <label className='col-sm-2 col-form-label'>Name</label>
          <div className="col-sm-10">
            <input type="text" className='form-control' onChange={e => setName(e.target.value)}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label className='col-sm-2 col-form-label'>Permissions</label>
          <div className="col-sm-10">
            {permissions.map((p: Permission) => {
              return (
                <div className="form-check form-check-inline col-3" key={p.id}>
                  <input className="form-check-input" type="checkbox" id={p.name} value={p.id} onChange={() => check(p.id)}/>
                  <label className="form-check-label" htmlFor={p.name}>{p.name}</label>
                </div>
              )
            })}
          </div>
        </div>
        <button className='btn btn-outline-secondary'>Save</button>
      </form>
    </Wrapper>
  );
};

export default RoleCreate;
