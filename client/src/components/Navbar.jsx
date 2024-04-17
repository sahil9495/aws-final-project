import { NavLink } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => {

    return(
        <>
        <header>

            <div className="container">

                <div className="brand">
                    <img className="img-fluid" src="/logo.jpg" alt="Logo"  />
                    <h2>Blood Donations</h2>
                </div>

                <ul>

                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/donate">Donate Blood</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blood">Blood Requests</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login">Admin</NavLink>
                    </li>

                </ul>
            </div>

        </header>
        </>
    );
};