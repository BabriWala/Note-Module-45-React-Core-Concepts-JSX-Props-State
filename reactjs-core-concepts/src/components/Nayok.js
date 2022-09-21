import React from 'react';


const nayokStyle = {
    backgroundColor: 'yellow',
    padding: '50px',
    borderRadius: '10px',
    margin: '50px'
}

const Nayok = (props) => {
    return (
        <div style={nayokStyle}>
            <h1>Name {props.name}</h1>
        </div>
    );
};

export default Nayok;