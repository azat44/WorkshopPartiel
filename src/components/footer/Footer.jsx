import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.column}>
                        <p className={styles.p}>Ressources</p>
                        <ul className={styles.ulColumn}>
                            <li className={styles.li}>
                                <a className={styles.a}>Cartes cadeaux</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Trouver un magasin</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Wemby Journal</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Devenir membre</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Réductions pour étudiants</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Commentaires</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Codes promos</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.p}>Trouver un magasin</p>
                        <ul className={styles.ulColumn}>
                            <li className={styles.li}>
                                <a className={styles.a}>Nike journal</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Codes promos</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Statut de la commande</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Expédition et livraison</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Retours</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Modes de paiment</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Nous contacter</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Avis</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Aide</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.p}>Entreprise</p>
                        <ul className={styles.ulColumn}>
                            <li className={styles.li}>
                                <a className={styles.a}>À propos de Wemby</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Actualités</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Carrières</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Investisseurs</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Développement durable</a>
                            </li>
                            <li className={styles.li}>
                                <a className={styles.a}>Mission</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bot}>
                    <ul className={styles.ulBot}>
                        <li className={styles.liBot}>
                            <p>© 2024 Wemby, Inc. </p>
                        </li>
                        <li className={styles.liBot}>
                            <a>Conditions d'utilisation</a>
                        </li>
                        <li className={styles.liBot}>
                            <a>Conditions générales de vente</a>
                        </li>
                        <li className={styles.liBot}>
                            <a>Informations sur l'entreprise</a>
                        </li>
                        <li className={styles.liBot}>
                            <a>Politique de confidentialité</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer