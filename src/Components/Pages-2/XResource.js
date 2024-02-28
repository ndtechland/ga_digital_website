import React from 'react'
import {useParams} from "react-router-dom";

import Career from './Career';
import Blogs from "./Blogs"
import NewRooms from "./Blogs"


function Service() {
    const {id} = useParams()
    return (
        <>
         {id==="blogs"?<Blogs/>:
          id==="newsrooms"?<NewRooms/>:
          id==="career"?<Career/>:""}
        </>
    )
}

export default Service