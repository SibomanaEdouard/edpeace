import React from 'react';
import { Outlet,Link } from 'react-router-dom';


function Layout(){
    return(
<div>
    <Link to="/login">Login</Link>
    <Outlet/>
</div>
    )
}
export default Layout;