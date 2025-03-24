import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Notification from './components/Notification'
import { activities } from './definitions/definitions'

function App() {
  const [notifications, setNotifications] = useState(activities)

  const notificationsQt = () => notifications.filter(notification => notification.unread).length

  const markAsRead = notificationId => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === notificationId) {
        notification.unread = false
      }

      return notification
    })

    setNotifications(updatedNotifications)
  }

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.unread) {
        notification.unread = false
      }

      return notification
    })

    setNotifications(updatedNotifications)
  }

  return (
    <>
      <div className='notifications'>
        <Header
          notificationsQt={notificationsQt()}
          markAllAsRead={markAllAsRead} />
        <main>
          {notifications.map(notification => (
            <Notification
              key={`notification-${notification.id}`}
              notification={notification}
              markAsRead={markAsRead} />
          ))}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
