import { UserManagementLayout } from './components/user_management/UserManagementLayout.tsx'
import { Notification } from './components/Notification.tsx'
import { Home } from './components/Home/Home.tsx'
import { useUser } from './hooks/useUser.ts'
import { BoardcontextProvider } from './context/board.tsx'
import './css/index.css'
function App(): JSX.Element {
  const { user} = useUser()
  return (
      <>
        {user ? <BoardcontextProvider>
          <Home />
        </BoardcontextProvider>:
       <UserManagementLayout />}
       
       <Notification/>
      </>

      
    
  )
}

export default App
