import React from 'react';
import './card.style.css'
export const Card=(props)=>{
    return (
      <div className='card-container'>
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150&size=180*180`}/>
      <h2>{props.monster.name}</h2>
      <h2>{props.monster.email}</h2>
      </div>  
    )
}