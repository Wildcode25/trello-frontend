import { UserManagementLayout } from './components/user_management/UserManagementLayout.tsx'
import { Notification } from './components/Notification.tsx'
import { Home } from './components/Home/Home.tsx'
import { useUser } from './hooks/useUser.ts'
function App(): JSX.Element {
  const { user} = useUser()
  return (
      <>
        {user ? <Home />:
       <UserManagementLayout />}
       
       <Notification/>
      </>

      
    
  )
}

export default App
