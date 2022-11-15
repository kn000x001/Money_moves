import React from "react";
import Header from "../components/header/header";
import Search from "../components/header/search";

const Layout = ({children}) => {
return (
    <div className="d-flex row p-2">
        <Header className="col-2"/>
        <div className="col-10 p-0">
            <Search />
            <main>{children}</main>
        </div>
    </div>
)}

export default Layout