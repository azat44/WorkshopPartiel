import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <div className={styles.divLeft}>
                        <li className={styles.li}><a className={styles.a} href='/'><img src="/logo.svg"/></a></li>
                    </div>
                    <div className={styles.divCenter}>
                        <li className={styles.li}><a className={styles.a} href='/produits'>Produits</a></li>
                        <li className={styles.li}><a className={styles.a} href='/notre-univers'>Notre univers</a></li>
                    </div>
                    <div className={styles.divRight}>
                        <li className={styles.li}>
                            <input className={styles.input}type='text' placeholder='Rechercher' />
                        </li>
                        <li className={styles.li}>
                            <a href='/fav'>
                                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a>
                                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
export default Header;