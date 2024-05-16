import React, { useState, useEffect } from "react";

function Winner() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/users/winners")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Fetched users:", result);
                    setUsers(result).reverse();
                }
            )
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(date);
    };

    return (
        <div>
            <div>
                <h1>Liste des gagnants</h1>
                {users.map(user => (
                    <p key={user.id}>
                        @{user.username} a gagné {user.price} patisserie{user.price > 1 ? 's' : ''} !
                        Sa dernière victoire date du {formatDate(user.updatedAt)}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Winner;
