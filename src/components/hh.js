import {useState, useEffect} from 'react';


const Hh = () => {

    useEffect(() =>{
         alert('Hello')
    }, [])
   const [state, setState]=useState('Hello')
    const vv=() =>{
       setState('Alik')
    }
    return (
        <div>
            <div>{state}</div>
            <button onClick={vv}></button>
        </div>
    );
};

export default Hh;