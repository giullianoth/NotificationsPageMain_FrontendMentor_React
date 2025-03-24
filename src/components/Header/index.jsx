import styles from "./Header.module.css"

const Header = ({ notificationsQt }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>
                Notifications
                <span className={styles.header__notificationsQt}>3</span>
            </h1>
            
            <button className={styles.header__mark}>Mark all as read</button>
        </header>
    )
}

export default Header