import {useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUsers(data);
            
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
            
            fetchUsers();
        }, []);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link> {user.website}
                </li>
                ))}
            </ul>
            </div>
        );
 
    };   
export default UserList;