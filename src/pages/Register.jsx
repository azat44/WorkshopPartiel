import styles from './Register.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        
      
        // Vérifier si les mots de passe correspondent
        if (password !== confirmPassword) {
          setPasswordsMatch(false);
          return; // Arrêter la soumission du formulaire si les mots de passe ne correspondent pas
        }
    
        try {
          // Envoyer la requête POST à l'API pour enregistrer l'utilisateur
            const response = await axios.post('http://localhost:3000/register', {
            email: email,
            password: password,
            });
            console.log('Réponse de l\'API:', response.data);
          // Réinitialiser les champs après soumission réussie (si nécessaire)
            setPassword('');
            setConfirmPassword('');
            setPasswordsMatch(true);
    
            navigate('/login'); 
    
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement:', error);
          // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
        }
    };
    return (
        <section className={styles.section}>
            <h1>Créer un compte</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                className={styles.input}
                type='email' 
                placeholder='Adresse mail'
                value={email}
                onChange={handleEmailChange}
                />
                <input 
                className={styles.input}
                type='password' 
                placeholder='Mot de passe'
                value={password}
                onChange={handlePasswordChange}
                />
                <input 
                className={styles.input}
                type='password' 
                placeholder='Confirmer le mot de passe'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                />
                {!passwordsMatch && <p style={{ color: 'red' }}>Les mots de passe ne correspondent pas.</p>}
                <button className={styles.button} type='submit'>Créer mon compte</button>
                <div className={styles.text}>
                    <a className={styles.a} href='/login'>J'ai déjà un compte</a>
                </div>
            </form>
        </section>
    )
}
export default Register