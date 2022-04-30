import Users from './components/users'
import { MyProvider } from './context'

const App = () => {
  return (
    <MyProvider>
      <Users/>
    </MyProvider>
  )
} 

export default App;