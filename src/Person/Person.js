import React from 'react';


const person = (props) => {
    return (
        <div>
               <p>I,m {props.name} and I am {props.age} years old </p> 
               <p>{props.children }</p>
        </div>
 
    )
}; // makes dynamic(can be changed,reusable ) data 


export default person;