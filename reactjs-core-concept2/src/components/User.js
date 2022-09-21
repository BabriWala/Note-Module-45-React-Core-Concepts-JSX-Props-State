import React from 'react';

const User = (props) => {
    return (
        <div style={{border: '2px solid black', margin: '50px', padding: '50px', backgroundColor: 'salmon'}}>
            <h2>Name: {props.name}</h2>
            <p>Email: {props.email}</p>
        </div>
    );
};

export default User;