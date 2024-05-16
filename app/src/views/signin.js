import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from '../redux/features/User';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinUser = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.user) {
                localStorage.setItem('token', data.token);
                dispatch(addUser({ email, username: data.username, token: data.token }));
                navigate('/game');
            } else {
                alert('Veuillez vérifier votre adresse e-mail et votre mot de passe.');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <div className="main">
            <form className="signin-form" onSubmit={signinUser}>
                <h1>Se connecter</h1>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Mot de passe"
                    required
                />
                <br />
                <button type="submit">Se connecter</button>
                <p>
                    <a href="/signup">Je n'ai pas encore de compte !</a>
                </p>
            </form>
        </div>
    );
};

export default Signin;
