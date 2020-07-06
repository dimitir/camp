import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TypeProps_HikeOne } from './ContainerHikeOne';


const HikeOne = ({ match, queryHike, hike }: any) => {
    const hikeId = match.params.id;
    console.log(hikeId);
    console.log(hike);
    const getHikeHandler = () => {
        queryHike(hikeId);
    }

    useEffect(
        () => {
            // getHikeHandler()
        }
    ), [hike];
    return (
        <>

            <p>one</p>
            <h1>one</h1>
        </>
    )
}


export default HikeOne;