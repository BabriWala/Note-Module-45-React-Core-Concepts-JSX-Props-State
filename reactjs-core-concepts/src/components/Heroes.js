import React from 'react';

const herosStyle = {
    backgroundColor: 'salmon',
    padding: '50px',
    borderRadius: '10px',
    margin: '50px'
}

const Heroes = (props) => {
    return (
        <div style={herosStyle}>
            <h3>Name: {props.hero.name}</h3>
            <h3>Age: {props.hero.age}</h3>
            <h3>Best Movie: {props.hero.bestMovie}</h3>
        </div>
    );
};

export default Heroes;