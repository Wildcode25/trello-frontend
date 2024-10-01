import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { NotificationProvider } from './context/Notification.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
    <KindeProvider
		clientId="507e6206a22d4d0a862f37c3d75d37f4"
		domain="https://entonce25.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
      <UserProvider>
        <App />
      </UserProvider>
      </KindeProvider>
    </NotificationProvider>
  </StrictMode>,
)
