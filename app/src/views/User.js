import React, { useState, useEffect } from "react";

function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.error("Token not found in localStorage");
            setError("Token not found in localStorage");
            setLoading(false);
            return;
        }

        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            const { userId } = JSON.parse(jsonPayload);

            fetch(`http://localhost:3001/users/${userId}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return res.json();
                })
                .then(
                    (result) => {
                        console.log("Fetched user data:", result);
                        setUser(result);
                        setLoading(false);
                    }
                )
                .catch(error => {
                    console.error("Error fetching user data:", error);
                    setLoading(false);
                });
        } catch (error) {
            console.error("Error decoding token:", error);
            setError("Error decoding token");
            setLoading(false);
        }
    }, []);

    if (loading) {
        return
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Tes prix</h1>
            {user.userPrice && user.userPrice.length > 0 ? (
                <ul>
                    {user.userPrice.map((price, index) => (
                        <p key={index}>
                            {price.name}: {price.numberOfPastries}
                        </p>
                    ))}
                </ul>
            ) : (
                <p>Tu n'as encore rien gagné 😔</p>
            )}
        </div>
    );
}

export default User;
