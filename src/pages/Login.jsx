import styles from './Login.module.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
        const response = await axios.post('http://localhost:3000/login', {
            email: email,
            password: password,
        });
    
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);
    
        setEmail('');
        setPassword('');
        navigate('/');
        } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        }
    };
    return (
        <section className={styles.section}>
            <h1>Se connecter</h1>
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
                <button className={styles.button} type='submit'>Se connecter</button>
                <div className={styles.text}>
                    <a className={styles.a}>Mot de passe oublié</a>
                    <a className={styles.a} href='/register'>Créer un compte</a>
                </div>
            </form>
        </section>
    )
}
export default Login