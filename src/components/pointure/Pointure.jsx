import styles from './Pointure.module.css';


const Pointure = ({Pointure, groupPointure}) => {

    return (
    <div className={styles.div}>
        <input 
        value={Pointure} 
        id={Pointure} 
        name={groupPointure} 
        className={styles.radioColor} 
        type='radio'
        />
        <label className={styles.label} htmlFor={Pointure}>
            <p className={styles.text}>{Pointure}</p>
        </label>
    </div>
)
}
export default Pointure