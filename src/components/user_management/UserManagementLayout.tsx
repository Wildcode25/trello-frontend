import {LoginForm} from './LoginForm.tsx'
import '../components_styles/UserManagementLayout.css'
import { RegisterForm } from "./RegisterForm.tsx"
import { useState } from 'react'
import { FormContextProvider } from '../../context/FormContext.tsx'
export function UserManagementLayout():JSX.Element{
    const [page, setPage]=useState(true)
    return (
      <FormContextProvider>
  
        <div className="layout w-100 h-screen pt-28 flex justify-center items-center">
          {page? <LoginForm page={page} setPage={setPage}/>:
          <RegisterForm page={page} setPage={setPage}/>}
        </div>
        
          </FormContextProvider>
      )}