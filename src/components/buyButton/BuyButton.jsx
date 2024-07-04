import styles from './BuyButton.module.css'

const BuyButton = ({path}) => {
    return (
        <a href={path}>
            <button className={styles.button}>
                Acheter
            </button>
        </a>
    )
}
export default BuyButton;