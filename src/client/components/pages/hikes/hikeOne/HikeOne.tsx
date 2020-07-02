import React from 'react';
import { useLocation } from 'react-router-dom';
import { TypeProps_HikeOne } from './ContainerHikeOne';


const HikeOne = ({ match, queryHike }: any) => {
    console.log(match);
    const getHikeHandler = (hikeId: string) => {
        // queryHike(hikeId);
    }

    return (
        <>
            <p>one</p>
            <h1>one</h1>
        </>
    )
}


export default HikeOne;