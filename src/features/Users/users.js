import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
    const users = useSelector(state => state.users);
    return (
        <div>
            <>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.website}</p>
                            </div>
                        </li>
                    );
                })}
            </>
        </div>
    );
}

export default Users;
