import styles from './Apercu.module.css'

const Apercu = ({ nom }) => {
    return (
        <div className={styles.div}>
            <a className={styles.a} href='/produit'>
                <div className={styles.image}>
                    <img src='/Paire1.png' alt={nom}/>
                </div>
                <div className={styles.nom}>
                    <p>Wemby One</p>
                </div>
            </a>
        </div>
    );
}
export default Apercu;