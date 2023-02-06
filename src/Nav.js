import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import { useState } from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

const Nav = () => {
    const [user, setUser] = useState('')
    
    return (
        <Router>
            <div id='nav-bar' className='p-4 flex justify-between bg-teal-600 text-white'>
                <div id = 'nav-left'>
                    <Link to="/" className='m-1 text-lg'>Flashcards</Link>
                </div>
                <div id = 'nav-right' className='w-1/6 flex justify-around'>
                    <Link to="/sign-up" className='text-lg'>Sign Up</Link>
                    <Link to="/sign-in" className='text-lg'>Sign In</Link>
                </div>
            </div>
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/sign-in" exact element={<SignIn user={user} setUser={setUser}/>} />
        </Routes>
        </Router>
    );
};

export default Nav;