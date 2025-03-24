import { users } from "../../definitions/definitions"
import styles from "./Notification.module.css"

const Notification = ({ notification }) => {
    const { userId, activity, timePast, unread, target } = notification
    const user = users.find(usersItem => usersItem.id === userId)

    return (
        <article className={styles.notification + (unread ? ` ${styles.unread}` : "")}>
            <div className={styles.notification__userPhoto}>
                <img src={user.photo} alt={user.name} />
            </div>

            <div className={styles.notification__info}>
                <header>
                    <h2 className={styles.notification__activity}>
                        <a href={user.url}>{user.name}</a>
                        &nbsp;{activity}
                        &nbsp;{target?.title &&
                            <a href={target.url}>{target.title}</a>}

                        {unread &&
                            <div className={styles.notification__unreadMarker}></div>}
                    </h2>

                    <p className={styles.notification__timePast}>{timePast}</p>
                </header>

                {target?.type === "picture" &&
                    <div className={styles.notification__picture}>
                        <img src={target.picture} alt="Picture" />
                    </div>}
            </div>

            {target?.type === "message" &&
                <div className={styles.notification__message}>{target.message}</div>}
        </article>
    )
}

export default Notification