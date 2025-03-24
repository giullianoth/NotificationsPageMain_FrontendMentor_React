import styles from "./Header.module.css"

const Header = ({ notificationsQt, markAllAsRead }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>
                Notifications

                {notificationsQt >= 1 &&
                    <span className={styles.header__notificationsQt}>{notificationsQt}</span>}
            </h1>

            <button
                className={styles.header__mark}
                onClick={markAllAsRead}>Mark all as read</button>
        </header>
    )
}

export default Header