import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
                <h2>CA Nest</h2>
                <a href="/" className={styles.logo}>Toronto Housing Explorer</a>
        </header>
    )
}