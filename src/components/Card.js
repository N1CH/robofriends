import React from 'react';

const card = ({ name, email, id }) => {
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow5' style={{backgroundColor: 'rgb(171, 68, 89)'}}>
            <img alt ='robots' src={`https://robohash.org/doug${id}?250x250`} draggable='false'/>
            <div>
                <h2 className='underline'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;