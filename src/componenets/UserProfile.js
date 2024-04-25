// Sur la page de profil utilisateur, affichez des informations de profil factices (par exemple, nom, email, etc.).
import React from 'react'
import './UserProfile.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserProfile = () => {

  const users=useLoaderData();

  
  const navigate=useNavigate();

  if(navigate.state === "Loading" ){<h1>Loading</h1>};


  return (
  <div>
      <h1> Our Users - Profile :</h1>
     
     <ul>

     { users.map((user,index)=>(


      <li key={index}>
        <img src={user.photo} alt="User"/>
      
      <div>
        <p>Name: {user.name}</p>
        <p>Email:{user.email}</p>
      </div>
      </li>

        ))}

      </ul>
    </div>
   )
}


export const  photosLoader=async()=>{
try{
  const response =await fetch('https://randomuser.me/api/?results=5');
  const data = await response.json();
  const users = data.results.map(user =>({
    name:`${user.name.first}${user.name.last}`,
    email:user.email,
    photo:user.picture.large,
  }));
  return users;
}
catch(error){console.error('error fetching user data:',error);
return [];
}
 }
export default UserProfile


