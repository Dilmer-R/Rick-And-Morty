import React from 'react';

export default function Characters({ characters = [] }) {
  return (
    <>
    <div className='row'>
        {
            characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card' style={{minWidth: "150px"}}>
                        <img src={item.image} alt=''></img>
                        <div className='card-body' style={{background: "#3BF98C"}}>
                            <h5>{item.name}</h5>
                            <hr />
                            <p>location: {item.location.name}</p>
                            <p>status: {item.status}</p>
                            <p>species: {item.species}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  );
}
