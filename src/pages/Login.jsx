import styles from './Login.module.css'
const Login = () => {
    return (
        <section className={styles.section}>
            <h1>Se connecter</h1>
            <form className={styles.form}>
                <input className={styles.input}type='email' placeholder='Adresse mail'/>
                <input className={styles.input}type='password' placeholder='Mot de passe'/>
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