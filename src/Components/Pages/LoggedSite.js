import React from 'react'
import Navbar from '../Navbar/NavbarComponent';

const LoggedSite = ({ handleLogout }) => {
    return (
        <div>
            <nav>
                <h2 style={{color: "white", position: "relative", left: "650px", marginTop: "45px", marginBottom: "65px"}}> You signed in. </h2>
                <button style={{width: "150px", position: "relative", left: "680px"}} onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default LoggedSite
