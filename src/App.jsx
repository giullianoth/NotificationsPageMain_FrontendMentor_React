import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Notification from './components/Notification'

function App() {
  return (
    <>
      <div className='notifications'>
        <Header />
        <main>
          <Notification />
          <Notification />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
