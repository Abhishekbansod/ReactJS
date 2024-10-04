import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        {/* outlet make sures that wherever it is declared, there we can make the changes on UI and other things 
        will be stayed as it is*/}
        {/* In below example header and footer will be same on every page and only outlet part will be changed */}
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout