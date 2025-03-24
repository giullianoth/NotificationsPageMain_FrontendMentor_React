import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Notification from './components/Notification'
import { activities } from './definitions/definitions'

function App() {
  return (
    <>
      <div className='notifications'>
        <Header />
        <main>
          {activities.map(notification => (
            <Notification
              key={`notification-${notification.id}`}
              notification={notification} />
          ))}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
