import  SigninForm  from "./_auth/forms/SigninForm"
import { Home } from "./_root/pages"
import SignupForm from "./_auth/forms/SignupForm"
import AuthLayout from './_auth/AuthLayout'
import "./globals.css"
import { Routes,Route } from "react-router-dom"
import RootLayout from "./_root/RootLayout"


function App() {
 

  return (
<main className="flex h-screen bg-slate-400">          
   <Routes>
    <Route element={<AuthLayout/>}>
    <Route path="/sign-in" element={<SigninForm/>}/>
    <Route path="/sign-up" element={<SignupForm/>}/>
    </Route>    
    <Route element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    </Route>
   </Routes>
</main>
  )
}

export default App
