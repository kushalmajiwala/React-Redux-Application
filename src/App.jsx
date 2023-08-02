import './index.css'
import UserDetails from './components/UserDetails'
import TestingComp from './components/TestingComp'
import TestingComp2 from './components/TestingComp2'

function App() {
  return (
    <>
      <div className='flex justify-center mb-10'>
        <p className='text-6xl font-medium text-gray-400'>ADMIN TABLE</p>
      </div>
      <UserDetails />
      <TestingComp />
      <TestingComp2 />
    </>
  )
}

export default App
