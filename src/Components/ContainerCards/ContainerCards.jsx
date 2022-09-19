import React, { useState, useEffect} from "react";
// import {Container} from '@material-ui/core';
// import LandingPage from "../Landing/Landing";
import Home from '../../Components/Home/Home';
import Filter from "../Filter/Filter";
// import PersistentDrawerLeft from '../Drawer/Drawer'


export default function ContainerCards({filters, setFilters}) {

    eEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [order, setOrder] = useState("")
           
    return(
        <div className="gral-container">
            {/*<PersistentDrawerLeft />*/}
            <Filter 
                setOrder={setOrder}
                filters={filters}
                setFilters={setFilters} 
            />
            <Home order={order}/>
        </div>
    )
};

