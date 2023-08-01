import './index.css'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <>
      <div className='flex justify-center mb-10'>
        <p className='text-6xl font-medium text-gray-400'>ADMIN TABLE</p>
      </div>
      <UserDetails />
    </>
  )
}

export default App
