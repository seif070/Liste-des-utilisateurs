import React from 'react';
import './UserCard.css';

function UserCard({ user }) {
return (
<div className="user-card">
<h2>{user.name}</h2>
<p><strong>Identifiant:</strong> {user.username}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Adresse:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
<p><strong>Téléphone:</strong> {user.phone}</p>
<p><strong>Site web:</strong> {user.website}</p>
<p><strong>Entreprise:</strong> {user.company.name}</p>
</div>
);
}

export default UserCard;
