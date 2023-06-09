import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(( )=> { })
        .error(err => {console.err(err)})
    }

    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">FireConTail</a>
                <Link className="btn btn-ghost normal-case text-md" to={'/'}>Home</Link>
                <Link className="btn btn-ghost normal-case text-md" to={'/login'}>Log in</Link>
                <Link className="btn btn-ghost normal-case text-md" to={'/register'}>Register</Link>
                {
                user ? <><span>{user.email}</span> <button onClick={handleLogOut}>Sign Out</button></> :<Link to={'/login'}>Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Header;