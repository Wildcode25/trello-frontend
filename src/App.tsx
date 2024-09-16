import { UserManagementLayout } from './components/user_management/UserManagementLayout.tsx'
import { NotificationProvider } from './context/Notification.tsx'
import { Notification } from './components/Notification.tsx'
import { FormContextProvider } from './context/FormContext.tsx'
function App(): JSX.Element {

  return (
    <NotificationProvider>
       <FormContextProvider>
       <UserManagementLayout />
       </FormContextProvider>
       <Notification/>

      </NotificationProvider>
    
  )
}

export default App
