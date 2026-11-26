import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';
import Testing from './components/testing';
import { GoogleOAuthProvider } from '@react-oauth/google';
import VerifyEmail from './pages/login/verifyEmail/verifyEmail';



function App() {
  
  return (
    <GoogleOAuthProvider clientId="350230198157-cagl9ls674tsgf58t3hn1bfvvcfgq8mo.apps.googleusercontent.com">
    <BrowserRouter>
      <Toaster position='top-right' />
      <Routes path="/*">
        <Route path='/testing' element={<Testing/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        
       
        
        {/* <Route path='/*' element={<h1>Not Found</h1>}/> */}
      </Routes>
      
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App

// check github branches
// ppppppppppppppppppppppppp