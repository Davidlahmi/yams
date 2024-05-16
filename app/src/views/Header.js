import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "./../redux/features/User";

const Header = () => {
    const userData = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    const redirectToHome = () => {
        window.location.href = '/';
    };

    const redirectToUserPage = () => {
        window.location.href = '/userpage';
    };

    const logout = () => {
        localStorage.removeItem('token');
        const userEmail = localStorage.getItem('email');
        dispatch(clearUser({ email: userEmail }));
        window.location.href = '/';
    };

    return (
        <div className="header">
            {userData && (
                <nav className='navbar'>
                    <button onClick={redirectToUserPage}>Mon profil</button>
                    <button onClick={redirectToHome}>Yummy Yams 🎲</button>
                    <button onClick={logout}>Déconnexion</button>
                </nav>
            )}
        </div>
    );
};

export default Header;
