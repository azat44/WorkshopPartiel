import styles from './Color.module.css';
import { useState } from 'react';

const Color = ({colorName, groupName}) => {

    return (
    <div className={styles.div}>
        <input 
        value={colorName} 
        id={colorName} 
        name={groupName} 
        className={styles.radioColor} 
        type='radio'
        />
        <label className={styles.label} htmlFor={colorName}>
            <img className={styles.imageLabel}src='/Paire1.png'/>
        </label>
    </div>
)
}
export default Color