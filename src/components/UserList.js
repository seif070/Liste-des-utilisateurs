import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; 
import UserCard from './UserCard'; 

function UserList() {
const [listOfUsers, setListOfUsers] = useState([]);

useEffect(() => {
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

axios.get(apiUrl)
.then((response) => {
setListOfUsers(response.data);
})
.catch((error) => {
console.error('Erreur lors de la récupération des données : ', error);
});
}, []);

return (
<div className="user-list-container">
<h2 className="user-list-title">Liste des utilisateurs</h2>
<div className="user-cards">
{listOfUsers.map((user) => (
<UserCard key={user.id} user={user} />
))}
</div>
</div>
);
}

export default UserList;
