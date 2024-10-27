import React from 'react';
import './aboutme.css'; // Assurez-vous que ce chemin est correct
import profileImage from './img/photo.png'; // Ajustez le chemin selon l'emplacement

const ProfileCard = () => {
  return (
    <div className="page-container">
      {/* Bouton Retour */}
      <button className="back-button" onClick={() => window.history.back()}>
        Retour
      </button>
      
      <div className="card-container">
        <img
          style={{
            borderRadius: '50%',  // Pour garder l'image arrondie
            width: '120px',        // Largeur de l'image (réduite pour s'adapter)
            height: '120px',       // Hauteur de l'image (réduite pour un cercle)
            objectFit: 'cover',    // S'assure que l'image s'ajuste à l'espace
            objectPosition: 'top',  // Positionne l'image en haut
            marginRight: '20px',   // Espace entre l'image et le texte
            border: '3px solid #EAB8FF' // Bordure optionnelle
          }}
          src={profileImage}
          alt="user"
        />
        <div className="card-details">
          <h3>Byaeere Abdoul</h3>          
          <p>
            Etudiant en 2 année de BTS SIO option SISR
          </p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary ghost">CV</button>
          </div>
          <div className="skills">
            <h3>Ce que je recherche :</h3>
            <p className="justified">
              Salut à vous,<br /><br />

              Je suis actuellement à la recherche d'une alternance pour ma troisième année en licence professionnelle zen informatique. Je suis passionné par mon domaine d'études et je souhaite acquérir une expérience pratique qui me permettra de développer mes compétences.<br /><br />

              Pour en savoir plus sur mon profil, n'hésitez pas à consulter mon CV. Si vous êtes intéressé par mon parcours et mes compétences. De plus, si vous connaissez des personnes qui cherchent des stagiaires, n'hésitez pas à partager cette information autour de vous. 

              <br /><br />
              Cela m'aiderait beaucoup. Merci !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
