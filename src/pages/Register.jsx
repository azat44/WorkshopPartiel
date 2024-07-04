import styles from './Register.module.css'
const Register = () => {
    return (
        <section className={styles.section}>
            <h1>Créer un compte</h1>
            <form className={styles.form}>
                <input className={styles.input}type='email' placeholder='Adresse mail'/>
                <input className={styles.input}type='password' placeholder='Mot de passe'/>
                <input className={styles.input}type='password' placeholder='Confirmer le mot de passe'/>
                <button className={styles.button} type='submit'>Créer mon compte</button>
                <div className={styles.text}>
                    <a className={styles.a} href='/login'>J'ai déjà un compte</a>
                </div>
            </form>
        </section>
    )
}
export default Register