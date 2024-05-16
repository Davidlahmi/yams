import { useState } from 'react';
import { addUser } from '../redux/features/User';
import { useDispatch } from "react-redux";

function Signup() {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserame] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:3001/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                username,
            }),
        })

        const data = await response.json()
        if (data.message === 'User registered successfully') {
            localStorage.setItem('token', data.token)
            dispatch(addUser({ email: email, username: data.username, token: data.token }))
            alert('Compte créé !')
            window.location.href = '/game'
        } else {
            alert('Email déjà enregistré')
        }
    }

    return (
        <div className="main">
            <form className="main">
                <h1>Créer un compte</h1>
                <input
                    value={username}
                    onChange={(e) => setUserame(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <button onClick={registerUser}>Créer un compte</button>
                <a href="/signin">J'ai déjà un compte !</a>
            </form>
        </div>
    );
}

export default Signup;