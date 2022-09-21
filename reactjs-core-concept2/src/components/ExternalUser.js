import React, { useEffect, useState } from 'react';
import User from './User';

const ExternalUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>External User {users.length}</h2>
            {
                // users.map(user => <li>user.name</li>)
                users.map(user => <User name={user.name} email={user.email}></User>)
            }
        </div>
    );
};

export default ExternalUser;