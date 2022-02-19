import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function EditUser({close, model}) {

    const {data, setData, put, reset} = useForm({ name: model.name, email: model.email, username: model.username, address: model.address, password: model.password, });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', model.id), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Name:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username" className="col-form-label">Username:</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={onChange} id="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={onChange} id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="col-form-label">Address:</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={onChange} id="address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-form-label">Password:</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={onChange} id="password"/>
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Save</button>
                </div>
            </form>
        </>

    )
}