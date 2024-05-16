import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../style/home.css';

const Home = () => {
    const navigate = useNavigate();
    const [isTheGameOver, setIsTheGameOver] = useState(false);
    const [isUserConnected, setIsUserConnected] = useState(false);

    useEffect(() => {
        const verifyPastries = async () => {
            await checkEmptyPastry();
        };

        verifyPastries();

        setIsUserConnected(localStorage.hasOwnProperty('token'));
    }, []);

    const checkEmptyPastry = async () => {
        try {
            const response = await fetch("http://localhost:3001/pastries/empty");
            const result = await response.json();
            console.log("Fetched pastries:", result);
            setIsTheGameOver(result.allOutOfStock);
        } catch (error) {
            console.error("Error fetching pastries:", error);
        }
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>
            {isTheGameOver ? (
                <div className="game_over">
                    <h1>Toutes les pâtisseries ont été gagnées !</h1>
                    <div className="buttons-wrapper">
                        <button onClick={() => handleNavigation('/winners')}>Voir les gagnants</button>
                    </div>
                </div>
            ) : (
                <div className="main">
                    <h1>Yummy Yams 🎲</h1>
                    <p>Des pâtisseries à gagner !</p>
                    {isUserConnected ? (
                        <div className="buttons-wrapper">
                            <div className="buttons">
                                <button onClick={() => handleNavigation('/game')}>Jouer</button>
                            </div>
                        </div>
                    ) : (
                        <div className="connexion">
                            <p>Connectez-vous ou créez un compte !</p>
                            <div className="buttons-wrapper">
                                <div className="buttons">
                                    <button onClick={() => handleNavigation('/signup')}>Créer un compte</button>
                                    <button onClick={() => handleNavigation('/signin')}>Se connecter</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
