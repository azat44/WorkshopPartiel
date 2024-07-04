import styles from './SectionProduits.module.css'
const SectionProduits = ({nom, path}) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.nom}>{nom}</h2>
            <img className={styles.image} src={path} alt= {nom}/>
            <button className={styles.button}>
                Acheter
            </button>
        </section>
    )
}
export default SectionProduits