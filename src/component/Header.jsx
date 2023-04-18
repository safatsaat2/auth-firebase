import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">FireConTail</a>
                <Link className="btn btn-ghost normal-case text-md" to={'/'}>Home</Link>
                <Link className="btn btn-ghost normal-case text-md" to={'/login'}>Log in</Link>
                <Link className="btn btn-ghost normal-case text-md" to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Header;