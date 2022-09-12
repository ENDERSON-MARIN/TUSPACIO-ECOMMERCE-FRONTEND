import React, { useState } from "react";
// import {Container} from '@material-ui/core';
// import LandingPage from "../Landing/Landing";
import Home from '../../Components/Home/Home';
import Filter from "../Filter/Filter";
import MyAccount from '../MyAccount/MyAccount';

export default function ContainerCards() {
    
    const [order, setOrder] = useState("")
       
    return(
        <>
           
            <Filter 
                setOrder={setOrder} 
                />
            <Home order={order}/>
            {/* <MyAccount/> */}
        </>
    )
};

