import React from 'react';
import UserList from '../components/UserList';

const Users = () =>{
    const USERS = [
        {
            id:'u1',
            name:'Sumaira Ahmed',
            image:'https://i.pinimg.com/736x/6c/71/35/6c71355d09fcf57ff1cafabab28d24f5.jpg',
            places:3
        }
    ]
    return  <UserList items={USERS} />
};

export default Users;