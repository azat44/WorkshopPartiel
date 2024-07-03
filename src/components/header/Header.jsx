import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li href="/">Home</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;