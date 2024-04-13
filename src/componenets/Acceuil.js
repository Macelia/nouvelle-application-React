import React from 'react'
import './Acceuil.css'

const Acceuil = () => {
  return (
    <div className='Acceuil' >
      <h1>Acceuil</h1><br></br>
      <h2>Bienvenus dans notre Applicaton </h2>
      <div className='center'>
      <h3> Profil Utilisateur :</h3>
      <li> Profil sur un site de médias sociaux :<a href=' https://www.exemple.com/utilisateur123'> https://www.exemple.com/utilisateur123</a></li>
      <li> Profil sur un site de portfolio :<a href=' https://www.exempleportfolio.com/johndoe'> https://www.exempleportfolio.com/johndoe</a></li>
      <li> Profil sur un forum :<a href=' https://forum.exempleforum.com/membre456'> https://forum.exempleforum.com/membre456</a></li>


      <h3> Page de contact :</h3>
      <li> Page de contact sur un site d'entreprise :<a href=' https://www.exempleentreprise.com/contact'> https://www.exempleentreprise.com/contact</a></li>
      <li> Page de contact sur un blog :<a href='https://www.exempleblog.com/contactez-nous'> https://www.exempleblog.com/contactez-nous</a></li>
      <li> Page de contact sur un site de services :<a href=' https://www.exempleservices.com/contact-us'> https://www.exempleservices.com/contact-us</a></li>
      </div>


    </div>
  )
}

export default Acceuil

