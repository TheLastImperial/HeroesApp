import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogOut = () =>{
        navigate('/login',{
            replace: true
        });
    };

    const activeClass = (isActive)=>{
        return 'nav-item nav-link ' + (isActive ? 'active' : '');
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({ isActive }) => activeClass(isActive) }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={ ({ isActive }) => activeClass(isActive) }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Imperial
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogOut }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}